import { ZZFX } from 'zzfx';

// Parametry zvuků pro ZzFX. Hodnoty se dají naladit v online editoru
// https://killedbyapixel.github.io/ZzFX/ a výsledné pole sem rovnou vložit.
// Pořadí: volume, randomness, frequency, attack, sustain, release, shape, shapeCurve,
//         slide, deltaSlide, pitchJump, pitchJumpTime, repeatTime, noise, modulation,
//         bitCrush, delay, sustainVolume, decay, tremolo, filter
const SFX = {
    hover:     [.4, .05, 420, , .01, .02, 1, 2, , , , , , , , , , .5, .01],
    click:     [.6, .05, 720, , .01, .05, 2, 1.8, , , , , , , , , , .6, .02],
    trail:     [.25, .1, 180, , .01, .03, 2, 3, -20, , , , , .2, , , , .4, .01],
    capture:   [.5, .05, 320, .01, .06, .14, 1, 1.4, , , 260, .04, , , , , , .7, .05],
    beep:      [.5, .02, 880, , .03, .06, 2, 1.2, , , , , , , , , , .6, .03],
    explosion: [.8, .2, 90, .01, .12, .35, 4, 1.8, , , , , , 1.4, , .2, .1, .6, .18],
    bounce:    [.45, .1, 260, , .02, .06, 2, 2.4, 40, , , , , .1, , , , .5, .03],
    death:     [.8, .15, 260, .02, .16, .5, 3, 1.6, -7, , , , , 1.1, , .25, .12, .5, .25],
    victory:   [.6, .05, 520, .02, .14, .3, 1, 1.5, , , 340, .06, .08, , , , , .8, .1],
    pickup:    [.6, .05, 537, .02, .08, .22, 1, 1.59, -6.98, 4.97, , , , , , , , .7, .05],
    // zásah do rozdělané brázdy — krátké prasknutí, po kterém se začne bortit
    collapse:  [.55, .15, 150, .01, .08, .26, 4, 2.4, -6, , , , , 1.2, , .2, .05, .55, .14],
    // paprsek vyrážející z Bosse při jeho rozpadu
    ray:       [.35, .1, 980, , .02, .09, 2, 1.6, 12, , 420, .03, , , , , , .5, .02],
    // Boss nabírá energii — dlouhý stoupající tón jako varování před salvou
    charge:    [.5, .05, 90, .05, 1, .3, 2, 1.4, 6, 3, , , , .1, , , , .6, .12],
    // umlčený generátor
    power:     [.6, .05, 480, .02, .12, .3, 1, 1.6, , , 220, .05, , , , , .05, .7, .1],
    // umlčený poslední generátor — Boss je odzbrojený
    disarm:    [.7, .05, 220, .05, .25, .55, 1, 1.3, , , 330, .08, .12, , , , .1, .8, .2],
    // generátor se probral zpátky k životu
    alarm:     [.55, .05, 420, .02, .14, .3, 2, 1.8, -5, -2, , , , .1, , , .05, .6, .12]
};

// Zvuk stopy se spouští při každé projeté buňce mřížky (i 60× za sekundu),
// proto je potřeba ho omezit, jinak vznikne kaše.
const TRAIL_MIN_INTERVAL = 0.07;

class AudioEngine {
    constructor(settings) {
        this.settings = settings;
        this.ctx = ZZFX.audioContext;

        this.master = this.ctx.createGain();
        this.master.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.connect(this.master);

        this.musicGain = this.ctx.createGain();
        this.musicGain.connect(this.master);

        this.buffers = {};
        this.lastTrailTime = 0;

        this.engineNodes = null;
        this.sequencer = null;
        this.drone = null;

        // Hudba menu zůstává jako nahrávka, zbytek zvuků je generovaný
        this.menuMusic = new Audio('sounds/soundtrack.mp3');
        this.menuMusic.loop = true;

        this.noiseBuffer = this.createNoiseBuffer();
        this.updateVolumes();
    }

    createNoiseBuffer() {
        const length = Math.floor(this.ctx.sampleRate * 0.4);
        const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
        return buffer;
    }

    // Prohlížeč nepustí zvuk, dokud uživatel něco neudělá
    unlock() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    // Generovaná hudba je proti zvukům ze hry tišší, než by při stejné poloze
    // posuvníků měla být — dostává proto pevné přilepšení. Nahrávka v menu ho
    // nepotřebuje, ta je hlasitá dost.
    updateVolumes() {
        this.sfxGain.gain.value = this.settings.sfxVol;
        this.musicGain.gain.value = Math.min(this.settings.bgmVol * 1.35, 1);
        this.menuMusic.volume = this.settings.bgmVol;
    }

    getBuffer(name) {
        if (this.buffers[name]) return this.buffers[name];
        const params = SFX[name];
        if (!params) return null;

        const samples = ZZFX.buildSamples(...params);
        const buffer = this.ctx.createBuffer(1, samples.length, ZZFX.sampleRate);
        buffer.getChannelData(0).set(samples);
        this.buffers[name] = buffer;
        return buffer;
    }

    playSFX(name) {
        if (this.settings.sfxVol <= 0) return;

        if (name === 'trail') {
            if (this.ctx.currentTime - this.lastTrailTime < TRAIL_MIN_INTERVAL) return;
            this.lastTrailTime = this.ctx.currentTime;
        }

        const buffer = this.getBuffer(name);
        if (!buffer) return;

        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = 0.94 + Math.random() * 0.12;
        source.connect(this.sfxGain);
        source.start();
    }

    // --- MOTOR DRONU: dva rozladěné oscilátory, výška se řídí rychlostí letu ---
    startEngine() {
        if (this.engineNodes) return;

        const gain = this.ctx.createGain();
        gain.gain.value = 0;
        gain.connect(this.sfxGain);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 520;
        filter.connect(gain);

        const oscA = this.ctx.createOscillator();
        oscA.type = 'sawtooth';
        oscA.frequency.value = 58;

        const oscB = this.ctx.createOscillator();
        oscB.type = 'sawtooth';
        oscB.frequency.value = 58;
        oscB.detune.value = 14;

        oscA.connect(filter);
        oscB.connect(filter);
        oscA.start();
        oscB.start();

        // Motor běží pořád, takže i mírná hlasitost přebije hudbu. Dřív tu
        // bylo 0.16 a dron přehlušil celý podklad.
        gain.gain.setTargetAtTime(0.065, this.ctx.currentTime, 0.15);
        this.engineNodes = { gain, filter, oscA, oscB };
    }

    stopEngine() {
        if (!this.engineNodes) return;
        const { gain, oscA, oscB } = this.engineNodes;
        this.engineNodes = null;

        const stopAt = this.ctx.currentTime + 0.25;
        gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.06);
        oscA.stop(stopAt);
        oscB.stop(stopAt);
    }

    setEngineSpeed(speed01) {
        if (!this.engineNodes) return;
        const target = 52 + speed01 * 46;
        const now = this.ctx.currentTime;
        this.engineNodes.oscA.frequency.setTargetAtTime(target, now, 0.08);
        this.engineNodes.oscB.frequency.setTargetAtTime(target, now, 0.08);
        this.engineNodes.filter.frequency.setTargetAtTime(420 + speed01 * 500, now, 0.1);
    }

    // --- HUDBA ---
    startMenuMusic() {
        this.stopGameMusic();
        if (!this.menuMusic.paused) return;
        this.menuMusic.play().catch(() => {});
    }

    isMenuMusicPlaying() {
        return !this.menuMusic.paused;
    }

    stopMenuMusic() {
        this.menuMusic.pause();
    }

    startGameMusic() {
        this.stopMenuMusic();
        if (this.sequencer && this.sequencer.mode === 'game') return;
        this.stopSequencer();
        this.stopDrone();
        this.startSequencer('game', 60 / 104 / 4);
    }

    // Boss level má vlastní, temnější podklad: pomalejší tempo, hluboký
    // bzukot pod tím a řídké kovové údery místo hi-hatů.
    startBossMusic() {
        this.stopMenuMusic();
        if (this.sequencer && this.sequencer.mode === 'boss') return;
        this.stopSequencer();
        this.startDrone();
        this.startSequencer('boss', 60 / 72 / 4);
    }

    startSequencer(mode, stepDuration) {
        this.sequencer = {
            mode,
            stepDuration,
            step: 0,
            nextTime: this.ctx.currentTime + 0.1,
            timer: setInterval(() => this.scheduleSteps(), 25)
        };
    }

    stopSequencer() {
        if (!this.sequencer) return;
        clearInterval(this.sequencer.timer);
        this.sequencer = null;
    }

    stopGameMusic() {
        this.stopSequencer();
        this.stopDrone();
    }

    // Hluboký bzukot pod Boss levelem. Filtr se pomalu vlní, aby nebyl mrtvý.
    startDrone() {
        if (this.drone) return;

        const gain = this.ctx.createGain();
        gain.gain.value = 0;
        gain.connect(this.musicGain);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 210;
        filter.Q.value = 5;
        filter.connect(gain);

        const oscA = this.ctx.createOscillator();
        oscA.type = 'sawtooth';
        oscA.frequency.value = 41.2;   // E1
        const oscB = this.ctx.createOscillator();
        oscB.type = 'sawtooth';
        oscB.frequency.value = 61.74;  // B1, kvinta nad ním
        oscB.detune.value = -9;

        const lfo = this.ctx.createOscillator();
        lfo.frequency.value = 0.07;
        const lfoDepth = this.ctx.createGain();
        lfoDepth.gain.value = 95;
        lfo.connect(lfoDepth).connect(filter.frequency);

        oscA.connect(filter);
        oscB.connect(filter);
        oscA.start();
        oscB.start();
        lfo.start();

        gain.gain.setTargetAtTime(0.12, this.ctx.currentTime, 1.2);
        this.drone = { gain, oscA, oscB, lfo };
    }

    stopDrone() {
        if (!this.drone) return;
        const { gain, oscA, oscB, lfo } = this.drone;
        this.drone = null;

        const stopAt = this.ctx.currentTime + 0.9;
        gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.25);
        oscA.stop(stopAt);
        oscB.stop(stopAt);
        lfo.stop(stopAt);
    }

    scheduleSteps() {
        const SCHEDULE_AHEAD = 0.15;

        while (this.sequencer && this.sequencer.nextTime < this.ctx.currentTime + SCHEDULE_AHEAD) {
            this.playStep(this.sequencer.step, this.sequencer.nextTime);
            this.sequencer.step = (this.sequencer.step + 1) % 16;
            this.sequencer.nextTime += this.sequencer.stepDuration;
        }
    }

    playStep(step, time) {
        if (this.sequencer.mode === 'boss') {
            if (step === 0 || step === 9) this.playKick(time, 92, 0.3);
            if (step === 6 || step === 14) this.playClang(time);
            if (step === 0) this.playBass(41.2, time, 0.5);
            if (step === 10) this.playBass(43.65, time, 0.4);
            if (step === 12) this.playBass(38.89, time, 0.4);
            return;
        }

        if (step % 8 === 0) this.playKick(time);
        if (step % 4 === 2) this.playHat(time);
        if (step === 0 || step === 6 || step === 10) {
            this.playBass(step === 0 ? 55 : step === 6 ? 62 : 49, time);
        }
    }

    // vzdálený kovový úder — pro Boss level místo hi-hatu
    playClang(time) {
        const source = this.ctx.createBufferSource();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        source.buffer = this.noiseBuffer;
        filter.type = 'bandpass';
        filter.frequency.value = 1700;
        filter.Q.value = 11;
        gain.gain.setValueAtTime(0.11, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        source.connect(filter).connect(gain).connect(this.musicGain);
        source.start(time);
        source.stop(time + 0.5);
    }

    // Boss si bere nižší a delší variantu, kampaň tu původní.
    playKick(time, startFrequency = 120, decay = 0.16) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFrequency, time);
        osc.frequency.exponentialRampToValueAtTime(startFrequency * 0.37, time + decay * 0.7);
        gain.gain.setValueAtTime(0.42, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + decay);
        osc.connect(gain).connect(this.musicGain);
        osc.start(time);
        osc.stop(time + decay + 0.02);
    }

    playHat(time) {
        const source = this.ctx.createBufferSource();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        source.buffer = this.noiseBuffer;
        filter.type = 'highpass';
        filter.frequency.value = 7000;
        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
        source.connect(filter).connect(gain).connect(this.musicGain);
        source.start(time);
        source.stop(time + 0.06);
    }

    playBass(frequency, time, length = 0.22) {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = frequency;
        filter.type = 'lowpass';
        filter.frequency.value = 700;
        gain.gain.setValueAtTime(0.18, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + length);
        osc.connect(filter).connect(gain).connect(this.musicGain);
        osc.start(time);
        osc.stop(time + length + 0.02);
    }
}

export function createAudioEngine(settings) {
    return new AudioEngine(settings);
}
