import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createAudioEngine } from './audio.js';
import { createCrtPipeline, createUiWarp } from './crt.js';
import './style.css';

// --- NAČTENÍ EXTERNÍHO FONTU PRO MENU ---
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// --- PALETA UI (drží se stejných barev jako scéna) ---
const UI = {
    font: "'VT323', monospace",
    // ASCII logo potřebuje font s blokovými znaky, ty VT323 nemá
    artFont: "ui-monospace, Menlo, 'DejaVu Sans Mono', monospace",
    cyan: '#00d9ff',
    amber: '#ffa023',
    danger: '#ff3b5c',
    success: '#00ff9c',
    text: '#d8f6ff',
    dim: '#5c7a91',
    overlay: 'rgba(4, 4, 15, 0.92)',
    panelEdge: '#1e3350',
    glow: (color) => `0 0 6px ${color}, 0 0 18px ${color}`
};

// --- PIXELOVÉ IKONY (náhrada za emoji, která do stylu hry nezapadala) ---
const ICON_PIXELS = {
    heart: ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'],
    area:  ['XXXXXXX', 'X.....X', 'X.....X', 'XXXX..X', 'XXXX..X', 'XXXX..X', 'XXXXXXX'],
    timer: ['XXXXXXX', '.X...X.', '..X.X..', '...X...', '..X.X..', '.X...X.', 'XXXXXXX'],
    lock:  ['.XXXXX.', '.X...X.', '.X...X.', 'XXXXXXX', 'XXX.XXX', 'XXX.XXX', 'XXXXXXX'],
    star:  ['...X...', '..XXX..', 'XXXXXXX', '.XXXXX.', '..XXX..', '.XX.XX.', 'X.....X']
};

// Sousední pixely v řádku se slučují do jednoho obdélníku, ať je SVG krátké.
function pixelIcon(name, color = 'currentColor', pixelSize = 3) {
    const rows = ICON_PIXELS[name];
    const width = rows[0].length;
    let rects = '';

    rows.forEach((row, y) => {
        let x = 0;
        while (x < width) {
            if (row[x] !== 'X') { x++; continue; }
            let run = 1;
            while (row[x + run] === 'X') run++;
            rects += `<rect x="${x}" y="${y}" width="${run}" height="1"/>`;
            x += run;
        }
    });

    return `<svg width="${width * pixelSize}" height="${rows.length * pixelSize}" viewBox="0 0 ${width} ${rows.length}" fill="${color}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

// Arkádová odezva tlačítek: při najetí se barvy prohodí
function applyHoverFill(el, color, withSound = true) {
    el.onmouseover = () => {
        el.style.backgroundColor = color;
        el.style.color = '#04040f';
        el.style.boxShadow = UI.glow(color);
        if (withSound) soundManager.playSFX('hover');
    };
    el.onmouseout = () => {
        el.style.backgroundColor = 'transparent';
        el.style.color = color;
        el.style.boxShadow = 'none';
    };
}

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
        help: "Nápověda",
        helpTitle: "Nepřátelé",
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
        crtOn: "CRT efekt: Zapnutý",
        crtOff: "CRT efekt: Vypnutý",
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
        help: "Help",
        helpTitle: "Enemies",
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
        crtOn: "CRT effect: On",
        crtOff: "CRT effect: Off",
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

// --- AUDIO ---
const soundManager = createAudioEngine(settingsConfig);

// --- 1. ZÁKLADNÍ NASTAVENÍ SCÉNY ---
const scene = new THREE.Scene();

const bgColor = 0x0d0d22; 
scene.background = new THREE.Color(bgColor); 
scene.fog = new THREE.Fog(bgColor, 18, 70);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true; 
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const CRT_CURVATURE = 0.32;

const crt = createCrtPipeline(renderer, {
    enabled: settingsConfig.crt !== false,
    pixelScale: settingsConfig.pixelScale || 2,
    curvature: CRT_CURVATURE
});

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
    color: 0x00d9ff,
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

const uiWarp = createUiWarp(CRT_CURVATURE);

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
uiWarp.register(menuContent);

// Logo ve stylu scénových intro — ANSI art s přelivem přes písmena
const CUTRON_LOGO = [
    ' ██████╗██╗   ██╗████████╗██████╗  ██████╗ ███╗   ██╗',
    '██╔════╝██║   ██║╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║',
    '██║     ██║   ██║   ██║   ██████╔╝██║   ██║██╔██╗ ██║',
    '██║     ██║   ██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║',
    '╚██████╗╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║ ╚████║',
    ' ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝'
].join('\n');

const titleEl = document.createElement('pre');
titleEl.className = 'logo-sweep';
titleEl.textContent = CUTRON_LOGO;
Object.assign(titleEl.style, {
    fontFamily: UI.artFont,
    fontSize: 'clamp(5px, 2.4vw, 20px)',
    lineHeight: '1.02',
    whiteSpace: 'pre',
    margin: '0 0 44px'
});
menuContent.appendChild(titleEl);

function createMenuButton(textKey, onClick) {
    const btn = document.createElement('button');
    btn.dataset.textKey = textKey;
    btn.innerText = t(textKey);
    Object.assign(btn.style, {
        fontFamily: UI.font,
        padding: '12px 18px', fontSize: '26px', lineHeight: '1.3', cursor: 'pointer',
        backgroundColor: 'transparent', color: UI.cyan, border: `2px solid ${UI.cyan}`,
        borderRadius: '0', marginBottom: '16px', width: '340px',
        letterSpacing: '1px', textTransform: 'uppercase', transition: 'none'
    });
    applyHoverFill(btn, UI.cyan);
    btn.onclick = (e) => {
        soundManager.unlock();
        soundManager.playSFX('click');
        soundManager.startMenuMusic();
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
const btnHelp = createMenuButton('help', () => openHelp());

menuContent.appendChild(btnContinue);
menuContent.appendChild(btnNewGame);
menuContent.appendChild(btnLanguage);
menuContent.appendChild(btnHelp);
menuContent.appendChild(btnSettings);

// VÝBĚR LEVELU UI
const levelSelectUI = document.createElement('div');
Object.assign(levelSelectUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'none', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    backgroundColor: UI.overlay
});
uiContainer.appendChild(levelSelectUI);

const levelSelectTitle = document.createElement('div');
Object.assign(levelSelectTitle.style, {
    fontFamily: UI.font, fontSize: 'clamp(30px, 5vw, 56px)', color: UI.text,
    marginTop: '10vh', marginBottom: '40px', letterSpacing: '2px', textShadow: UI.glow(UI.cyan)
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

// --- OBSAH NÁPOVĚDY (chování odpovídá třídám Bouncer/Eater/Bomber/Fireball/Item) ---
const HELP_ENTRIES = [
    {
        shape: 'sphere', color: '#ff3355',
        cz: { name: 'Bouncer', desc: 'Nejrychlejší z nepřátel. Odráží se od zabrané plochy i od stěn arény. Zabije tě při dotyku — a stejně tak, když sám narazí do tvé rozdělané brázdy. Zabrané území nepoškozuje.' },
        en: { name: 'Bouncer', desc: 'The fastest enemy. Bounces off captured ground and arena walls. It kills you on contact — and also when it runs into your unfinished trail. It does not damage captured territory.' }
    },
    {
        shape: 'poly', color: '#c44dff',
        cz: { name: 'Eater', desc: 'Pomalejší než Bouncer, zato při každém nárazu do zabrané plochy z ní ukousne čtverec 5×5 polí. Postupně ti tak ubírá už získané území.' },
        en: { name: 'Eater', desc: 'Slower than the Bouncer, but every time it hits captured ground it bites out a 5×5 square. It steadily eats away the territory you already won.' }
    },
    {
        shape: 'diamond', color: '#1a1a24', stroke: '#ff6a00',
        cz: { name: 'Bomber', desc: 'Nejpomalejší nepřítel. Každých 5 sekund vystřelí ohnivou kouli náhodným směrem. Sám území nepoškozuje — to za něj obstarají jeho střely.' },
        en: { name: 'Bomber', desc: 'The slowest enemy. Every 5 seconds it fires a fireball in a random direction. It does no damage itself — its projectiles do the work.' }
    },
    {
        shape: 'sphere', color: '#ffb020',
        cz: { name: 'Ohnivá koule', desc: 'Letí rovně a velmi rychle. Při nárazu do zabrané plochy vybuchne a vypálí v ní kruh o poloměru 5 polí. Když zasáhne tebe nebo tvou brázdu, přijdeš o život.' },
        en: { name: 'Fireball', desc: 'Flies straight and very fast. On hitting captured ground it explodes and burns out a circle with a radius of 5 cells. If it hits you or your trail, you lose a life.' }
    },
    {
        shape: 'mine', color: '#ff3b5c',
        cz: { name: 'Mina', desc: 'Objeví se uvnitř zabraného území. Jakmile se přiblížíš na 4 pole, spustí se odpočet 5 sekund — pak vybuchne, zničí kruh o poloměru 7 polí a v jeho dosahu zabije i tebe.' },
        en: { name: 'Mine', desc: 'Appears inside captured territory. Come within 4 cells and a 5 second countdown starts — then it explodes, destroying a circle with a radius of 7 cells and killing you if you are inside it.' }
    }
];

function enemyShapeSvg(entry) {
    const stroke = entry.stroke ? ` stroke="${entry.stroke}" stroke-width="3"` : '';
    let body;
    if (entry.shape === 'sphere') {
        body = `<circle cx="22" cy="22" r="15" fill="${entry.color}"${stroke}/>`;
    } else if (entry.shape === 'poly') {
        body = `<polygon points="22,6 36,14 36,30 22,38 8,30 8,14" fill="${entry.color}"${stroke}/>`;
    } else if (entry.shape === 'diamond') {
        body = `<polygon points="22,5 39,22 22,39 5,22" fill="${entry.color}"${stroke}/>`;
    } else {
        body = `<circle cx="22" cy="26" r="12" fill="#1a1a24" stroke="${entry.color}" stroke-width="3"/><rect x="20" y="6" width="4" height="9" fill="${entry.color}"/>`;
    }
    return `<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

// NÁPOVĚDA UI
const helpUI = document.createElement('div');
Object.assign(helpUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'none', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    backgroundColor: UI.overlay, overflowY: 'auto', padding: '0 20px 40px'
});
uiContainer.appendChild(helpUI);

const helpTitle = document.createElement('div');
Object.assign(helpTitle.style, {
    fontFamily: UI.font, fontSize: 'clamp(30px, 5vw, 56px)', color: UI.text,
    marginTop: '8vh', marginBottom: '32px', letterSpacing: '2px', textShadow: UI.glow(UI.cyan)
});
helpTitle.dataset.textKey = 'helpTitle';
helpUI.appendChild(helpTitle);

const helpList = document.createElement('div');
Object.assign(helpList.style, {
    display: 'flex', flexDirection: 'column', gap: '18px', width: '100%', maxWidth: '680px'
});
helpUI.appendChild(helpList);

function openHelp() {
    setTimeout(() => uiWarp.refresh(), 0);
    menuUI.style.display = 'none';
    helpUI.style.display = 'flex';
    helpList.innerHTML = '';

    for (const entry of HELP_ENTRIES) {
        const row = document.createElement('div');
        Object.assign(row.style, {
            display: 'flex', gap: '18px', alignItems: 'flex-start',
            border: `2px solid ${UI.panelEdge}`, padding: '16px 18px'
        });

        const icon = document.createElement('div');
        icon.style.flex = '0 0 auto';
        icon.innerHTML = enemyShapeSvg(entry);

        const text = document.createElement('div');
        const name = document.createElement('div');
        Object.assign(name.style, {
            fontFamily: UI.font, fontSize: '24px', color: entry.stroke || entry.color,
            marginBottom: '6px', letterSpacing: '1px'
        });
        name.textContent = entry[lang].name;

        const desc = document.createElement('div');
        Object.assign(desc.style, {
            fontFamily: UI.font, fontSize: '19px', color: UI.text, lineHeight: '1.45'
        });
        desc.textContent = entry[lang].desc;

        text.append(name, desc);
        row.append(icon, text);
        helpList.appendChild(row);
    }
}

const btnBackHelp = createMenuButton('back', () => {
    helpUI.style.display = 'none';
    menuUI.style.display = 'flex';
});
btnBackHelp.style.margin = '36px 0 0';
helpUI.appendChild(btnBackHelp);

// NASTAVENÍ UI
const settingsUI = document.createElement('div');
Object.assign(settingsUI.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    display: 'none', flexDirection: 'column', alignItems: 'center', pointerEvents: 'auto',
    backgroundColor: UI.overlay
});
uiContainer.appendChild(settingsUI);

const settingsTitle = document.createElement('div');
Object.assign(settingsTitle.style, {
    fontFamily: UI.font, fontSize: 'clamp(30px, 5vw, 56px)', color: UI.text,
    marginTop: '10vh', marginBottom: '40px', letterSpacing: '2px', textShadow: UI.glow(UI.cyan)
});
settingsTitle.dataset.textKey = 'settings';
settingsUI.appendChild(settingsTitle);

function createSlider(labelKey, initialValue, onChangeCallback) {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '30px';
    wrapper.style.textAlign = 'center';

    const label = document.createElement('div');
    label.dataset.textKey = labelKey;
    label.style.color = UI.text;
    label.style.fontFamily = UI.font;
    label.style.fontSize = '24px';
    label.style.letterSpacing = '1px';
    label.style.marginBottom = '18px';
    
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

const btnCrt = createMenuButton('crtOn', () => {
    const enabled = !crt.isEnabled();
    crt.setEnabled(enabled);
    uiWarp.setEnabled(enabled);
    settingsConfig.crt = enabled;
    saveSettings();
    btnCrt.dataset.textKey = enabled ? 'crtOn' : 'crtOff';
    btnCrt.innerText = t(btnCrt.dataset.textKey);
});
btnCrt.dataset.textKey = settingsConfig.crt === false ? 'crtOff' : 'crtOn';
btnCrt.style.marginTop = '30px';
settingsUI.appendChild(btnCrt);

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
    position: 'absolute', top: '4.5%', left: '4.5%', display: 'flex', gap: '22px',
    fontFamily: UI.font, fontSize: '26px', color: UI.text, letterSpacing: '1px',
    textShadow: '2px 2px 0 rgba(0,0,0,0.9)'
});
gameUI.appendChild(hudContainer);
uiWarp.register(hudContainer);

function createHudItem(iconName, iconColor) {
    const wrap = document.createElement('div');
    Object.assign(wrap.style, { display: 'flex', alignItems: 'center', gap: '9px' });

    const icon = document.createElement('span');
    icon.style.display = 'flex';
    icon.innerHTML = pixelIcon(iconName, iconColor, 3);

    const value = document.createElement('span');
    wrap.append(icon, value);
    return { wrap, value };
}

const livesHud = createHudItem('heart', UI.danger);
const percentHud = createHudItem('area', UI.cyan);
const timeHud = createHudItem('timer', UI.amber);
hudContainer.append(livesHud.wrap, percentHud.wrap, timeHud.wrap);

// --- HORNÍ TLAČÍTKA (Pauza a Ukončit) ---
const topButtons = document.createElement('div');
Object.assign(topButtons.style, {
    position: 'absolute', top: '4.5%', right: '4.5%', display: 'flex', gap: '15px', zIndex: '100'
});
gameUI.appendChild(topButtons);
uiWarp.register(topButtons);

const pauseBtn = document.createElement('button');
pauseBtn.dataset.textKey = 'pause';
Object.assign(pauseBtn.style, {
    padding: '10px 20px', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'transparent',
    fontFamily: UI.font, fontSize: '20px', border: `2px solid ${UI.cyan}`, color: UI.cyan, borderRadius: '0'
});
applyHoverFill(pauseBtn, UI.cyan);
topButtons.appendChild(pauseBtn);

const quitBtn = document.createElement('button');
quitBtn.dataset.textKey = 'quit';
Object.assign(quitBtn.style, {
    padding: '10px 20px', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'transparent',
    fontFamily: UI.font, fontSize: '20px', border: `2px solid ${UI.danger}`, color: UI.danger, borderRadius: '0'
});
applyHoverFill(quitBtn, UI.danger);
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
    backgroundColor: UI.overlay, display: 'none', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column', color: UI.cyan, fontSize: 'clamp(26px, 4vw, 42px)',
    fontWeight: 'bold', pointerEvents: 'auto', textAlign: 'center'
});
gameUI.appendChild(pauseOverlay);

const resultOverlay = document.createElement('div');
Object.assign(resultOverlay.style, {
    position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: UI.overlay, display: 'none', justifyContent: 'center',
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
uiWarp.register(controlsUI);

function createKeyElement(keyText) {
    const el = document.createElement('div');
    el.innerText = keyText;
    Object.assign(el.style, {
        padding: '8px 12px', fontSize: '16px', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.1)',
        fontFamily: UI.font, fontSize: '22px', border: `2px solid ${UI.cyan}`, color: UI.cyan, borderRadius: '0'
    });
    return el;
}
function createTextElement(key) {
    const el = document.createElement('div');
    el.dataset.textKey = key;
    Object.assign(el.style, { fontFamily: UI.font, fontSize: '22px', color: UI.dim, letterSpacing: '1px' });
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
    setTimeout(() => uiWarp.refresh(), 0);
    menuUI.style.display = 'none';
    levelSelectUI.style.display = 'flex';
    levelGrid.innerHTML = '';
    
    LEVELS_CONFIG.forEach(config => {
        const isUnlocked = config.id <= progress.unlocked;
        const box = document.createElement('div');
        
        Object.assign(box.style, {
            width: '120px', height: '120px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', borderRadius: '0',
            border: isUnlocked ? `2px solid ${UI.cyan}` : '2px solid #2b3a4a',
            backgroundColor: 'transparent',
            cursor: isUnlocked ? 'pointer' : 'not-allowed',
            color: isUnlocked ? UI.cyan : UI.dim
        });

        box.innerHTML = `<div style="font-family: ${UI.font}; font-size: 42px;">${config.id}</div>`;
        
        if (progress.scores[config.id]) {
            box.innerHTML += `<div style="font-family: ${UI.font}; font-size: 18px; margin-top: 8px; color: inherit; display: flex; align-items: center; gap: 6px;">${pixelIcon('star')} ${progress.scores[config.id]}</div>`;
        } else if (!isUnlocked) {
            box.innerHTML += `<div style="margin-top: 8px; display: flex; color: inherit;">${pixelIcon('lock')}</div>`;
        }

        if (isUnlocked) {
            applyHoverFill(box, UI.cyan);
            box.onclick = () => { soundManager.playSFX('click'); startLevel(config.id); };
        }
        levelGrid.appendChild(box);
    });
}

let hudLives = null, hudSeconds = null, hudPercent = null, hudTarget = null;

function updateHUD() {
    if (lives !== hudLives) {
        livesHud.value.textContent = lives;
        hudLives = lives;
    }
    const seconds = Math.ceil(timeRemaining);
    if (seconds !== hudSeconds) {
        timeHud.value.textContent = `${seconds}s`;
        timeHud.value.style.color = timeRemaining <= 10 ? UI.danger : UI.text;
        hudSeconds = seconds;
    }
    if (filledPercentage !== hudPercent || targetPercentage !== hudTarget) {
        percentHud.value.textContent = `${filledPercentage}% / ${targetPercentage}%`;
        hudPercent = filledPercentage;
        hudTarget = targetPercentage;
    }
}

function togglePause(forcePause) {
    if (gameState !== 'PLAYING' || isGameOver || isWinAnimating) return; 
    
    soundManager.playSFX('click');
    isPaused = typeof forcePause === 'boolean' ? forcePause : !isPaused;

    if (isPaused) {
        soundManager.stopEngine();
        pauseOverlay.style.display = 'flex';
        pauseOverlay.innerHTML = `<span style="font-family: ${UI.font};">${t('pausedTitle')}</span><br><span style="font-family: ${UI.font}; font-size: 22px; color: ${UI.dim}; cursor:pointer; display:inline-block; margin-top:20px;">${t('pausedSub')}</span>`;
        pauseBtn.dataset.textKey = 'resume';
        pauseBtn.innerText = t('resume');
    } else {
        soundManager.startEngine();
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

    soundManager.stopEngine();
    soundManager.startMenuMusic();
    
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
    soundManager.stopEngine();
    soundManager.stopGameMusic();
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

        scoreHTML = `<div style="font-family: ${UI.font}; font-size: 28px; margin-top: 24px; color: ${UI.success};">${t('score')}: ${score}</div>`;
        resultOverlay.innerHTML = `
            <div style="font-family: ${UI.font}; color: ${UI.success}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${UI.glow(UI.success)};">${t('victory')}</div>
            <div style="font-family: ${UI.font}; font-size: 24px; color: ${UI.text}; margin-top: 20px;">${t('captured').replace('%s', filledPercentage)}</div>
            ${scoreHTML}`;
    } else {
        resultOverlay.innerHTML = `
            <div style="font-family: ${UI.font}; color: ${UI.danger}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${UI.glow(UI.danger)};">${t('gameOver')}</div>
            <div style="font-family: ${UI.font}; font-size: 24px; color: ${UI.text}; margin-top: 20px;">${reasonKey}</div>`;
    }

    const btnContainer = document.createElement('div');
    Object.assign(btnContainer.style, { marginTop: '40px', display: 'flex', gap: '20px' });
    
    if (isWin && currentLevelId < LEVELS_CONFIG.length) {
        const nextBtn = document.createElement('button');
        nextBtn.innerText = t('nextLevel');
        Object.assign(nextBtn.style, {
            fontFamily: UI.font, padding: '14px 22px', fontSize: '22px', cursor: 'pointer',
            backgroundColor: 'transparent', color: UI.success, border: `2px solid ${UI.success}`, borderRadius: '0'
        });
        applyHoverFill(nextBtn, UI.success);
        nextBtn.onclick = () => { soundManager.playSFX('click'); startLevel(currentLevelId + 1); };
        btnContainer.appendChild(nextBtn);
    }
    
    const restartBtn = document.createElement('button');
    restartBtn.innerText = t('playAgain');
    Object.assign(restartBtn.style, {
        fontFamily: UI.font, padding: '14px 22px', fontSize: '22px', cursor: 'pointer',
        backgroundColor: 'transparent', color: UI.cyan, border: `2px solid ${UI.cyan}`, borderRadius: '0'
    });
    applyHoverFill(restartBtn, UI.cyan);
    restartBtn.onclick = () => { soundManager.playSFX('click'); startLevel(currentLevelId); };
    
    const menuBtn = document.createElement('button');
    menuBtn.innerText = t('mainMenu');
    Object.assign(menuBtn.style, {
        fontFamily: UI.font, padding: '14px 22px', fontSize: '22px', cursor: 'pointer',
        backgroundColor: 'transparent', color: UI.dim, border: `2px solid ${UI.dim}`, borderRadius: '0'
    });
    applyHoverFill(menuBtn, UI.dim);
    menuBtn.onclick = () => { soundManager.playSFX('click'); quitToMenu(); };

    btnContainer.appendChild(restartBtn);
    btnContainer.appendChild(menuBtn);
    resultOverlay.appendChild(btnContainer);
}


// --- 2. OSVĚTLENÍ ---
const ambientLight = new THREE.AmbientLight(0xffffff, 1.05);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.45);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;

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

const emptyMaterial = new THREE.MeshLambertMaterial({ color: 0x35356b });
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
const colorWall = new THREE.Color(0x00d9ff);
const colorTrail = new THREE.Color(0xffa023);

// Buffery pro flood fill — alokované jednou, aby uzavření plochy nevytvářelo odpad pro GC
const regionIds = new Int32Array(MAX_BLOCKS);
const floodQueue = new Int32Array(MAX_BLOCKS);
const trailMask = new Uint8Array(MAX_BLOCKS);
const regionTouchesTrail = new Uint8Array(MAX_BLOCKS);
const regionHasEnemy = new Uint8Array(MAX_BLOCKS);

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

// Textura vzdušného víru: za každým ze dvou listů světlý ocas, který
// proti směru otáčení slábne do ztracena. Kreslí se jednou, sdílí ji oba rotory.
function createRotorWakeTexture(mirrored) {
    const SIZE = 192;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext('2d');

    const center = SIZE / 2;
    const outer = center * 0.97;
    const inner = center * 0.60;
    const SEGMENTS = 240;

    for (let i = 0; i < SEGMENTS; i++) {
        // dvě otáčky fáze na jedno kolo = jeden ocas za každým listem
        const phase = ((i / SEGMENTS) * 2) % 1;
        const fade = Math.pow(1 - phase, 2.4);
        if (fade < 0.004) continue;

        const a0 = (i / SEGMENTS) * Math.PI * 2;
        const a1 = ((i + 1.6) / SEGMENTS) * Math.PI * 2;
        const start = mirrored ? -a1 : a0;
        const end = mirrored ? -a0 : a1;

        // ocas se směrem dozadu i zužuje, aby se rozplýval
        const width = inner + (outer - inner) * (0.35 + 0.65 * fade);

        ctx.beginPath();
        ctx.arc(center, center, outer, start, end);
        ctx.arc(center, center, outer - (width - inner), end, start, true);
        ctx.closePath();
        ctx.fillStyle = `rgba(226, 240, 255, ${(0.14 * fade).toFixed(4)})`;
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
}

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

    // Vrtule si nechávají původní tmavou barvu z modelu, přisvícení se jich
    // ale týká stejně jako těla — jen nezáří, dokud na ně nedopadne světlo scény.
    droneModel.traverse((child) => {
        if (!child.isMesh || !child.material || !child.material.emissive) return;
        child.material = child.material.clone();
        child.material.emissive.setHex(0x3d4a63);
        child.material.emissiveIntensity = 1;
    });

    // Vzdušný vír za listy. Textura má za každým ze dvou listů světlý ocas,
    // který proti směru otáčení slábne do ztracena. Protože je kroužek
    // potomkem rotoru, ocasy se točí s ním a vypadají jako vířící vzduch.
    droneModel.updateWorldMatrix(true, true);
    const boxSize = new THREE.Vector3();
    [rotor1, rotor2].forEach((rotor, index) => {
        if (!rotor) return;
        new THREE.Box3().setFromObject(rotor).getSize(boxSize);
        const tipRadius = Math.max(boxSize.x, boxSize.z) * 0.5 / droneModel.scale.x;

        const wake = new THREE.Mesh(
            new THREE.RingGeometry(tipRadius * 0.58, tipRadius * 1.06, 48),
            new THREE.MeshBasicMaterial({
                // rotory se točí proti sobě, takže druhý ocas musí být zrcadlený
                map: createRotorWakeTexture(index === 1),
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                side: THREE.DoubleSide
            })
        );
        wake.rotation.x = -Math.PI / 2;
        wake.userData.isRotorWake = true;
        rotor.add(wake);
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
    crt.resize();
    uiWarp.refresh();
});

// --- 6. NEPŘÁTELÉ A EXPLOZE ---
const MAX_PARTICLES = 600;
const particleGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
const particlesMesh = new THREE.InstancedMesh(particleGeo, new THREE.MeshBasicMaterial(), MAX_PARTICLES);
particlesMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
particlesMesh.frustumCulled = false;
scene.add(particlesMesh);

const COLOR_RED = 0x8b0000;
const COLOR_BLACK = 0x222222;
const COLOR_ORANGE = 0xff8800;
const fwColors = [0xffd700, 0x00ffaa, 0x00aaff, 0xff00aa, 0xffffff];

// Vlastní pomocný objekt — částice se otáčejí, a sdílený `dummy` musí pro bloky zůstat bez rotace
const particleDummy = new THREE.Object3D();

const particles = [];
const freeParticleSlots = [];
for (let i = MAX_PARTICLES - 1; i >= 0; i--) {
    particles[i] = { active: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, rot: 0, life: 0 };
    freeParticleSlots.push(i);
    particleDummy.scale.set(0, 0, 0);
    particleDummy.updateMatrix();
    particlesMesh.setMatrixAt(i, particleDummy.matrix);
}
const particleColor = new THREE.Color();

function spawnParticle(x, y, z, vx, vy, vz, life, colorHex) {
    const slot = freeParticleSlots.pop();
    if (slot === undefined) return;

    const p = particles[slot];
    p.active = true;
    p.x = x; p.y = y; p.z = z;
    p.vx = vx; p.vy = vy; p.vz = vz;
    p.rot = 0; p.life = life;

    particlesMesh.setColorAt(slot, particleColor.setHex(colorHex));
    if (particlesMesh.instanceColor) particlesMesh.instanceColor.needsUpdate = true;
}

function releaseParticle(slot) {
    particles[slot].active = false;
    freeParticleSlots.push(slot);
    particleDummy.scale.set(0, 0, 0);
    particleDummy.updateMatrix();
    particlesMesh.setMatrixAt(slot, particleDummy.matrix);
}

function createExplosion(x, y, z, count = 45, colors = [COLOR_RED, COLOR_BLACK]) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 4;
        const vy = Math.random() * 10 + 5;
        spawnParticle(x, y, z, Math.cos(angle) * speed, vy, Math.sin(angle) * speed, 1.0, colors[Math.floor(Math.random() * colors.length)]);
    }
    particlesMesh.instanceMatrix.needsUpdate = true;
}

function createFireworks(x, y, z) {
    const color = fwColors[Math.floor(Math.random() * fwColors.length)];
    for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 10 + 2;
        const vy = Math.random() * 12 + 4;
        spawnParticle(x, y, z, Math.cos(angle) * speed, vy, Math.sin(angle) * speed, 1.2, color);
    }
    particlesMesh.instanceMatrix.needsUpdate = true;
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
        createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 80, [COLOR_RED, COLOR_ORANGE, COLOR_BLACK]);
        
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

// Zvětšení modelů nepřátel kvůli čitelnosti při nízkém rozlišení.
// Násobí se jen geometrie — `radius` zůstává, a protože z něj počítá kolize
// s hráčem, zásah se spouští na stejnou vzdálenost jako dřív.
const ENEMY_VISUAL_SCALE = 1.6;

class Bouncer {
    constructor(x, z) {
        this.radius = CELL_SIZE * 0.48; this.colRadius = CELL_SIZE * 0.4;
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius * ENEMY_VISUAL_SCALE, 12, 12),
            new THREE.MeshBasicMaterial({ color: 0xff3355 })
        );
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
        this.mesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(this.radius * ENEMY_VISUAL_SCALE, 0),
            new THREE.MeshBasicMaterial({ color: 0xc44dff })
        );
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
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius * ENEMY_VISUAL_SCALE, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xffb020 })
        );
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
            createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 45, [COLOR_ORANGE, COLOR_BLACK]);
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
        const bomberGeo = new THREE.OctahedronGeometry(this.radius * ENEMY_VISUAL_SCALE, 0);
        this.mesh = new THREE.Mesh(bomberGeo, new THREE.MeshBasicMaterial({ color: 0x1a1a24 }));
        // Tmavé těleso na tmavém pozadí zaniká, proto svítící obrys
        this.mesh.add(new THREE.LineSegments(
            new THREE.EdgesGeometry(bomberGeo),
            new THREE.LineBasicMaterial({ color: 0xff6a00 })
        ));
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
    for (let i = 0; i < MAX_PARTICLES; i++) {
        if (particles[i].active) releaseParticle(i);
    }
    particlesMesh.instanceMatrix.needsUpdate = true;
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
    setTimeout(() => uiWarp.refresh(), 0);
    
    updateAllTexts();
    soundManager.startEngine();
    soundManager.startGameMusic();
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
    soundManager.stopEngine();
    soundManager.playSFX('victory');
    velocityX = 0; velocityZ = 0;
    lastGridX = -1; lastGridZ = -1;
    createFireworks(player.position.x, player.position.y, player.position.z);
    setTimeout(() => { isWinAnimating = false; showResult(true); }, 2000);
}

function playerDied(reasonText, forceGameOver = false) {
    if (isGameOver || isRespawning || isWinAnimating || gameState !== 'PLAYING') return; 

    if (forceGameOver) lives = 0; else lives--;

    soundManager.playSFX('death');
    soundManager.stopEngine();

    let momX = velocityX;
    let momZ = velocityZ;

    createExplosion(player.position.x, player.position.y, player.position.z);
    
    // --- ANIMACE ROZPADU DRONA (s hybností) ---
    if (droneModel) {
        const explodePart = (part, isBody = false) => {
            if (!part) return;
            const clone = part.clone();

            // Vír patří k roztočené vrtuli — na padajícím úlomku nedává smysl.
            const wakes = [];
            clone.traverse((child) => { if (child.userData.isRotorWake) wakes.push(child); });
            wakes.forEach((wake) => wake.removeFromParent());

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
            soundManager.startEngine();
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
    regionIds.fill(-1);
    trailMask.fill(0);
    for (const p of finishedTrail) trailMask[getIndex(p.x, p.z)] = 1;

    let regionCount = 0;
    for (let z = 0; z < GRID_SIZE; z++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            const start = getIndex(x, z);
            if (grid[z][x] !== 0 || regionIds[start] !== -1) continue;

            const id = regionCount++;
            regionTouchesTrail[id] = 0;
            regionHasEnemy[id] = 0;

            let head = 0, tail = 0;
            floodQueue[tail++] = start;
            regionIds[start] = id;

            while (head < tail) {
                const cell = floodQueue[head++];
                const cx = cell % GRID_SIZE;
                const cz = (cell - cx) / GRID_SIZE;

                if (!regionTouchesTrail[id]) {
                    for (let dz = -1; dz <= 1 && !regionTouchesTrail[id]; dz++) {
                        const nz = cz + dz;
                        if (nz < 0 || nz >= GRID_SIZE) continue;
                        for (let dx = -1; dx <= 1; dx++) {
                            const nx = cx + dx;
                            if (nx < 0 || nx >= GRID_SIZE) continue;
                            if (trailMask[nz * GRID_SIZE + nx]) { regionTouchesTrail[id] = 1; break; }
                        }
                    }
                }

                if (cz + 1 < GRID_SIZE && grid[cz + 1][cx] === 0 && regionIds[cell + GRID_SIZE] === -1) { regionIds[cell + GRID_SIZE] = id; floodQueue[tail++] = cell + GRID_SIZE; }
                if (cz - 1 >= 0 && grid[cz - 1][cx] === 0 && regionIds[cell - GRID_SIZE] === -1) { regionIds[cell - GRID_SIZE] = id; floodQueue[tail++] = cell - GRID_SIZE; }
                if (cx + 1 < GRID_SIZE && grid[cz][cx + 1] === 0 && regionIds[cell + 1] === -1) { regionIds[cell + 1] = id; floodQueue[tail++] = cell + 1; }
                if (cx - 1 >= 0 && grid[cz][cx - 1] === 0 && regionIds[cell - 1] === -1) { regionIds[cell - 1] = id; floodQueue[tail++] = cell - 1; }
            }
        }
    }

    for (const enemy of enemies) {
        const ex = Math.floor((enemy.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const ez = Math.floor((enemy.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        if (ex < 0 || ex >= GRID_SIZE || ez < 0 || ez >= GRID_SIZE) continue;
        const id = regionIds[getIndex(ex, ez)];
        if (id !== -1) regionHasEnemy[id] = 1;
    }

    let capturedCells = 0;
    for (let z = 1; z < GRID_SIZE - 1; z++) {
        for (let x = 1; x < GRID_SIZE - 1; x++) {
            const id = regionIds[getIndex(x, z)];
            if (id !== -1 && regionTouchesTrail[id] && !regionHasEnemy[id]) {
                createBlock(x, z, colorWall, 1, true);
                capturedCells++;
            }
        }
    }
    if (capturedCells > 0) soundManager.playSFX('capture');
    calculatePercentage();
}

// --- 8. HERNÍ SMYČKA ---
const clock = new THREE.Clock();
const cameraOffset = new THREE.Vector3(0, 8, 10);
const cameraLookAtTarget = new THREE.Vector3(0, 0, 0);
let lastGridX = -1; let lastGridZ = -1;

// Znovupoužité vektory — v herní smyčce se nesmí alokovat
const menuCameraPos = new THREE.Vector3(0, 4, 15);
const menuLookAt = new THREE.Vector3(0, 4, 0);
const cameraTargetPos = new THREE.Vector3();

updateAllTexts(); 

uiWarp.setEnabled(settingsConfig.crt !== false);

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

        camera.position.lerp(menuCameraPos, 0.05);
        cameraLookAtTarget.lerp(menuLookAt, 0.08);
        camera.lookAt(cameraLookAtTarget);
        crt.render(scene, camera);
        return;
    }

    // --- STAV HRY ---
    if (isPaused || isGameOver) {
        crt.render(scene, camera);
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
                const margin = 4; const minDistance = 15; const safeRadius = 2;
                const span = GRID_SIZE - 2 * margin;
                const MAX_TRIES = 150;

                // Náhodné vzorkování místo skenu celé mřížky — dřív to bylo ~200 000 operací v jednom framu
                for (let tries = 0; tries < MAX_TRIES; tries++) {
                    const x = margin + Math.floor(Math.random() * span);
                    const z = margin + Math.floor(Math.random() * span);
                    if (grid[z][x] !== 1) continue;

                    let isSurrounded = true;
                    for (let dz = -safeRadius; dz <= safeRadius && isSurrounded; dz++) {
                        for (let dx = -safeRadius; dx <= safeRadius; dx++) {
                            if (grid[z + dz] && grid[z + dz][x + dx] !== 1) { isSurrounded = false; break; }
                        }
                    }
                    if (!isSurrounded) continue;

                    let isFarEnough = true;
                    for (let activeMine of activeItems) {
                        const mineGridX = Math.floor((activeMine.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
                        const mineGridZ = Math.floor((activeMine.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
                        const dx = x - mineGridX; const dz = z - mineGridZ;
                        if (dx * dx + dz * dz < minDistance * minDistance) { isFarEnough = false; break; }
                    }
                    if (!isFarEnough) continue;

                    const worldX = x * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
                    const worldZ = z * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2);
                    activeItems.push(new Item(worldX, worldZ));
                    break;
                }
            }
        }

        for (let i = activeItems.length - 1; i >= 0; i--) {
            activeItems[i].update(delta);
            if (activeItems[i].isDead) activeItems.splice(i, 1);
        }
    }

    let particlesDirty = false;
    for (let i = 0; i < MAX_PARTICLES; i++) {
        const p = particles[i];
        if (!p.active) continue;
        particlesDirty = true;

        p.life -= delta;
        if (p.life <= 0) { releaseParticle(i); continue; }

        p.x += p.vx * delta; p.y += p.vy * delta; p.z += p.vz * delta;
        p.vy -= 25 * delta;
        p.rot += 10 * delta;

        particleDummy.position.set(p.x, p.y, p.z);
        particleDummy.rotation.set(p.rot, p.rot, 0);
        particleDummy.scale.setScalar(p.life);
        particleDummy.updateMatrix();
        particlesMesh.setMatrixAt(i, particleDummy.matrix);
    }
    if (particlesDirty) particlesMesh.instanceMatrix.needsUpdate = true;
    
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

        const speed = Math.hypot(velocityX, velocityZ);
        soundManager.setEngineSpeed(Math.min(speed / BASE_MAX_SPEED, 1));

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
    
    cameraTargetPos.set(targetX, targetY, targetZ);
    camera.position.lerp(cameraTargetPos, 0.05);
    cameraLookAtTarget.lerp(player.position, 0.08);
    camera.lookAt(cameraLookAtTarget);

    if (cameraShakeTime > 0) {
        cameraShakeTime -= delta;
        const shakeIntensity = Math.max(cameraShakeTime, 0) * 1.5; 
        camera.position.x += (Math.random() - 0.5) * shakeIntensity;
        camera.position.y += (Math.random() - 0.5) * shakeIntensity;
        camera.position.z += (Math.random() - 0.5) * shakeIntensity;
    }

    crt.render(scene, camera);
}

animate();