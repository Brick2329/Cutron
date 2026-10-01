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
    victory:   [.6, .05, 520, .02, .14, .3, 1, 1.5, , , 340, .06, .08, , , , , .8, .1]
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

    updateVolumes() {
        this.sfxGain.gain.value = this.settings.sfxVol;
        this.musicGain.gain.value = this.settings.bgmVol;
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

        gain.gain.setTargetAtTime(0.16, this.ctx.currentTime, 0.15);
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
        this.menuMusic.play().catch(() => {});
    }

    stopMenuMusic() {
        this.menuMusic.pause();
    }

    startGameMusic() {
        this.stopMenuMusic();
        if (this.sequencer) return;

        this.sequencer = {
            step: 0,
            nextTime: this.ctx.currentTime + 0.1,
            timer: setInterval(() => this.scheduleSteps(), 25)
        };
    }

    stopGameMusic() {
        if (!this.sequencer) return;
        clearInterval(this.sequencer.timer);
        this.sequencer = null;
    }

    scheduleSteps() {
        const STEP_DURATION = 60 / 104 / 4; // šestnáctiny při 104 BPM
        const SCHEDULE_AHEAD = 0.15;

        while (this.sequencer && this.sequencer.nextTime < this.ctx.currentTime + SCHEDULE_AHEAD) {
            this.playStep(this.sequencer.step, this.sequencer.nextTime);
            this.sequencer.step = (this.sequencer.step + 1) % 16;
            this.sequencer.nextTime += STEP_DURATION;
        }
    }

    playStep(step, time) {
        if (step % 8 === 0) this.playKick(time);
        if (step % 4 === 2) this.playHat(time);
        if (step === 0 || step === 6 || step === 10) {
            this.playBass(step === 0 ? 55 : step === 6 ? 62 : 49, time);
        }
    }

    playKick(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, time);
        osc.frequency.exponentialRampToValueAtTime(44, time + 0.11);
        gain.gain.setValueAtTime(0.5, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.16);
        osc.connect(gain).connect(this.musicGain);
        osc.start(time);
        osc.stop(time + 0.18);
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

    playBass(frequency, time) {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = frequency;
        filter.type = 'lowpass';
        filter.frequency.value = 700;
        gain.gain.setValueAtTime(0.18, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
        osc.connect(filter).connect(gain).connect(this.musicGain);
        osc.start(time);
        osc.stop(time + 0.24);
    }
}

export function createAudioEngine(settings) {
    return new AudioEngine(settings);
}
