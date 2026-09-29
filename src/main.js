import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './style.css';

// --- NAČTENÍ EXTERNÍHO FONTU PRO MENU ---
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:ital,wght@1,900&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// --- KONFIGURACE LEVELŮ ---
const LEVELS_CONFIG = [
    { id: 1, target: 80, time: 60, bouncers: 2, eaters: 0, bombers: 0, maxMines: 2 },
    { id: 2, target: 80, time: 70, bouncers: 2, eaters: 1, bombers: 0, maxMines: 3 },
    { id: 3, target: 80, time: 80, bouncers: 3, eaters: 1, bombers: 0, maxMines: 3 },
    { id: 4, target: 80, time: 90, bouncers: 2, eaters: 2, bombers: 1, maxMines: 4 },
    { id: 5, target: 80, time: 100, bouncers: 3, eaters: 2, bombers: 1, maxMines: 5 },
    { id: 6, target: 85, time: 110, bouncers: 4, eaters: 2, bombers: 1, maxMines: 5 },
    { id: 7, target: 85, time: 120, bouncers: 3, eaters: 3, bombers: 2, maxMines: 6 },
    { id: 8, target: 90, time: 130, bouncers: 4, eaters: 3, bombers: 2, maxMines: 7 }
];

// --- LOKALIZACE (CZ / EN) ---
const i18n = {
    cz: {
        title: "CUTRON",
        continue: "Pokračovat",
        newGame: "Nová hra",
        language: "Jazyk: Čeština",
        settings: "Nastavení",
        selectLevel: "Výběr Levelu",
        back: "Zpět",
        level: "Level",
        score: "Skóre",
        pause: "PAUZA",
        resume: "POKRAČOVAT",
        quit: "UKONČIT",
        pausedTitle: "HRA POZASTAVENA",
        pausedSub: "Klikni na obrazovku pro pokračování",
        victory: "VÍTĚZSTVÍ!",
        gameOver: "KONEC HRY",
        captured: "Zabral jsi %s% území.",
        nextLevel: "DALŠÍ LEVEL",
        playAgain: "HRÁT ZNOVU",
        mainMenu: "HLAVNÍ MENU",
        move: "Pohyb",
        reset: "Reset",
        musicVol: "Hlasitost hudby",
        sfxVol: "Hlasitost zvuků",
        reasonTime: "Vypršel čas!",
        reasonCross: "Překřížil jsi vlastní stopu!",
        reasonMine: "Zasáhl tě výbuch miny!",
        reasonEnemyHit: "Nepřítel tě dostal!",
        reasonEnemyTrail: "Nepřítel narazil do tvé stopy!",
        reasonEaterHit: "Eater tě sežral!",
        reasonEaterTrail: "Eater narazil do tvé stopy!",
        reasonFireballHit: "Zasáhla tě ohnivá koule!",
        reasonFireballTrail: "Ohnivá koule zasáhla tvou stopu!",
        reasonBomberHit: "Bomber tě přejel!",
        reasonBomberTrail: "Bomber narazil do tvé stopy!",
        livesOut: "<br>Došly ti životy!"
    },
    en: {
        title: "CUTRON",
        continue: "Continue",
        newGame: "New Game",
        language: "Language: English",
        settings: "Settings",
        selectLevel: "Select Level",
        back: "Back",
        level: "Level",
        score: "Score",
        pause: "PAUSE",
        resume: "RESUME",
        quit: "QUIT",
        pausedTitle: "GAME PAUSED",
        pausedSub: "Click screen to resume",
        victory: "VICTORY!",
        gameOver: "GAME OVER",
        captured: "You captured %s% of the area.",
        nextLevel: "NEXT LEVEL",
        playAgain: "PLAY AGAIN",
        mainMenu: "MAIN MENU",
        move: "Move",
        reset: "Reset",
        musicVol: "Music Volume",
        sfxVol: "SFX Volume",
        reasonTime: "Time's up!",
        reasonCross: "You crossed your own trail!",
        reasonMine: "Hit by a mine explosion!",
        reasonEnemyHit: "Enemy got you!",
        reasonEnemyTrail: "Enemy hit your trail!",
        reasonEaterHit: "Eater ate you!",
        reasonEaterTrail: "Eater hit your trail!",
        reasonFireballHit: "Hit by a fireball!",
        reasonFireballTrail: "Fireball hit your trail!",
        reasonBomberHit: "Bomber ran you over!",
        reasonBomberTrail: "Bomber hit your trail!",
        livesOut: "<br>Out of lives!"
    }
};

let lang = 'cz';
const t = (key) => i18n[lang][key];

// --- DATA, STAVY A NASTAVENÍ HRY ---
let gameState = 'MENU'; // 'MENU', 'LEVEL_SELECT', 'PLAYING'
let progress = JSON.parse(localStorage.getItem('cutronProgress')) || { unlocked: 1, scores: {} };
let settingsConfig = JSON.parse(localStorage.getItem('cutronSettings')) || { sfxVol: 0.5, bgmVol: 0.3 };

function saveProgress() { localStorage.setItem('cutronProgress', JSON.stringify(progress)); }
function saveSettings() { localStorage.setItem('cutronSettings', JSON.stringify(settingsConfig)); }

let currentLevelId = 1;
let currentLevelConfig = null;
let maxActiveMines = 5;

let isPaused = false;
let isGameOver = false;
let isRespawning = false; 
let isWinAnimating = false; 
let cameraShakeTime = 0;  
let fireworkTimer = 0;    

let lives = 3;
let timeRemaining = 60;
let filledPercentage = 0;
let targetPercentage = 80;

// --- AUDIO MANAGER ---
class SoundManager {
    constructor() {
        this.bgm = new Audio('sounds/soundtrack.mp3');
        this.bgm.loop = true;
        
        this.engine = new Audio('sounds/engine.mp3');
        this.engine.loop = true;

        this.sfx = {};
        
        // Zde si můžeš definovat libovolný mix .wav a .mp3 souborů
        const sfxFiles = {
            'hover': 'hover.wav',
            'click': 'click.wav',
            'trail': 'trail.mp3',      
            'beep': 'beep.wav',
            'explosion': 'explosion.wav',
            'bounce': 'bounce.mp3'     
        };

        Object.keys(sfxFiles).forEach(name => {
            this.sfx[name] = new Audio(`sounds/${sfxFiles[name]}`);
            this.sfx[name].preload = 'auto';
        });

        this.bgmStarted = false;
        this.updateVolumes();
    }

    updateVolumes() {
        this.bgm.volume = settingsConfig.bgmVol;
        this.engine.volume = settingsConfig.sfxVol * 0.3; 
    }

    playSFX(name) {
        if (settingsConfig.sfxVol <= 0 || !this.sfx[name]) return;
        const clone = this.sfx[name].cloneNode();
        clone.volume = name === 'trail' ? settingsConfig.sfxVol * 0.4 : settingsConfig.sfxVol;
        clone.play().catch(() => {});
    }

    startGlobalBGM() {
        if (!this.bgmStarted) {
            this.bgm.play().catch(() => {});
            this.bgmStarted = true;
        }
    }
}
const soundManager = new SoundManager();

// --- 1. ZÁKLADNÍ NASTAVENÍ SCÉNY ---
const scene = new THREE.Scene();

const bgColor = 0x1e293b; 
scene.background = new THREE.Color(bgColor); 
scene.fog = new THREE.Fog(bgColor, 15, 60); 

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true; 
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const particlesGeo = new THREE.BufferGeometry();
const particlesCount = 8000; 
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i+=3) {
    posArray[i] = (Math.random() - 0.5) * 250; 
    posArray[i+1] = (Math.random() - 0.5) * 150; 
    posArray[i+2] = (Math.random() - 0.5) * 250; 
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMat = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x3498db, 
    transparent: true,
    opacity: 0.6
});

const backgroundParticles = new THREE.Points(particlesGeo, particlesMat);
backgroundParticles.position.y = 0; 
scene.add(backgroundParticles);

// --- UI KONTEJNERY ---
const uiContainer = document.createElement('div');
Object.assign(uiContainer.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    pointerEvents: 'none', fontFamily: 'sans-serif', overflow: 'hidden'
});
document.body.appendChild(uiContainer);

// MENU UI
const menuUI = document.createElement('div');
Object.assign(menuUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    background: 'transparent'
});
uiContainer.appendChild(menuUI);

const menuContent = document.createElement('div');
Object.assign(menuContent.style, {
    marginTop: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '10'
});
menuUI.appendChild(menuContent);

const titleEl = document.createElement('div');
Object.assign(titleEl.style, {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '130px', 
    fontWeight: '900', 
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    fontStyle: 'italic',
    textShadow: '0 0 10px #3498db, 0 0 20px #3498db, 0 0 40px #2980b9, 0 0 80px #2980b9, 4px 4px 0px rgba(0,0,0,0.5)',
    marginBottom: '50px'
});
titleEl.innerText = i18n[lang].title;
menuContent.appendChild(titleEl);

function createMenuButton(textKey, onClick) {
    const btn = document.createElement('button');
    btn.dataset.textKey = textKey;
    btn.innerText = t(textKey);
    Object.assign(btn.style, {
        padding: '15px 40px', fontSize: '22px', fontWeight: 'bold', cursor: 'pointer',
        backgroundColor: 'rgba(255,255,255,0.05)', color: '#60a5fa', border: '2px solid #60a5fa',
        borderRadius: '8px', marginBottom: '20px', width: '300px',
        transition: 'all 0.2s', backdropFilter: 'blur(5px)'
    });
    btn.onmouseover = () => { 
        btn.style.backgroundColor = 'rgba(96, 165, 250, 0.2)'; 
        btn.style.transform = 'scale(1.05)'; 
        soundManager.playSFX('hover');
    };
    btn.onmouseout = () => { 
        btn.style.backgroundColor = 'rgba(255,255,255,0.05)'; 
        btn.style.transform = 'scale(1)'; 
    };
    btn.onclick = (e) => {
        soundManager.playSFX('click');
        soundManager.startGlobalBGM();
        onClick(e);
    };
    return btn;
}

const btnContinue = createMenuButton('continue', () => openLevelSelect());
const btnNewGame = createMenuButton('newGame', () => {
    progress = { unlocked: 1, scores: {} };
    saveProgress();
    openLevelSelect();
});
const btnLanguage = createMenuButton('language', () => {
    lang = lang === 'cz' ? 'en' : 'cz';
    updateAllTexts();
});
const btnSettings = createMenuButton('settings', () => {
    menuUI.style.display = 'none';
    settingsUI.style.display = 'flex';
});

menuContent.appendChild(btnContinue);
menuContent.appendChild(btnNewGame);
menuContent.appendChild(btnLanguage);
menuContent.appendChild(btnSettings);

// VÝBĚR LEVELU UI
const levelSelectUI = document.createElement('div');
Object.assign(levelSelectUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'none', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    backgroundColor: 'rgba(15, 23, 42, 0.9)'
});
uiContainer.appendChild(levelSelectUI);

const levelSelectTitle = document.createElement('div');
Object.assign(levelSelectTitle.style, {
    fontFamily: "'Orbitron', sans-serif", fontSize: '50px', fontWeight: '900', color: '#f8fafc', 
    marginTop: '10vh', marginBottom: '40px', textShadow: '0 0 10px #3498db'
});
levelSelectTitle.dataset.textKey = 'selectLevel';
levelSelectUI.appendChild(levelSelectTitle);

const levelGrid = document.createElement('div');
Object.assign(levelGrid.style, {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px'
});
levelSelectUI.appendChild(levelGrid);

const btnBackMenu = createMenuButton('back', () => {
    levelSelectUI.style.display = 'none';
    menuUI.style.display = 'flex';
});
btnBackMenu.style.marginTop = '50px';
levelSelectUI.appendChild(btnBackMenu);

// NASTAVENÍ UI
const settingsUI = document.createElement('div');
Object.assign(settingsUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'none', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    backgroundColor: 'rgba(15, 23, 42, 0.95)'
});
uiContainer.appendChild(settingsUI);

const settingsTitle = document.createElement('div');
Object.assign(settingsTitle.style, {
    fontFamily: "'Orbitron', sans-serif", fontSize: '50px', fontWeight: '900', color: '#f8fafc', 
    marginTop: '10vh', marginBottom: '40px', textShadow: '0 0 10px #3498db'
});
settingsTitle.dataset.textKey = 'settings';
settingsUI.appendChild(settingsTitle);

function createSlider(labelKey, initialValue, onChangeCallback) {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '30px';
    wrapper.style.textAlign = 'center';

    const label = document.createElement('div');
    label.dataset.textKey = labelKey;
    label.style.color = '#f8fafc';
    label.style.fontSize = '24px';
    label.style.marginBottom = '15px';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 0; slider.max = 1; slider.step = 0.05;
    slider.value = initialValue;
    slider.style.width = '300px';
    slider.style.cursor = 'pointer';

    slider.oninput = (e) => onChangeCallback(parseFloat(e.target.value));

    wrapper.appendChild(label);
    wrapper.appendChild(slider);
    return wrapper;
}

settingsUI.appendChild(createSlider('musicVol', settingsConfig.bgmVol, (val) => {
    settingsConfig.bgmVol = val;
    saveSettings();
    soundManager.updateVolumes();
}));
settingsUI.appendChild(createSlider('sfxVol', settingsConfig.sfxVol, (val) => {
    settingsConfig.sfxVol = val;
    saveSettings();
    soundManager.updateVolumes();
}));

const btnBackSettings = createMenuButton('back', () => {
    settingsUI.style.display = 'none';
    menuUI.style.display = 'flex';
});
btnBackSettings.style.marginTop = '50px';
settingsUI.appendChild(btnBackSettings);


// HERNÍ HUD
const gameUI = document.createElement('div');
Object.assign(gameUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'none'
});
uiContainer.appendChild(gameUI);

const hudContainer = document.createElement('div');
Object.assign(hudContainer.style, {
    position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '25px',
    fontSize: '24px', fontWeight: 'bold', color: '#f8fafc', textShadow: '0px 2px 4px rgba(0,0,0,0.8)'
});
gameUI.appendChild(hudContainer);

const livesEl = document.createElement('div');
const timeEl = document.createElement('div');
const percentEl = document.createElement('div');
hudContainer.appendChild(livesEl);
hudContainer.appendChild(percentEl);
hudContainer.appendChild(timeEl);

// --- HORNÍ TLAČÍTKA (Pauza a Ukončit) ---
const topButtons = document.createElement('div');
Object.assign(topButtons.style, {
    position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '15px', zIndex: '100'
});
gameUI.appendChild(topButtons);

const pauseBtn = document.createElement('button');
pauseBtn.dataset.textKey = 'pause';
Object.assign(pauseBtn.style, {
    padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'rgba(255,255,255,0.1)',
    border: '2px solid #60a5fa', color: '#60a5fa', borderRadius: '5px'
});
topButtons.appendChild(pauseBtn);

const quitBtn = document.createElement('button');
quitBtn.dataset.textKey = 'quit';
Object.assign(quitBtn.style, {
    padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'rgba(231, 76, 60, 0.1)',
    border: '2px solid #e74c3c', color: '#e74c3c', borderRadius: '5px'
});
quitBtn.onclick = (e) => {
    e.stopPropagation();
    soundManager.playSFX('click');
    quitToMenu();
};
topButtons.appendChild(quitBtn);

// OVERLAYS
const pauseOverlay = document.createElement('div');
Object.assign(pauseOverlay.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.85)', display: 'none', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column', color: '#3498db', fontSize: '48px',
    fontWeight: 'bold', pointerEvents: 'auto', textAlign: 'center'
});
gameUI.appendChild(pauseOverlay);

const resultOverlay = document.createElement('div');
Object.assign(resultOverlay.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.95)', display: 'none', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column', pointerEvents: 'auto', textAlign: 'center'
});
gameUI.appendChild(resultOverlay);

// OVLÁDÁNÍ INFO
const controlsUI = document.createElement('div');
Object.assign(controlsUI.style, {
    position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
    display: 'flex', gap: '40px', alignItems: 'center'
});
gameUI.appendChild(controlsUI);

function createKeyElement(keyText) {
    const el = document.createElement('div');
    el.innerText = keyText;
    Object.assign(el.style, {
        padding: '8px 12px', fontSize: '16px', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.1)',
        border: '2px solid #3498db', color: '#3498db', borderRadius: '5px'
    });
    return el;
}
function createTextElement(key) {
    const el = document.createElement('div');
    el.dataset.textKey = key;
    Object.assign(el.style, { fontSize: '20px', fontWeight: 'bold', color: '#cbd5e1' });
    return el;
}

const moveGroup = document.createElement('div');
moveGroup.style.display = 'flex'; moveGroup.style.alignItems = 'center'; moveGroup.style.gap = '15px';
const keysGroup = document.createElement('div');
keysGroup.style.display = 'flex'; keysGroup.style.gap = '5px';
['W', 'A', 'S', 'D'].forEach(k => keysGroup.appendChild(createKeyElement(k)));
moveGroup.appendChild(keysGroup);
moveGroup.appendChild(createTextElement('move'));
controlsUI.appendChild(moveGroup);


// --- UPDATE TEXTŮ A MENU ---
function updateAllTexts() {
    document.querySelectorAll('[data-text-key]').forEach(el => {
        el.innerText = t(el.dataset.textKey);
    });
    if(gameState === 'PLAYING' || isPaused || isGameOver) updateHUD();
    
    btnContinue.style.display = progress.unlocked > 1 || Object.keys(progress.scores).length > 0 ? 'block' : 'none';
}

function openLevelSelect() {
    menuUI.style.display = 'none';
    levelSelectUI.style.display = 'flex';
    levelGrid.innerHTML = '';
    
    LEVELS_CONFIG.forEach(config => {
        const isUnlocked = config.id <= progress.unlocked;
        const box = document.createElement('div');
        
        Object.assign(box.style, {
            width: '120px', height: '120px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', borderRadius: '10px',
            border: isUnlocked ? '2px solid #3498db' : '2px solid #475569',
            backgroundColor: isUnlocked ? 'rgba(52, 152, 219, 0.1)' : 'rgba(71, 85, 105, 0.1)',
            cursor: isUnlocked ? 'pointer' : 'not-allowed', transition: 'transform 0.2s',
            color: isUnlocked ? '#f8fafc' : '#94a3b8'
        });

        box.innerHTML = `<div style="font-family: 'Orbitron', sans-serif; font-size: 32px; font-weight: 900;">${config.id}</div>`;
        
        if (progress.scores[config.id]) {
            box.innerHTML += `<div style="font-size: 14px; margin-top: 10px; color: #2ecc71;">⭐ ${progress.scores[config.id]}</div>`;
        } else if (!isUnlocked) {
            box.innerHTML += `<div style="font-size: 14px; margin-top: 10px;">🔒</div>`;
        }

        if (isUnlocked) {
            box.onmouseover = () => { box.style.transform = 'scale(1.1)'; soundManager.playSFX('hover'); };
            box.onmouseout = () => box.style.transform = 'scale(1)';
            box.onclick = () => { soundManager.playSFX('click'); startLevel(config.id); };
        }
        levelGrid.appendChild(box);
    });
}

function updateHUD() {
    livesEl.innerText = `❤️ ${lives}`;
    timeEl.innerText = `⏱️ ${Math.ceil(timeRemaining)}s`;
    percentEl.innerText = `📊 ${filledPercentage}% / ${targetPercentage}%`;
    timeEl.style.color = timeRemaining <= 10 ? '#e74c3c' : '#f8fafc'; 
}

function togglePause(forcePause) {
    if (gameState !== 'PLAYING' || isGameOver || isWinAnimating) return; 
    
    soundManager.playSFX('click');
    isPaused = typeof forcePause === 'boolean' ? forcePause : !isPaused;

    if (isPaused) {
        soundManager.engine.pause();
        pauseOverlay.style.display = 'flex';
        pauseOverlay.innerHTML = `<span style="font-family: 'Orbitron', sans-serif;">${t('pausedTitle')}</span><br><span style="font-size: 20px; color: #cbd5e1; cursor:pointer; margin-top:15px;">${t('pausedSub')}</span>`;
        pauseBtn.dataset.textKey = 'resume';
        pauseBtn.innerText = t('resume');
    } else {
        soundManager.engine.play().catch(()=>{});
        pauseOverlay.style.display = 'none';
        pauseBtn.dataset.textKey = 'pause';
        pauseBtn.innerText = t('pause');
    }
}

pauseBtn.addEventListener('click', togglePause);
pauseOverlay.addEventListener('click', () => togglePause(false));
document.addEventListener('visibilitychange', () => { if (document.hidden && gameState === 'PLAYING') togglePause(true); });

// --- HLAVNÍ FUNKCE PRO OPRAVU KAMERY A UKONČENÍ HRY ---
function quitToMenu() {
    isGameOver = false;
    isPaused = false;
    isRespawning = false;
    isWinAnimating = false;
    gameState = 'MENU';
    cameraShakeTime = 0;
    lastTrailDir = null;
    
    soundManager.engine.pause();
    
    // Skrytí všech herních UI a arény
    pauseOverlay.style.display = 'none';
    resultOverlay.style.display = 'none';
    gameUI.style.display = 'none';
    levelSelectUI.style.display = 'none';
    sceneGroup.visible = false; 
    
    clearSceneEntities(); // Vymaže částice, nepřátele atd.
    
    // NUCENÝ RESET hráče
    player.position.set(0, 0, (ARENA_SIZE / 2) - (CELL_SIZE / 2));
    player.rotation.set(0, 0, 0); 
    player.visible = true;
    
    // NUCENÝ OKAMŽITÝ RESET KAMERY
    camera.position.set(0, 4, 15);
    cameraLookAtTarget.set(0, 4, 0);
    camera.lookAt(cameraLookAtTarget);
    
    pauseBtn.dataset.textKey = 'pause';
    updateAllTexts();
    menuUI.style.display = 'flex';
}

function showResult(isWin, reasonKey = "") {
    isGameOver = true;
    soundManager.engine.pause();
    resultOverlay.style.display = 'flex';
    controlsUI.style.display = 'none';
    
    let scoreHTML = '';
    if (isWin) {
        const score = Math.floor(filledPercentage * timeRemaining * lives * currentLevelId);
        
        if (!progress.scores[currentLevelId] || score > progress.scores[currentLevelId]) {
            progress.scores[currentLevelId] = score;
        }
        if (currentLevelId === progress.unlocked && currentLevelId < LEVELS_CONFIG.length) {
            progress.unlocked++;
        }
        saveProgress();

        scoreHTML = `<div style="font-size: 30px; margin-top: 20px; color: #2ecc71;">${t('score')}: ${score}</div>`;
        resultOverlay.innerHTML = `
            <div style="font-family: 'Orbitron', sans-serif; color: #2ecc71; font-size: 60px; font-weight: 900; text-shadow: 0 0 10px #2ecc71;">${t('victory')}</div>
            <div style="font-size: 24px; color: #cbd5e1; margin-top: 10px;">${t('captured').replace('%s', filledPercentage)}</div>
            ${scoreHTML}`;
    } else {
        resultOverlay.innerHTML = `
            <div style="font-family: 'Orbitron', sans-serif; color: #e74c3c; font-size: 60px; font-weight: 900; text-shadow: 0 0 10px #e74c3c;">${t('gameOver')}</div>
            <div style="font-size: 24px; color: #cbd5e1; margin-top: 10px;">${reasonKey}</div>`;
    }

    const btnContainer = document.createElement('div');
    Object.assign(btnContainer.style, { marginTop: '40px', display: 'flex', gap: '20px' });
    
    if (isWin && currentLevelId < LEVELS_CONFIG.length) {
        const nextBtn = document.createElement('button');
        nextBtn.innerText = t('nextLevel');
        Object.assign(nextBtn.style, {
            padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
            backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px'
        });
        nextBtn.onclick = () => { soundManager.playSFX('click'); startLevel(currentLevelId + 1); };
        btnContainer.appendChild(nextBtn);
    }
    
    const restartBtn = document.createElement('button');
    restartBtn.innerText = t('playAgain');
    Object.assign(restartBtn.style, {
        padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
        backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px'
    });
    restartBtn.onclick = () => { soundManager.playSFX('click'); startLevel(currentLevelId); }; 
    
    const menuBtn = document.createElement('button');
    menuBtn.innerText = t('mainMenu');
    Object.assign(menuBtn.style, {
        padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer',
        backgroundColor: 'transparent', color: '#3498db', border: '2px solid #3498db', borderRadius: '5px'
    });
    menuBtn.onclick = () => { soundManager.playSFX('click'); quitToMenu(); };

    btnContainer.appendChild(restartBtn);
    btnContainer.appendChild(menuBtn);
    resultOverlay.appendChild(btnContainer);
}


// --- 2. OSVĚTLENÍ ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

// Širší stínová kamera pro pokrytí celé arény
const d = 25; 
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 100;
scene.add(dirLight);

// --- 3. HERNÍ PLOCHA A GRID ---
const GRID_SIZE = 100;  
const CELL_SIZE = 0.25; 
const ARENA_SIZE = GRID_SIZE * CELL_SIZE; 
const BLOCK_HEIGHT = 1; 
const TOTAL_FILLABLE_CELLS = (GRID_SIZE - 2) * (GRID_SIZE - 2); 

let grid = []; 
let currentTrail = []; 
const animatingBlocks = []; 

const sceneGroup = new THREE.Group();
sceneGroup.visible = false; 
scene.add(sceneGroup);

const emptyMaterial = new THREE.MeshLambertMaterial({ color: 0xbdc3c7 }); 
const floor = new THREE.Mesh(new THREE.PlaneGeometry(ARENA_SIZE, ARENA_SIZE), emptyMaterial);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
sceneGroup.add(floor);

const MAX_BLOCKS = GRID_SIZE * GRID_SIZE;
const blockGeometry = new THREE.BoxGeometry(CELL_SIZE, BLOCK_HEIGHT, CELL_SIZE);
const blockMaterial = new THREE.MeshLambertMaterial(); 
const blocksMesh = new THREE.InstancedMesh(blockGeometry, blockMaterial, MAX_BLOCKS);

blocksMesh.castShadow = false; 
blocksMesh.receiveShadow = true;
blocksMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
sceneGroup.add(blocksMesh);

const dummy = new THREE.Object3D(); 
const colorWall = new THREE.Color(0x3498db);  
const colorTrail = new THREE.Color(0xe74c3c); 

function getIndex(x, z) { return z * GRID_SIZE + x; }

function createBlock(gridX, gridZ, color, type, animateRise = true) {
    const worldX = gridX * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
    const worldZ = gridZ * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
    const targetY = BLOCK_HEIGHT / 2;
    const index = getIndex(gridX, gridZ);

    grid[gridZ][gridX] = type;
    blocksMesh.setColorAt(index, color);

    if (animateRise) {
        dummy.position.set(worldX, targetY - BLOCK_HEIGHT, worldZ);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        blocksMesh.setMatrixAt(index, dummy.matrix);
        animatingBlocks.push({ index: index, x: worldX, z: worldZ, currentY: targetY - BLOCK_HEIGHT, targetY: targetY });
    } else {
        dummy.position.set(worldX, targetY, worldZ);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        blocksMesh.setMatrixAt(index, dummy.matrix);
    }
    
    blocksMesh.instanceMatrix.needsUpdate = true;
    if (blocksMesh.instanceColor) blocksMesh.instanceColor.needsUpdate = true;
}

function resetGrid() {
    for (let z = 0; z < GRID_SIZE; z++) {
        if (!grid[z]) grid[z] = [];
        for (let x = 0; x < GRID_SIZE; x++) {
            if (x === 0 || x === GRID_SIZE - 1 || z === 0 || z === GRID_SIZE - 1) {
                grid[z][x] = 1;
                createBlock(x, z, colorWall, 1, false);
            } else {
                grid[z][x] = 0;
                const index = getIndex(x, z);
                dummy.scale.set(0, 0, 0);
                dummy.updateMatrix();
                blocksMesh.setMatrixAt(index, dummy.matrix);
            }
        }
    }
    blocksMesh.instanceMatrix.needsUpdate = true;
    currentTrail = [];
    animatingBlocks.length = 0;
    filledPercentage = 0;
}

// Inicializace prázdného gridu
for (let i = 0; i < MAX_BLOCKS; i++) {
    dummy.scale.set(0, 0, 0);
    dummy.updateMatrix();
    blocksMesh.setMatrixAt(i, dummy.matrix);
}
resetGrid();

// --- 4. HRÁČ ---
let player = new THREE.Group(); 
let rotor1 = null; 
let rotor2 = null; 
let droneModel = null; 

player.position.set(0, 0, (ARENA_SIZE / 2) - (CELL_SIZE / 2));
scene.add(player);

const loader = new GLTFLoader();
loader.load('Sprite_drone_2.glb', (gltf) => {
    droneModel = gltf.scene; 
    droneModel.scale.set(0.15, 0.15, 0.15); 
    
    rotor1 = droneModel.getObjectByName('Rotor_one');
    rotor2 = droneModel.getObjectByName('Rotor_two');

    droneModel.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    
    player.add(droneModel); 
});

const loadedItemModels = {};
const itemConfig = { 'mine': { file: 'Landmine.glb', scale: 0.75, offsetY: 0 } };

loader.load(itemConfig.mine.file, (gltf) => {
    const model = gltf.scene;
    model.scale.set(itemConfig.mine.scale, itemConfig.mine.scale, itemConfig.mine.scale); 
    model.traverse((child) => {
        if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
    });
    loadedItemModels['mine'] = model;
});

// --- 5. OVLÁDÁNÍ A POHYB ---
const keys = { w: false, a: false, s: false, d: false };
const BASE_MAX_SPEED = 15;
let currentMaxSpeed = BASE_MAX_SPEED; 
let velocityX = 0;   
let velocityZ = 0;   
const accelerationRate = 8; 

window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keys.hasOwnProperty(key)) keys[key] = true;
});
window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (keys.hasOwnProperty(key)) keys[key] = false;
});
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- 6. NEPŘÁTELÉ A EXPLOZE ---
const particles = [];
const particleGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
const particleMatRed = new THREE.MeshBasicMaterial({ color: 0x8b0000 }); 
const particleMatBlack = new THREE.MeshBasicMaterial({ color: 0x222222 }); 
const particleMatOrange = new THREE.MeshBasicMaterial({ color: 0xff8800 }); 
const fwColors = [0xffd700, 0x00ffaa, 0x00aaff, 0xff00aa, 0xffffff]; 
const fwMaterials = fwColors.map(c => new THREE.MeshBasicMaterial({ color: c }));

function createExplosion(x, y, z, count = 45, matOptions = [particleMatRed, particleMatBlack]) {
    for (let i = 0; i < count; i++) { 
        const mat = matOptions[Math.floor(Math.random() * matOptions.length)];
        const mesh = new THREE.Mesh(particleGeo, mat);
        mesh.position.set(x, y, z);
        scene.add(mesh);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 4; 
        const vy = Math.random() * 10 + 5;   
        particles.push({ mesh: mesh, vx: Math.cos(angle) * speed, vy: vy, vz: Math.sin(angle) * speed, life: 1.0 });
    }
}

function createFireworks(x, y, z) {
    const mat = fwMaterials[Math.floor(Math.random() * fwMaterials.length)];
    for (let i = 0; i < 40; i++) {
        const mesh = new THREE.Mesh(particleGeo, mat);
        mesh.position.set(x, y, z);
        scene.add(mesh);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 10 + 2; 
        const vy = Math.random() * 12 + 4;   
        particles.push({ mesh: mesh, vx: Math.cos(angle) * speed, vy: vy, vz: Math.sin(angle) * speed, life: 1.2 });
    }
}

const activeItems = [];
let itemSpawnTimer = 0;

class Item {
    constructor(x, z) {
        this.radius = CELL_SIZE * 0.4;
        this.isDead = false;
        this.timer = 5; 
        
        this.mesh = new THREE.Group();
        this.mesh.position.set(x, 15, z); 
        this.targetY = BLOCK_HEIGHT + (itemConfig.mine.offsetY || 0);

        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const texture = new THREE.CanvasTexture(canvas);
        
        this.textSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
        this.textSprite.position.y = 0.5; 
        this.textSprite.scale.set(0.6, 0.6, 1);
        this.textSprite.visible = false; 
        
        this.textCanvas = canvas; this.textCtx = ctx; this.textTexture = texture;
        this.mesh.add(this.textSprite);
        this.isTriggered = false; this.lastDisplayedSecond = -1;

        if (loadedItemModels['mine']) {
            const visual = loadedItemModels['mine'].clone();
            visual.traverse((child) => { if (child.isMesh && child.material) child.material = child.material.clone(); });
            this.mesh.add(visual);
        } else {
            const base = new THREE.Mesh(new THREE.CylinderGeometry(CELL_SIZE * 0.4, CELL_SIZE * 0.4, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x111111 }));
            this.mesh.add(base);
        }
        sceneGroup.add(this.mesh);
    }

    updateCountdownText(seconds) {
        if (seconds === this.lastDisplayedSecond) return;
        this.lastDisplayedSecond = seconds;
        
        soundManager.playSFX('beep');
        
        this.textCtx.clearRect(0, 0, 128, 128);
        this.textCtx.fillStyle = '#ffffff'; 
        this.textCtx.font = 'bold 70px sans-serif';
        this.textCtx.textAlign = 'center'; this.textCtx.textBaseline = 'middle';
        this.textCtx.lineWidth = 4; this.textCtx.strokeStyle = '#000000';
        this.textCtx.strokeText(seconds.toString(), 64, 64);
        this.textCtx.fillText(seconds.toString(), 64, 64);
        this.textTexture.needsUpdate = true;
    }

    explodeMine() {
        soundManager.playSFX('explosion');
        
        const currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        let ateSomething = false;
        const explosionRadius = 7;
        
        for (let dz = -explosionRadius; dz <= explosionRadius; dz++) {
            for (let dx = -explosionRadius; dx <= explosionRadius; dx++) {
                if (dx * dx + dz * dz <= explosionRadius * explosionRadius) {
                    const x = currentGridX + dx; const z = currentGridZ + dz;
                    if (x > 0 && x < GRID_SIZE - 1 && z > 0 && z < GRID_SIZE - 1) {
                        if (grid[z][x] === 1) {
                            grid[z][x] = 0; 
                            const index = getIndex(x, z);
                            dummy.scale.set(0, 0, 0); dummy.updateMatrix();
                            blocksMesh.setMatrixAt(index, dummy.matrix);
                            ateSomething = true;
                        }
                    }
                }
            }
        }
        
        if (ateSomething) { blocksMesh.instanceMatrix.needsUpdate = true; calculatePercentage(); }
        createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 80, [particleMatRed, particleMatOrange, particleMatBlack]);
        
        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating && !isGameOver) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < explosionRadius * CELL_SIZE) { 
                playerDied(t('reasonMine'));
            }
        }
    }

    update(delta) {
        if (this.isDead) return;
        if (this.mesh.position.y > this.targetY) {
            this.mesh.position.y -= 15 * delta;
            if (this.mesh.position.y < this.targetY) this.mesh.position.y = this.targetY;
        }

        const currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);

        if (this.mesh.position.y <= this.targetY + 0.1 && grid[currentGridZ] && grid[currentGridZ][currentGridX] === 0) {
            this.explodeMine(); sceneGroup.remove(this.mesh); this.isDead = true; return;
        }

        if (this.isTriggered) {
            this.timer -= delta;
            this.updateCountdownText(Math.ceil(this.timer));
            if (this.timer <= 0) {
                this.explodeMine(); sceneGroup.remove(this.mesh); this.isDead = true; return;
            }
        }

        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < CELL_SIZE * 4.0 && !this.isTriggered) {
                this.isTriggered = true; this.textSprite.visible = true;
            }
        }
    }
}

class Bouncer {
    constructor(x, z) {
        this.radius = CELL_SIZE * 0.48; this.colRadius = CELL_SIZE * 0.4; 
        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 16, 16), new THREE.MeshStandardMaterial({ color: 0xff3333, emissive: 0x880000 }));
        this.mesh.position.set(x, BLOCK_HEIGHT / 2, z); this.mesh.castShadow = true;
        sceneGroup.add(this.mesh);
        const speed = 7; const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed; this.vz = Math.sin(angle) * speed;
    }

    update(delta) {
        let bounced = false;
        
        let nextX = this.mesh.position.x + this.vx * delta;
        let checkGridX = Math.floor((nextX + Math.sign(this.vx) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellX = (grid[currentGridZ] && grid[currentGridZ][checkGridX] !== undefined) ? grid[currentGridZ][checkGridX] : 1;

        if (cellX === 1) {
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (cellX === 2) playerDied(t('reasonEnemyTrail'));
        this.mesh.position.x = nextX; 

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (cellZ === 1) {
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (cellZ === 2) playerDied(t('reasonEnemyTrail'));
        this.mesh.position.z = nextZ;

        if (bounced) soundManager.playSFX('bounce'); 

        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < this.radius + (CELL_SIZE * 0.5)) playerDied(t('reasonEnemyHit'));
        }
    }
}

class Eater {
    constructor(x, z) {
        this.radius = CELL_SIZE * 0.72; this.colRadius = CELL_SIZE * 0.4;
        this.mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(this.radius, 0), new THREE.MeshStandardMaterial({ color: 0x9b59b6, emissive: 0x4a235a }));
        this.mesh.position.set(x, BLOCK_HEIGHT / 2, z); this.mesh.castShadow = true;
        sceneGroup.add(this.mesh);
        const speed = 5; const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed; this.vz = Math.sin(angle) * speed;
    }

    eat(gridX, gridZ) {
        let ateSomething = false; const eatRadius = 2; 
        for (let dz = -eatRadius; dz <= eatRadius; dz++) {
            for (let dx = -eatRadius; dx <= eatRadius; dx++) {
                const x = gridX + dx; const z = gridZ + dz;
                if (x > 0 && x < GRID_SIZE - 1 && z > 0 && z < GRID_SIZE - 1) {
                    if (grid[z][x] === 1) {
                        grid[z][x] = 0; 
                        const index = getIndex(x, z);
                        dummy.scale.set(0, 0, 0); dummy.updateMatrix();
                        blocksMesh.setMatrixAt(index, dummy.matrix);
                        ateSomething = true;
                    }
                }
            }
        }
        if (ateSomething) { blocksMesh.instanceMatrix.needsUpdate = true; calculatePercentage(); }
    }

    update(delta) {
        let bounced = false;
        let nextX = this.mesh.position.x + this.vx * delta;
        let checkGridX = Math.floor((nextX + Math.sign(this.vx) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellX = (grid[currentGridZ] && grid[currentGridZ][checkGridX] !== undefined) ? grid[currentGridZ][checkGridX] : 1;

        if (cellX === 1) {
            this.eat(checkGridX, currentGridZ); 
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (cellX === 2) playerDied(t('reasonEaterTrail'));
        this.mesh.position.x = nextX;

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (cellZ === 1) {
            this.eat(currentGridX, checkGridZ); 
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (cellZ === 2) playerDied(t('reasonEaterTrail'));
        this.mesh.position.z = nextZ;
        
        this.mesh.rotation.x += 4 * delta; this.mesh.rotation.y += 4 * delta;
        if (bounced) soundManager.playSFX('bounce');

        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < this.radius + (CELL_SIZE * 0.5)) playerDied(t('reasonEaterHit'));
        }
    }
}

class Fireball {
    constructor(x, z, angle) {
        this.radius = CELL_SIZE * 0.3; this.colRadius = CELL_SIZE * 0.25; 
        this.mesh = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff8800 }));
        this.mesh.position.set(x, BLOCK_HEIGHT / 2, z); sceneGroup.add(this.mesh);
        const speed = 12; this.vx = Math.cos(angle) * speed; this.vz = Math.sin(angle) * speed;
        this.isDead = false;
    }
    
    eat(gridX, gridZ) {
        let ateSomething = false; const explosionRadius = 5; 
        for (let dz = -explosionRadius; dz <= explosionRadius; dz++) {
            for (let dx = -explosionRadius; dx <= explosionRadius; dx++) {
                if (dx * dx + dz * dz <= explosionRadius * explosionRadius) {
                    const x = gridX + dx; const z = gridZ + dz;
                    if (x > 0 && x < GRID_SIZE - 1 && z > 0 && z < GRID_SIZE - 1) {
                        if (grid[z][x] === 1) {
                            grid[z][x] = 0; 
                            const index = getIndex(x, z);
                            dummy.scale.set(0, 0, 0); dummy.updateMatrix();
                            blocksMesh.setMatrixAt(index, dummy.matrix);
                            ateSomething = true;
                        }
                    }
                }
            }
        }
        if (ateSomething) { blocksMesh.instanceMatrix.needsUpdate = true; calculatePercentage(); }
    }

    update(delta) {
        if (this.isDead) return;
        let nextX = this.mesh.position.x + this.vx * delta;
        let nextZ = this.mesh.position.z + this.vz * delta;

        let checkGridX = Math.floor((nextX + Math.sign(this.vx) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);

        let hit = false;
        
        if (checkGridX <= 0 || checkGridX >= GRID_SIZE -1 || checkGridZ <= 0 || checkGridZ >= GRID_SIZE -1) {
            hit = true; 
        } else if (grid[currentGridZ] && grid[currentGridZ][checkGridX] === 1) {
            this.eat(checkGridX, currentGridZ); hit = true;
        } else if (grid[checkGridZ] && grid[checkGridZ][currentGridX] === 1) {
            this.eat(currentGridX, checkGridZ); hit = true;
        } else if (grid[currentGridZ] && grid[currentGridZ][checkGridX] === 2 || grid[checkGridZ] && grid[checkGridZ][currentGridX] === 2) {
             playerDied(t('reasonFireballTrail')); hit = true;
        }

        if (hit) {
            createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 45, [particleMatOrange, particleMatBlack]);
            sceneGroup.remove(this.mesh); this.isDead = true; return;
        }
        this.mesh.position.x = nextX; this.mesh.position.z = nextZ;

        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < this.radius + (CELL_SIZE * 0.5)) {
                playerDied(t('reasonFireballHit'));
                sceneGroup.remove(this.mesh); this.isDead = true;
            }
        }
    }
}

class Bomber {
    constructor(x, z) {
        this.radius = CELL_SIZE * 1.0; this.colRadius = CELL_SIZE * 0.4;
        this.mesh = new THREE.Mesh(new THREE.OctahedronGeometry(this.radius, 0), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x111111 }));
        this.mesh.position.set(x, BLOCK_HEIGHT / 2, z); this.mesh.castShadow = true;
        sceneGroup.add(this.mesh);
        const speed = 2.5; const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed; this.vz = Math.sin(angle) * speed;
        this.fireTimer = 0;
    }

    update(delta) {
        let bounced = false;
        this.fireTimer += delta;
        if (this.fireTimer >= 5) {
            fireballs.push(new Fireball(this.mesh.position.x, this.mesh.position.z, Math.random() * Math.PI * 2));
            this.fireTimer = 0;
        }

        let nextX = this.mesh.position.x + this.vx * delta;
        let checkGridX = Math.floor((nextX + Math.sign(this.vx) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let currentGridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellX = (grid[currentGridZ] && grid[currentGridZ][checkGridX] !== undefined) ? grid[currentGridZ][checkGridX] : 1;

        if (cellX === 1) {
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (cellX === 2) playerDied(t('reasonBomberTrail'));
        this.mesh.position.x = nextX;

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (cellZ === 1) {
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (cellZ === 2) playerDied(t('reasonBomberTrail'));
        this.mesh.position.z = nextZ;
        
        this.mesh.rotation.x += 4 * delta; this.mesh.rotation.y += 4 * delta;
        if (bounced) soundManager.playSFX('bounce');

        if (gameState === 'PLAYING' && !isRespawning && !isWinAnimating) {
            const dx = player.position.x - this.mesh.position.x;
            const dz = player.position.z - this.mesh.position.z;
            if (Math.sqrt(dx*dx + dz*dz) < this.radius + (CELL_SIZE * 0.5)) playerDied(t('reasonBomberHit'));
        }
    }
}

const enemies = [];
const fireballs = []; 
const droneDebris = [];
let lastTrailDir = null;

function clearSceneEntities() {
    enemies.forEach(e => sceneGroup.remove(e.mesh));
    enemies.length = 0;
    fireballs.forEach(f => sceneGroup.remove(f.mesh));
    fireballs.length = 0;
    activeItems.forEach(i => sceneGroup.remove(i.mesh));
    activeItems.length = 0;
    particles.forEach(p => scene.remove(p.mesh));
    particles.length = 0;
    droneDebris.forEach(d => scene.remove(d.mesh));
    droneDebris.length = 0;
}

function startLevel(levelId) {
    currentLevelId = levelId;
    currentLevelConfig = LEVELS_CONFIG.find(c => c.id === levelId) || LEVELS_CONFIG[0];
    
    lives = 3;
    timeRemaining = currentLevelConfig.time;
    targetPercentage = currentLevelConfig.target;
    maxActiveMines = currentLevelConfig.maxMines;
    filledPercentage = 0;
    isGameOver = false;
    isWinAnimating = false;
    isRespawning = false;
    isPaused = false;
    itemSpawnTimer = 0;
    
    lastGridX = -1;
    lastGridZ = -1;
    velocityX = 0;
    velocityZ = 0;
    lastTrailDir = null;
    
    resetGrid();
    clearSceneEntities();

    for(let i=0; i < currentLevelConfig.bouncers; i++) {
        enemies.push(new Bouncer((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }
    for(let i=0; i < currentLevelConfig.eaters; i++) {
        enemies.push(new Eater((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }
    for(let i=0; i < currentLevelConfig.bombers; i++) {
        enemies.push(new Bomber((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }

    player.position.set(0, 0, (ARENA_SIZE / 2) - (CELL_SIZE / 2));
    player.rotation.set(0, 0, 0);
    player.visible = true;

    sceneGroup.visible = true;
    menuUI.style.display = 'none';
    levelSelectUI.style.display = 'none';
    resultOverlay.style.display = 'none';
    gameUI.style.display = 'block';
    controlsUI.style.display = 'flex';
    
    updateAllTexts();
    soundManager.engine.play().catch(()=>{}); 
    gameState = 'PLAYING';
}


// --- 7. LOGIKA HRY, SMRT A FLOOD FILL ---
function calculatePercentage() {
    if (isWinAnimating || isGameOver || gameState !== 'PLAYING') return; 

    let filledCount = 0;
    for (let z = 1; z < GRID_SIZE - 1; z++) {
        for (let x = 1; x < GRID_SIZE - 1; x++) {
            if (grid[z][x] === 1) filledCount++;
        }
    }
    
    filledPercentage = Math.round((filledCount / TOTAL_FILLABLE_CELLS) * 100);
    updateHUD();

    if (filledPercentage >= targetPercentage && !isGameOver && !isWinAnimating) {
        triggerWin();
    }
}

function triggerWin() {
    isWinAnimating = true;
    soundManager.engine.pause();
    velocityX = 0; velocityZ = 0;
    lastGridX = -1; lastGridZ = -1;
    createFireworks(player.position.x, player.position.y, player.position.z);
    setTimeout(() => { isWinAnimating = false; showResult(true); }, 2000);
}

function playerDied(reasonText, forceGameOver = false) {
    if (isGameOver || isRespawning || isWinAnimating || gameState !== 'PLAYING') return; 

    if (forceGameOver) lives = 0; else lives--;

    soundManager.playSFX('explosion');
    soundManager.engine.pause();

    let momX = velocityX;
    let momZ = velocityZ;

    createExplosion(player.position.x, player.position.y, player.position.z);
    
    // --- ANIMACE ROZPADU DRONA (s hybností) ---
    if (droneModel) {
        const explodePart = (part, isBody = false) => {
            if (!part) return;
            const clone = part.clone();
            
            if (isBody) {
                const r1 = clone.getObjectByName('Rotor_one');
                const r2 = clone.getObjectByName('Rotor_two');
                if (r1) r1.removeFromParent();
                if (r2) r2.removeFromParent();
            }
            
            const worldPos = new THREE.Vector3();
            part.getWorldPosition(worldPos);
            clone.position.copy(worldPos);
            
            const worldScale = new THREE.Vector3();
            part.getWorldScale(worldScale);
            clone.scale.copy(worldScale);
            
            const worldQuat = new THREE.Quaternion();
            part.getWorldQuaternion(worldQuat);
            clone.quaternion.copy(worldQuat);
            
            const spread = 8;
            
            scene.add(clone);
            droneDebris.push({ 
                mesh: clone, 
                vx: (momX * 0.6) + (Math.random() - 0.5) * spread, 
                vy: Math.random() * 15 + 10, 
                vz: (momZ * 0.6) + (Math.random() - 0.5) * spread, 
                rx: (Math.random() - 0.5) * 15, 
                ry: (Math.random() - 0.5) * 15, 
                rz: (Math.random() - 0.5) * 15, 
                life: 2.0 
            });
        };
        
        explodePart(rotor1);
        explodePart(rotor2);
        explodePart(droneModel, true);
    }

    cameraShakeTime = 0.5; 

    for (let point of currentTrail) {
        const index = getIndex(point.x, point.z);
        const animIdx = animatingBlocks.findIndex(a => a.index === index);
        if (animIdx !== -1) animatingBlocks.splice(animIdx, 1);
        dummy.scale.set(0,0,0); dummy.updateMatrix();
        blocksMesh.setMatrixAt(index, dummy.matrix);
        grid[point.z][point.x] = 0;
    }
    blocksMesh.instanceMatrix.needsUpdate = true;
    currentTrail = []; updateHUD();

    isRespawning = true; player.visible = false;
    currentMaxSpeed = BASE_MAX_SPEED; velocityX = 0; velocityZ = 0;
    lastGridX = -1; lastGridZ = -1;
    lastTrailDir = null;

    setTimeout(() => {
        if (lives <= 0) {
            showResult(false, forceGameOver ? reasonText : reasonText + t('livesOut'));
        } else {
            player.position.set(0, 0, (ARENA_SIZE / 2) - (CELL_SIZE / 2));
            lastGridX = -1;
            lastGridZ = -1;
            velocityX = 0;
            velocityZ = 0;
            player.visible = true; isRespawning = false;
            soundManager.engine.play().catch(()=>{}); 
        }
    }, 1000);
}

function getCellsBetween(x0, z0, x1, z1) {
    const cells = [];
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    let dz = Math.abs(z1 - z0), sz = z0 < z1 ? 1 : -1;
    let err = dx - dz;
    while (true) {
        cells.push({ x: x0, z: z0 });
        if (x0 === x1 && z0 === z1) break;
        let e2 = 2 * err;
        if (e2 > -dz) { err -= dz; x0 += sx; }
        if (e2 < dx) { err += dx; z0 += sz; }
    }
    return cells;
}

function fillEnclosedAreas(finishedTrail) {
    const visited = new Set(); const regions = [];
    const trailSet = new Set(finishedTrail.map(p => `${p.x},${p.z}`));

    for (let z = 0; z < GRID_SIZE; z++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            if (grid[z][x] === 0 && !visited.has(`${x},${z}`)) {
                const currentRegion = []; const queue = [{x, z}];
                visited.add(`${x},${z}`);
                let touchesTrail = false; 

                while (queue.length > 0) {
                    const curr = queue.shift(); currentRegion.push(curr);
                    for (let dx = -1; dx <= 1; dx++) {
                        for (let dz = -1; dz <= 1; dz++) {
                            if (trailSet.has(`${curr.x + dx},${curr.z + dz}`)) touchesTrail = true;
                        }
                    }
                    const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
                    for (let d of dirs) {
                        const nx = curr.x + d[0]; const nz = curr.z + d[1];
                        if (nx >= 0 && nx < GRID_SIZE && nz >= 0 && nz < GRID_SIZE) {
                            if (grid[nz][nx] === 0 && !visited.has(`${nx},${nz}`)) {
                                visited.add(`${nx},${nz}`); queue.push({x: nx, z: nz});
                            }
                        }
                    }
                }
                regions.push({ points: currentRegion, touchesTrail: touchesTrail });
            }
        }
    }

    const enemyPositions = enemies.map(e => ({
        x: Math.floor((e.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE),
        z: Math.floor((e.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE)
    }));

    for (let regionObj of regions) {
        if (!regionObj.touchesTrail) continue;
        let hasEnemy = false; const regionSet = new Set(regionObj.points.map(p => `${p.x},${p.z}`));
        for (let ep of enemyPositions) {
            if (regionSet.has(`${ep.x},${ep.z}`)) { hasEnemy = true; break; }
        }
        if (!hasEnemy) {
            for (let point of regionObj.points) createBlock(point.x, point.z, colorWall, 1, true);
        }
    }
    calculatePercentage();
}

// --- 8. HERNÍ SMYČKA ---
const clock = new THREE.Clock();
const cameraOffset = new THREE.Vector3(0, 8, 10); 
const cameraLookAtTarget = new THREE.Vector3(0, 0, 0); 
let lastGridX = -1; let lastGridZ = -1;

updateAllTexts(); 

function animate() {
    requestAnimationFrame(animate);

    if (document.hidden) {
        clock.getDelta(); 
        return; 
    }

    const delta = Math.min(clock.getDelta(), 0.1); 
    const elapsed = clock.getElapsedTime(); 
    
    backgroundParticles.rotation.y += 0.02 * delta;
    
    // --- STAV MENU / VÝBĚR LEVELU ---
    if (gameState === 'MENU' || gameState === 'LEVEL_SELECT') {
        if (droneModel) {
            const tMenu = elapsed * 0.5;
            droneModel.position.set(
                Math.sin(tMenu * 0.8) * 8,       
                4 + Math.sin(tMenu * 1.1) * 2,   
                -12 + Math.cos(tMenu * 0.9) * 4  
            );
            droneModel.rotation.set(
                Math.sin(tMenu * 1.5) * 0.2,     
                -0.5 + Math.sin(tMenu) * 0.3,    
                Math.cos(tMenu * 1.2) * 0.2      
            );
        }
        if (rotor1) rotor1.rotation.y += 15 * delta;
        if (rotor2) rotor2.rotation.y -= 15 * delta;

        camera.position.lerp(new THREE.Vector3(0, 4, 15), 0.05);
        cameraLookAtTarget.lerp(new THREE.Vector3(0, 4, 0), 0.08);
        camera.lookAt(cameraLookAtTarget);
        renderer.render(scene, camera);
        return;
    }

    // --- STAV HRY ---
    if (isPaused || isGameOver) {
        renderer.render(scene, camera);
        return;
    }
    
    if (!isWinAnimating && !isRespawning) {
        timeRemaining -= delta;
        if (timeRemaining <= 0) {
            timeRemaining = 0; updateHUD();
            playerDied(t('reasonTime'), true); 
        } else updateHUD();
    }

    if (!isWinAnimating && !isRespawning) {
        if (activeItems.length < maxActiveMines) {
            itemSpawnTimer += delta;
            if (itemSpawnTimer > 4 + Math.random() * 2) { 
                itemSpawnTimer = 0;
                const validSpots = []; const margin = 4; const minDistance = 15; const safeRadius = 2; 

                for (let z = margin; z < GRID_SIZE - margin; z++) {
                    for (let x = margin; x < GRID_SIZE - margin; x++) {
                        if (grid[z][x] === 1) {
                            let isSurrounded = true;
                            for (let dz = -safeRadius; dz <= safeRadius; dz++) {
                                for (let dx = -safeRadius; dx <= safeRadius; dx++) {
                                    if (grid[z + dz] && grid[z + dz][x + dx] !== 1) { isSurrounded = false; break; }
                                }
                                if (!isSurrounded) break;
                            }
                            if (!isSurrounded) continue;
                            let isFarEnough = true;
                            for (let activeMine of activeItems) {
                                const mineGridX = Math.floor((activeMine.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
                                const mineGridZ = Math.floor((activeMine.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
                                const dx = x - mineGridX; const dz = z - mineGridZ;
                                if (Math.sqrt(dx*dx + dz*dz) < minDistance) { isFarEnough = false; break; }
                            }
                            if (isFarEnough) validSpots.push({ x, z });
                        }
                    }
                }
                
                if (validSpots.length > 0) {
                    const spot = validSpots[Math.floor(Math.random() * validSpots.length)];
                    const worldX = spot.x * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
                    const worldZ = spot.z * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
                    activeItems.push(new Item(worldX, worldZ));
                }
            }
        }

        for (let i = activeItems.length - 1; i >= 0; i--) {
            activeItems[i].update(delta);
            if (activeItems[i].isDead) activeItems.splice(i, 1);
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]; p.life -= delta;
        if (p.life <= 0) { scene.remove(p.mesh); particles.splice(i, 1); } 
        else {
            p.mesh.position.x += p.vx * delta; p.mesh.position.y += p.vy * delta; p.mesh.position.z += p.vz * delta;
            p.vy -= 25 * delta; 
            p.mesh.rotation.x += 10 * delta; p.mesh.rotation.y += 10 * delta;
            p.mesh.scale.setScalar(p.life); 
        }
    }
    
    for (let i = droneDebris.length - 1; i >= 0; i--) {
        const d = droneDebris[i]; d.life -= delta;
        if (d.life <= 0) { scene.remove(d.mesh); droneDebris.splice(i, 1); }
        else {
            d.mesh.position.x += d.vx * delta; d.mesh.position.y += d.vy * delta; d.mesh.position.z += d.vz * delta;
            d.vy -= 30 * delta; 
            d.mesh.rotation.x += d.rx * delta; d.mesh.rotation.y += d.ry * delta; d.mesh.rotation.z += d.rz * delta;
        }
    }
    
    if (rotor1) rotor1.rotation.y += 15 * delta;
    if (rotor2) rotor2.rotation.y -= 15 * delta;
    
    if (isWinAnimating) {
        player.position.y += 15 * delta; player.rotation.y += 8 * delta;  
        fireworkTimer -= delta;
        if (fireworkTimer <= 0) {
            createFireworks(player.position.x + (Math.random() - 0.5) * 15, player.position.y + (Math.random() - 0.5) * 5, player.position.z + (Math.random() - 0.5) * 15);
            fireworkTimer = 0.2; 
        }
    }
    
    if (droneModel && !isWinAnimating) {
        droneModel.position.x = 0;
        droneModel.position.z = 0;
        const hoverHeight = 0.2; const hoverSpeed = 2;    
        droneModel.position.y = BLOCK_HEIGHT + 0.5 + Math.sin(elapsed * hoverSpeed) * hoverHeight;
        droneModel.rotation.set(0, 0, Math.sin(elapsed * hoverSpeed * 0.5) * 0.05);
    }

    if (!isRespawning && !isWinAnimating) {
        let targetVelX = 0; let targetVelZ = 0;
        
        // Zamezení proti nechtěné otočce o 180° při kreslení trailu
        let blockW = false, blockS = false, blockA = false, blockD = false;
        if (currentTrail.length > 0) {
            if (lastTrailDir === 'z') blockW = true;
            if (lastTrailDir === '-z') blockS = true;
            if (lastTrailDir === 'x') blockA = true;
            if (lastTrailDir === '-x') blockD = true;
        } else {
            lastTrailDir = null;
        }

        if (keys.w && !blockW) targetVelZ = -currentMaxSpeed;
        else if (keys.s && !blockS) targetVelZ = currentMaxSpeed;
        else if (keys.a && !blockA) targetVelX = -currentMaxSpeed;
        else if (keys.d && !blockD) targetVelX = currentMaxSpeed;

        velocityX = THREE.MathUtils.lerp(velocityX, targetVelX, accelerationRate * delta);
        velocityZ = THREE.MathUtils.lerp(velocityZ, targetVelZ, accelerationRate * delta);

        player.position.x += velocityX * delta; player.position.z += velocityZ * delta;

        const limit = (ARENA_SIZE / 2) - (CELL_SIZE / 2);
        if (player.position.x > limit) player.position.x = limit;
        if (player.position.x < -limit) player.position.x = -limit;
        if (player.position.z > limit) player.position.z = limit;
        if (player.position.z < -limit) player.position.z = -limit;

        const currentGridX = Math.floor((player.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const currentGridZ = Math.floor((player.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);

        if ((currentGridX !== lastGridX || currentGridZ !== lastGridZ) && lastGridX !== -1) {
            const pathCells = getCellsBetween(lastGridX, lastGridZ, currentGridX, currentGridZ);
            
            for (let cell of pathCells) {
                if (cell.x === lastGridX && cell.z === lastGridZ) continue;
                const cellType = grid[cell.z][cell.x];

                if (cellType === 0) {
                    let prevX = currentTrail.length > 0 ? currentTrail[currentTrail.length - 1].x : lastGridX;
                    let prevZ = currentTrail.length > 0 ? currentTrail[currentTrail.length - 1].z : lastGridZ;
                    let dx = cell.x - prevX;
                    let dz = cell.z - prevZ;
                    
                    if (dx > 0) lastTrailDir = 'x';
                    else if (dx < 0) lastTrailDir = '-x';
                    else if (dz > 0) lastTrailDir = 'z';
                    else if (dz < 0) lastTrailDir = '-z';

                    createBlock(cell.x, cell.z, colorTrail, 2, true);
                    currentTrail.push({ x: cell.x, z: cell.z });
                    soundManager.playSFX('trail');
                }
                else if (cellType === 1 && currentTrail.length > 0) {
                    const finishedTrail = [...currentTrail];
                    for (let point of currentTrail) createBlock(point.x, point.z, colorWall, 1, false);
                    currentTrail = []; fillEnclosedAreas(finishedTrail);
                }
                else if (cellType === 2 && currentTrail.length > 0) {
                    playerDied(t('reasonCross'));
                }
            }
        }
        lastGridX = currentGridX; lastGridZ = currentGridZ;
    }

    for (let enemy of enemies) enemy.update(delta);
    
    for (let i = fireballs.length - 1; i >= 0; i--) {
        fireballs[i].update(delta);
        if (fireballs[i].isDead) fireballs.splice(i, 1);
    }

    let needsMatrixUpdate = false;
    for (let i = animatingBlocks.length - 1; i >= 0; i--) {
        const anim = animatingBlocks[i]; anim.currentY += 8 * delta; 
        if (anim.currentY >= anim.targetY) { anim.currentY = anim.targetY; animatingBlocks.splice(i, 1); }
        dummy.position.set(anim.x, anim.currentY, anim.z); dummy.scale.set(1, 1, 1);
        dummy.updateMatrix(); blocksMesh.setMatrixAt(anim.index, dummy.matrix);
        needsMatrixUpdate = true;
    }
    if (needsMatrixUpdate) blocksMesh.instanceMatrix.needsUpdate = true;

    const trackingFactor = 0.9; 
    const targetX = player.position.x * trackingFactor;
    const targetZ = (player.position.z * trackingFactor) + 12;
    const targetY = 10; 
    
    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
    cameraLookAtTarget.lerp(player.position, 0.08);
    camera.lookAt(cameraLookAtTarget);

    if (cameraShakeTime > 0) {
        cameraShakeTime -= delta;
        const shakeIntensity = Math.max(cameraShakeTime, 0) * 1.5; 
        camera.position.x += (Math.random() - 0.5) * shakeIntensity;
        camera.position.y += (Math.random() - 0.5) * shakeIntensity;
        camera.position.z += (Math.random() - 0.5) * shakeIntensity;
    }

    renderer.render(scene, camera);
}

animate();