import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createAudioEngine } from './audio.js';
import { createCrtPipeline, createUiWarp } from './crt.js';
import './style.css';

// --- NAČTENÍ EXTERNÍHO FONTU PRO MENU ---
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Dotykové zařízení poznáme podle vstupu, ne podle řetězce prohlížeče —
// ten se dá snadno podvrhnout a na hybridních noteboocích lže.
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches && navigator.maxTouchPoints > 0;

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
// Cíl je všude 80 %. Dřív rostl až na 90 %, což spolu s přibývajícími
// minami dělalo poslední levely prakticky neprůchozí.
const LEVELS_CONFIG = [
    { id: 1, target: 80, time: 70, bouncers: 2, eaters: 0, bombers: 0, maxMines: 2 },
    { id: 2, target: 80, time: 80, bouncers: 2, eaters: 1, bombers: 0, maxMines: 2 },
    { id: 3, target: 80, time: 90, bouncers: 3, eaters: 1, bombers: 0, maxMines: 3 },
    { id: 4, target: 80, time: 100, bouncers: 2, eaters: 2, bombers: 1, maxMines: 3 },
    { id: 5, target: 80, time: 110, bouncers: 3, eaters: 2, bombers: 1, maxMines: 3 },
    { id: 6, target: 80, time: 125, bouncers: 3, eaters: 2, bombers: 1, maxMines: 4 },
    { id: 7, target: 80, time: 140, bouncers: 3, eaters: 3, bombers: 2, maxMines: 4 },
    { id: 8, target: 80, time: 150, bouncers: 4, eaters: 3, bombers: 2, maxMines: 4 }
];

// --- LOKALIZACE (CZ / EN) ---
const i18n = {
    cz: {
        title: "CUTRON",
        campaign: "Kampaň",
        resetProgress: "Smazat postup",
        resetConfirm: "Opravdu smazat?",
        resetDone: "Postup smazán",
        language: "Jazyk: Čeština",
        settings: "Nastavení",
        help: "Nápověda",
        duel: "1v1",
        duelNoTouch: "Souboj 1v1 se hraje ve dvou na jedné klávesnici — jeden na WASD, druhý na šipkách. Na dotykovém zařízení ho hrát nelze.",
        touchJoystick: "Ovládání: Joystick",
        touchDpad: "Ovládání: Šipky",
        playerOne: "Hráč 1",
        playerTwo: "Hráč 2",
        duelByArea: "ovládl nadpoloviční většinu plochy!",
        duelByTime: "měl po vypršení času větší území!",
        duelByLives: "ustál souboj — soupeři došly životy!",
        duelWins: "%s vyhrává",
        duelDraw: "Remíza!",
        reasonRivalTrail: "Soupeř ti přejel nedokončenou brázdu!",
        helpTitle: "Nápověda",
        helpGoal: "Cíl hry",
        helpGoalText: "Leť dronem po volné ploše a kresli brázdu. Jakmile ji uzavřeš o vlastní území nebo o okraj arény, zabereš všechno uvnitř. V kampani potřebuješ 80 % plochy, v souboji víc než soupeř. Nikdy nenajížděj do vlastní nedokončené brázdy.",
        helpControls: "Ovládání",
        helpMoveOne: "Pohyb — hráč 1",
        helpMoveTwo: "Pohyb — hráč 2 (jen 1v1)",
        helpDiagonal: "Dvě klávesy naráz = šikmý let.",
        helpTouch: "Na telefonu se dron ovládá dotykem — joystick se objeví tam, kde přiložíš prst.",
        helpObjects: "Předměty",
        helpEnemies: "Nepřátelé",
        heartName: "Srdce",
        heartDesc: "Objeví se jen zřídka a jen na zabrané ploše. Sebráním získáš život navíc, nejvýš však pět. Zmizí, pokud pod ním plocha přestane být tvoje.",
        selectLevel: "Výběr Levelu",
        back: "Zpět",
        level: "Level",
        score: "Skóre",
        pause: "PAUZA",
        resume: "POKRAČOVAT",
        quit: "UKONČIT",
        pausedTitle: "HRA POZASTAVENA",
        pausedSub: "Klikni na obrazovku nebo stiskni Esc",
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
        campaign: "Campaign",
        resetProgress: "Erase progress",
        resetConfirm: "Really erase?",
        resetDone: "Progress erased",
        language: "Language: English",
        settings: "Settings",
        help: "Help",
        duel: "1v1",
        duelNoTouch: "A 1v1 duel is played by two people on one keyboard — one on WASD, the other on the arrow keys. It cannot be played on a touch device.",
        touchJoystick: "Controls: Joystick",
        touchDpad: "Controls: D-pad",
        playerOne: "Player 1",
        playerTwo: "Player 2",
        duelByArea: "took more than half of the arena!",
        duelByTime: "held more ground when time ran out!",
        duelByLives: "outlasted the rival — they ran out of lives!",
        duelWins: "%s wins",
        duelDraw: "Draw!",
        reasonRivalTrail: "Your rival ran over your unfinished trail!",
        helpTitle: "Help",
        helpGoal: "Objective",
        helpGoalText: "Fly across open ground and draw a trail. Close it against your own territory or the arena edge and everything inside becomes yours. The campaign needs 80 % of the arena, a duel just needs more than your rival. Never run into your own unfinished trail.",
        helpControls: "Controls",
        helpMoveOne: "Move — player 1",
        helpMoveTwo: "Move — player 2 (1v1 only)",
        helpDiagonal: "Hold two keys at once to fly diagonally.",
        helpTouch: "On a phone the drone follows your touch — the joystick appears wherever you put your finger.",
        helpObjects: "Objects",
        helpEnemies: "Enemies",
        heartName: "Heart",
        heartDesc: "Appears rarely and only on captured ground. Picking it up grants an extra life, up to five. It vanishes if the ground beneath it stops being yours.",
        selectLevel: "Select Level",
        back: "Back",
        level: "Level",
        score: "Score",
        pause: "PAUSE",
        resume: "RESUME",
        quit: "QUIT",
        pausedTitle: "GAME PAUSED",
        pausedSub: "Click the screen or press Esc",
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

let lang = 'en';
const t = (key) => i18n[lang][key];

// --- DATA, STAVY A NASTAVENÍ HRY ---
let gameState = 'MENU'; // 'MENU', 'LEVEL_SELECT', 'PLAYING'
let gameMode = 'campaign'; // 'campaign' | 'duel'
let winAnimationPlayer = null;
let progress = JSON.parse(localStorage.getItem('cutronProgress')) || { unlocked: 1, scores: {} };
let settingsConfig = JSON.parse(localStorage.getItem('cutronSettings')) || { sfxVol: 0.5, bgmVol: 0.3 };

function saveProgress() { localStorage.setItem('cutronProgress', JSON.stringify(progress)); }
function saveSettings() { localStorage.setItem('cutronSettings', JSON.stringify(settingsConfig)); }

// Deklarováno takto brzy schválně: přepínač v nastavení se vytváří dřív
// než zbytek dotykového ovládání a potřebuje tuhle funkci už tam.
const touchControlMode = () => (settingsConfig.touchControl === 'dpad' ? 'dpad' : 'joystick');

let currentLevelId = 1;
let currentLevelConfig = null;
let maxActiveMines = 5;

let isPaused = false;
let isGameOver = false;
let isWinAnimating = false; 
let cameraShakeTime = 0;  
let fireworkTimer = 0;    

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

// Na telefonu je obrazovka úzká a silné vyklenutí by ukrojilo moc hrací plochy.
const CRT_CURVATURE = isTouchDevice ? 0.16 : 0.32;

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
        borderRadius: '0', marginBottom: '16px', width: 'min(330px, 76vw)',
        letterSpacing: '1px', textTransform: 'uppercase', transition: 'none'
    });
    applyHoverFill(btn, UI.cyan);
    btn.onclick = (e) => {
        soundManager.unlock();
        soundManager.playSFX('click');
        onClick(e);
    };
    return btn;
}

const btnCampaign = createMenuButton('campaign', () => openLevelSelect());
const btnLanguage = createMenuButton('language', () => {
    lang = lang === 'cz' ? 'en' : 'cz';
    updateAllTexts();
});
const btnSettings = createMenuButton('settings', () => {
    menuUI.style.display = 'none';
    settingsUI.style.display = 'flex';
});
const btnDuel = createMenuButton('duel', () => {
    // tlačítko zůstává i na telefonu, ale vysvětlí, proč mód nejde spustit
    if (isTouchDevice) {
        showNotice('duelNoTouch');
        return;
    }
    startDuel();
});
const btnHelp = createMenuButton('help', () => openHelp());

menuContent.appendChild(btnCampaign);
menuContent.appendChild(btnDuel);
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
const LEVEL_TILE = isTouchDevice ? 70 : 120;
Object.assign(levelGrid.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: isTouchDevice ? '10px' : '25px'
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
        section: 'enemies', shape: 'sphere', color: '#eaf0ff',
        cz: { name: 'Bouncer', desc: 'Nejrychlejší z nepřátel. Odráží se od zabrané plochy i od stěn arény. Zabije tě při dotyku — a stejně tak, když sám narazí do tvé rozdělané brázdy. Zabrané území nepoškozuje.' },
        en: { name: 'Bouncer', desc: 'The fastest enemy. Bounces off captured ground and arena walls. It kills you on contact — and also when it runs into your unfinished trail. It does not damage captured territory.' }
    },
    {
        section: 'enemies', shape: 'poly', color: '#c44dff',
        cz: { name: 'Eater', desc: 'Pomalejší než Bouncer, zato při každém nárazu do zabrané plochy z ní ukousne čtverec 5×5 polí. Postupně ti tak ubírá už získané území.' },
        en: { name: 'Eater', desc: 'Slower than the Bouncer, but every time it hits captured ground it bites out a 5×5 square. It steadily eats away the territory you already won.' }
    },
    {
        section: 'enemies', shape: 'diamond', color: '#1a1a24', stroke: '#ff6a00',
        cz: { name: 'Bomber', desc: 'Nejpomalejší nepřítel. Každých 5 sekund vystřelí ohnivou kouli náhodným směrem. Sám území nepoškozuje — to za něj obstarají jeho střely.' },
        en: { name: 'Bomber', desc: 'The slowest enemy. Every 5 seconds it fires a fireball in a random direction. It does no damage itself — its projectiles do the work.' }
    },
    {
        section: 'enemies', shape: 'sphere', color: '#ffb020',
        cz: { name: 'Ohnivá koule', desc: 'Letí rovně a velmi rychle. Při nárazu do zabrané plochy vybuchne a vypálí v ní kruh o poloměru 5 polí. Když zasáhne tebe nebo tvou brázdu, přijdeš o život.' },
        en: { name: 'Fireball', desc: 'Flies straight and very fast. On hitting captured ground it explodes and burns out a circle with a radius of 5 cells. If it hits you or your trail, you lose a life.' }
    },
    {
        section: 'objects', shape: 'mine', color: '#c6ff2e',
        cz: { name: 'Mina', desc: 'Objeví se uvnitř zabraného území. Jakmile se přiblížíš na 4 pole, spustí se odpočet 5 sekund — pak vybuchne, zničí kruh o poloměru 7 polí a v jeho dosahu zabije i tebe.' },
        en: { name: 'Mine', desc: 'Appears inside captured territory. Come within 4 cells and a 5 second countdown starts — then it explodes, destroying a circle with a radius of 7 cells and killing you if you are inside it.' }
    },
    {
        section: 'objects', shape: 'heart', color: '#e8174a',
        useKeys: { name: 'heartName', desc: 'heartDesc' }
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
    } else if (entry.shape === 'heart') {
        return pixelIcon('heart', entry.color, 5);
    } else {
        // osmiboké tělo se svítícím prstencem, jak mina vypadá ve hře
        const octagon = '32.2,26.2 26.2,32.2 17.8,32.2 11.8,26.2 11.8,17.8 17.8,11.8 26.2,11.8 32.2,17.8';
        body = `<circle cx="22" cy="22" r="18" fill="none" stroke="${entry.color}" stroke-width="2" opacity="0.55"/>`
             + `<polygon points="${octagon}" fill="#15151f" stroke="${entry.color}" stroke-width="2.5"/>`;
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

function createHelpHeading(textKey) {
    const heading = document.createElement('div');
    Object.assign(heading.style, {
        fontFamily: UI.font, fontSize: '26px', color: UI.amber,
        letterSpacing: '2px', textTransform: 'uppercase',
        marginTop: '14px', marginBottom: '2px'
    });
    heading.textContent = t(textKey);
    return heading;
}

function createHelpCard() {
    const card = document.createElement('div');
    Object.assign(card.style, {
        border: `2px solid ${UI.panelEdge}`, padding: '16px 18px',
        display: 'flex', flexDirection: 'column', gap: '12px'
    });
    return card;
}

function createHelpText(text, color = UI.text, size = '19px') {
    const el = document.createElement('div');
    Object.assign(el.style, { fontFamily: UI.font, fontSize: size, color, lineHeight: '1.45' });
    el.textContent = text;
    return el;
}

function createHelpKeyRow(labels, color, labelKey) {
    const row = document.createElement('div');
    Object.assign(row.style, { display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' });

    const keys = document.createElement('div');
    Object.assign(keys.style, { display: 'flex', gap: '5px' });
    labels.forEach((label) => keys.appendChild(createKeyElement(label, color)));

    row.append(keys, createHelpText(t(labelKey), color));
    return row;
}

function openHelp() {
    setTimeout(() => uiWarp.refresh(), 0);
    menuUI.style.display = 'none';
    helpUI.style.display = 'flex';
    helpList.innerHTML = '';

    // --- cíl hry ---
    helpList.appendChild(createHelpHeading('helpGoal'));
    const goal = createHelpCard();
    goal.appendChild(createHelpText(t('helpGoalText')));
    helpList.appendChild(goal);

    // --- ovládání ---
    helpList.appendChild(createHelpHeading('helpControls'));
    const controls = createHelpCard();
    if (isTouchDevice) {
        controls.appendChild(createHelpText(t('helpTouch')));
    } else {
        controls.appendChild(createHelpKeyRow(['W', 'A', 'S', 'D'], UI.cyan, 'helpMoveOne'));
        controls.appendChild(createHelpKeyRow(['\u2191', '\u2190', '\u2193', '\u2192'], '#00b4ff', 'helpMoveTwo'));
        controls.appendChild(createHelpText(t('helpDiagonal'), UI.dim));
    }
    helpList.appendChild(controls);

    // --- předměty a nepřátelé ---
    for (const sectionKey of ['objects', 'enemies']) {
        helpList.appendChild(createHelpHeading(sectionKey === 'objects' ? 'helpObjects' : 'helpEnemies'));

        for (const entry of HELP_ENTRIES.filter((e) => e.section === sectionKey)) {
            const row = createHelpCard();
            row.style.flexDirection = 'row';
            row.style.gap = '18px';
            row.style.alignItems = 'flex-start';

            const icon = document.createElement('div');
            icon.style.flex = '0 0 auto';
            icon.innerHTML = enemyShapeSvg(entry);

            const text = document.createElement('div');
            const labels = entry.useKeys
                ? { name: t(entry.useKeys.name), desc: t(entry.useKeys.desc) }
                : entry[lang];

            const name = document.createElement('div');
            Object.assign(name.style, {
                fontFamily: UI.font, fontSize: '24px', color: entry.stroke || entry.color,
                marginBottom: '6px', letterSpacing: '1px'
            });
            name.textContent = labels.name;

            text.append(name, createHelpText(labels.desc));
            row.append(icon, text);
            helpList.appendChild(row);
        }
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

let resetArmed = false;
let resetTimer = null;

const btnReset = createMenuButton('resetProgress', () => {
    if (!resetArmed) {
        resetArmed = true;
        btnReset.dataset.textKey = 'resetConfirm';
        btnReset.innerText = t('resetConfirm');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            resetArmed = false;
            btnReset.dataset.textKey = 'resetProgress';
            btnReset.innerText = t('resetProgress');
        }, 4000);
        return;
    }

    clearTimeout(resetTimer);
    resetArmed = false;
    progress = { unlocked: 1, scores: {} };
    saveProgress();
    btnReset.dataset.textKey = 'resetDone';
    btnReset.innerText = t('resetDone');
    setTimeout(() => {
        btnReset.dataset.textKey = 'resetProgress';
        btnReset.innerText = t('resetProgress');
    }, 1800);
});
btnReset.style.marginTop = '30px';
settingsUI.appendChild(btnReset);

const btnTouchControl = createMenuButton('touchJoystick', () => {
    settingsConfig.touchControl = touchControlMode() === 'dpad' ? 'joystick' : 'dpad';
    saveSettings();
    btnTouchControl.dataset.textKey = touchControlMode() === 'dpad' ? 'touchDpad' : 'touchJoystick';
    btnTouchControl.innerText = t(btnTouchControl.dataset.textKey);
    refreshTouchControls();
});
btnTouchControl.dataset.textKey = touchControlMode() === 'dpad' ? 'touchDpad' : 'touchJoystick';
btnTouchControl.style.marginTop = '10px';
if (isTouchDevice) settingsUI.appendChild(btnTouchControl);

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
btnCrt.style.marginTop = '10px';
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
    position: 'absolute', top: '4.5%', left: '4.5%', display: 'flex',
    gap: isTouchDevice ? '12px' : '22px',
    fontFamily: UI.font, fontSize: isTouchDevice ? '18px' : '26px',
    color: UI.text, letterSpacing: '1px',
    textShadow: '2px 2px 0 rgba(0,0,0,0.9)'
});
gameUI.appendChild(hudContainer);
uiWarp.register(hudContainer);

function createHudItem(iconName, iconColor) {
    const wrap = document.createElement('div');
    Object.assign(wrap.style, { display: 'flex', alignItems: 'center', gap: '9px' });

    const icon = document.createElement('span');
    icon.style.display = 'flex';
    icon.innerHTML = pixelIcon(iconName, iconColor, isTouchDevice ? 2 : 3);

    const value = document.createElement('span');
    wrap.append(icon, value);
    return { wrap, value };
}

const livesHud = createHudItem('heart', UI.danger);
const percentHud = createHudItem('area', UI.cyan);
const timeHud = createHudItem('timer', UI.amber);
hudContainer.append(livesHud.wrap, percentHud.wrap, timeHud.wrap);

// HUD souboje: oba hráči vedle sebe v barvách svých dronů, mezi nimi čas.
const duelHud = document.createElement('div');
Object.assign(duelHud.style, {
    position: 'absolute', top: '4.5%', left: '4.5%',
    display: 'none', alignItems: 'center', gap: '18px',
    fontFamily: UI.font, fontSize: '20px', letterSpacing: '1px'
});
gameUI.appendChild(duelHud);
uiWarp.register(duelHud);

function createDuelPanel(colorHex) {
    const wrap = document.createElement('div');
    Object.assign(wrap.style, {
        display: 'flex', alignItems: 'center', gap: '10px',
        color: colorHex, border: `2px solid ${colorHex}`, padding: '6px 14px'
    });

    const heart = document.createElement('span');
    heart.style.display = 'flex';
    heart.innerHTML = pixelIcon('heart', colorHex, 3);

    const lives = document.createElement('span');
    const area = document.createElement('span');
    area.style.marginLeft = '8px';

    wrap.append(heart, lives, area);
    return { wrap, lives, area };
}

const duelPanels = [
    createDuelPanel('#ff3b5c'),
    createDuelPanel('#00b4ff')
];
const duelTimer = document.createElement('div');
Object.assign(duelTimer.style, { color: UI.amber, display: 'flex', alignItems: 'center', gap: '10px' });
const duelTimerIcon = document.createElement('span');
duelTimerIcon.style.display = 'flex';
duelTimerIcon.innerHTML = pixelIcon('timer', UI.amber, 3);
const duelTimerValue = document.createElement('span');
duelTimer.append(duelTimerIcon, duelTimerValue);

duelHud.append(duelPanels[0].wrap, duelTimer, duelPanels[1].wrap);

let duelHudCache = ['', '', ''];

function refreshDuelHud() {
    players.forEach((p) => {
        const panel = duelPanels[p.index];
        if (!panel) return;
        const text = `${p.lives}`;
        if (duelHudCache[p.index] !== text + p.percentage) {
            panel.lives.textContent = text;
            panel.area.textContent = `${p.percentage}%`;
            duelHudCache[p.index] = text + p.percentage;
        }
    });
    const seconds = `${Math.ceil(Math.max(timeRemaining, 0))}s`;
    if (duelHudCache[2] !== seconds) {
        duelTimerValue.textContent = seconds;
        duelHudCache[2] = seconds;
    }
}

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
    padding: isTouchDevice ? '6px 10px' : '10px 20px', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'transparent',
    fontFamily: UI.font, fontSize: isTouchDevice ? '15px' : '20px',
    border: `2px solid ${UI.cyan}`, color: UI.cyan, borderRadius: '0'
});
applyHoverFill(pauseBtn, UI.cyan);
topButtons.appendChild(pauseBtn);

const quitBtn = document.createElement('button');
quitBtn.dataset.textKey = 'quit';
Object.assign(quitBtn.style, {
    padding: isTouchDevice ? '6px 10px' : '10px 20px', cursor: 'pointer',
    pointerEvents: 'auto', backgroundColor: 'transparent',
    fontFamily: UI.font, fontSize: isTouchDevice ? '15px' : '20px',
    border: `2px solid ${UI.danger}`, color: UI.danger, borderRadius: '0'
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

function createKeyElement(keyText, color = UI.cyan) {
    const el = document.createElement('div');
    el.innerText = keyText;
    Object.assign(el.style, {
        padding: '8px 12px', backgroundColor: 'transparent',
        fontFamily: UI.font, fontSize: '22px', border: `2px solid ${color}`, color, borderRadius: '0'
    });
    return el;
}
function createTextElement(key) {
    const el = document.createElement('div');
    el.dataset.textKey = key;
    Object.assign(el.style, { fontFamily: UI.font, fontSize: '22px', color: UI.dim, letterSpacing: '1px' });
    return el;
}

function createControlGroup(keyLabels, color, labelKey) {
    const group = document.createElement('div');
    Object.assign(group.style, { display: 'flex', alignItems: 'center', gap: '15px' });

    const keysGroup = document.createElement('div');
    Object.assign(keysGroup.style, { display: 'flex', gap: '5px' });
    keyLabels.forEach((k) => keysGroup.appendChild(createKeyElement(k, color)));

    const label = createTextElement(labelKey);
    label.style.color = color;
    group.append(keysGroup, label);
    return group;
}

// Kampaň ukazuje jen WASD, souboj obě sady v barvách obou dronů.
const campaignControls = createControlGroup(['W', 'A', 'S', 'D'], UI.cyan, 'move');
const duelControlsOne = createControlGroup(['W', 'A', 'S', 'D'], '#ff3b5c', 'playerOne');
const duelControlsTwo = createControlGroup(['\u2191', '\u2190', '\u2193', '\u2192'], '#00b4ff', 'playerTwo');
controlsUI.append(campaignControls, duelControlsOne, duelControlsTwo);

function refreshControlsHint() {
    if (isTouchDevice) {
        controlsUI.style.display = 'none';
        return;
    }
    const duel = gameMode === 'duel';
    campaignControls.style.display = duel ? 'none' : 'flex';
    duelControlsOne.style.display = duel ? 'flex' : 'none';
    duelControlsTwo.style.display = duel ? 'flex' : 'none';
}
refreshControlsHint();


// Krátká hláška uprostřed obrazovky. Používá se tam, kde by plná
// překryvná obrazovka byla zbytečně těžkopádná.
const noticeBox = document.createElement('div');
Object.assign(noticeBox.style, {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    width: 'min(430px, 80vw)', padding: '20px 22px',
    backgroundColor: UI.overlay, border: `2px solid ${UI.cyan}`,
    fontFamily: UI.font, fontSize: '19px', color: UI.text, lineHeight: '1.5',
    textAlign: 'center', display: 'none', pointerEvents: 'auto', zIndex: '200'
});
uiContainer.appendChild(noticeBox);

let noticeTimer = null;

function showNotice(textKey) {
    noticeBox.textContent = t(textKey);
    noticeBox.style.display = 'block';
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { noticeBox.style.display = 'none'; }, 5000);
}

noticeBox.addEventListener('pointerdown', () => {
    clearTimeout(noticeTimer);
    noticeBox.style.display = 'none';
});

// --- DOTYKOVÝ JOYSTICK ---
// Plovoucí: objeví se tam, kde hráč přiloží prst, takže nevadí ani různé
// velikosti a poměry stran telefonů a nemusí se trefovat do pevného místa.
const JOYSTICK_RADIUS = 58;

const joystick = { active: false, pointerId: null, x: 0, z: 0 };

const joystickBase = document.createElement('div');
Object.assign(joystickBase.style, {
    position: 'absolute', width: `${JOYSTICK_RADIUS * 2}px`, height: `${JOYSTICK_RADIUS * 2}px`,
    marginLeft: `-${JOYSTICK_RADIUS}px`, marginTop: `-${JOYSTICK_RADIUS}px`,
    border: `2px solid ${UI.cyan}`, borderRadius: '50%',
    backgroundColor: 'rgba(0, 217, 255, 0.08)', display: 'none', pointerEvents: 'none', zIndex: '50'
});

const joystickKnob = document.createElement('div');
Object.assign(joystickKnob.style, {
    position: 'absolute', width: '52px', height: '52px', marginLeft: '-26px', marginTop: '-26px',
    border: `2px solid ${UI.cyan}`, borderRadius: '50%',
    backgroundColor: 'rgba(0, 217, 255, 0.35)', display: 'none', pointerEvents: 'none', zIndex: '51'
});

uiContainer.append(joystickBase, joystickKnob);

function showJoystickAt(clientX, clientY) {
    joystickBase.style.left = `${clientX}px`;
    joystickBase.style.top = `${clientY}px`;
    joystickBase.style.display = 'block';
    moveJoystickKnob(clientX, clientY, clientX, clientY);
}

function moveJoystickKnob(baseX, baseY, clientX, clientY) {
    const dx = clientX - baseX;
    const dy = clientY - baseY;
    const distance = Math.hypot(dx, dy);

    // knoflík se zastaví na kraji kroužku, prst může jít dál
    const clamped = Math.min(distance, JOYSTICK_RADIUS);
    if (distance > 0) {
        joystickKnob.style.left = `${baseX + (dx / distance) * clamped}px`;
        joystickKnob.style.top = `${baseY + (dy / distance) * clamped}px`;
    } else {
        joystickKnob.style.left = `${baseX}px`;
        joystickKnob.style.top = `${baseY}px`;
    }
    joystickKnob.style.display = 'block';

    // malá mrtvá zóna, aby dron nedrfal při pouhém položení prstu
    if (distance === 0 || distance / JOYSTICK_RADIUS < 0.18) {
        joystick.x = 0;
        joystick.z = 0;
        return;
    }

    // Směr se bere z nezkráceného tahu a síla se zvlášť zastropuje na jedničce.
    // Dřív se směr dělil původní vzdáleností až po zkrácení, takže čím dál
    // od kroužku prst byl, tím pomaleji dron letěl — přesně naopak, než má.
    const strength = Math.min(distance / JOYSTICK_RADIUS, 1);
    joystick.x = (dx / distance) * strength;
    joystick.z = (dy / distance) * strength;
}

function hideJoystick() {
    joystick.active = false;
    joystick.pointerId = null;
    joystick.x = 0;
    joystick.z = 0;
    joystickBase.style.display = 'none';
    joystickKnob.style.display = 'none';
}

let joystickBaseX = 0;
let joystickBaseY = 0;

window.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch' || gameState !== 'PLAYING' || isPaused || isGameOver) return;
    if (touchControlMode() !== 'joystick') return;
    if (e.target instanceof Element && e.target.closest('button')) return;

    joystick.active = true;
    joystick.pointerId = e.pointerId;
    joystickBaseX = e.clientX;
    joystickBaseY = e.clientY;
    showJoystickAt(e.clientX, e.clientY);
});

window.addEventListener('pointermove', (e) => {
    if (!joystick.active || e.pointerId !== joystick.pointerId) return;
    moveJoystickKnob(joystickBaseX, joystickBaseY, e.clientX, e.clientY);
});

const endJoystick = (e) => {
    if (joystick.active && e.pointerId === joystick.pointerId) hideJoystick();
};
window.addEventListener('pointerup', endJoystick);
window.addEventListener('pointercancel', endJoystick);

// --- PEVNÉ DOTYKOVÉ ŠIPKY ---
// Alternativa k plovoucímu joysticku pro hráče, kterým vyhovuje pevné místo.
const dpad = { up: false, down: false, left: false, right: false };

const dpadUI = document.createElement('div');
Object.assign(dpadUI.style, {
    position: 'absolute', left: '22px', bottom: '26px',
    display: 'none', gridTemplateColumns: 'repeat(3, 62px)', gridTemplateRows: 'repeat(3, 62px)',
    gap: '4px', pointerEvents: 'auto', zIndex: '60'
});
uiContainer.appendChild(dpadUI);

function createDpadButton(label, direction, column, row) {
    const button = document.createElement('div');
    button.textContent = label;
    Object.assign(button.style, {
        gridColumn: String(column), gridRow: String(row),
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: UI.font, fontSize: '26px', color: UI.cyan,
        border: `2px solid ${UI.cyan}`, backgroundColor: 'rgba(0, 217, 255, 0.1)',
        userSelect: 'none', touchAction: 'none'
    });

    const press = (active) => {
        dpad[direction] = active;
        button.style.backgroundColor = active ? 'rgba(0, 217, 255, 0.45)' : 'rgba(0, 217, 255, 0.1)';
    };

    button.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        press(true);
        // zachycení prstu drží stisk i při sjetí mimo tlačítko;
        // když se nepovede, směr i tak funguje
        try { button.setPointerCapture(e.pointerId); } catch (err) { /* nevadí */ }
    });
    button.addEventListener('pointerup', () => press(false));
    button.addEventListener('pointercancel', () => press(false));
    button.addEventListener('pointerleave', () => press(false));
    return button;
}

dpadUI.append(
    createDpadButton('\u2191', 'up', 2, 1),
    createDpadButton('\u2190', 'left', 1, 2),
    createDpadButton('\u2192', 'right', 3, 2),
    createDpadButton('\u2193', 'down', 2, 3)
);

function resetDpad() {
    dpad.up = dpad.down = dpad.left = dpad.right = false;
}

function refreshTouchControls() {
    const show = isTouchDevice && gameState === 'PLAYING' && touchControlMode() === 'dpad';
    dpadUI.style.display = show ? 'grid' : 'none';
    if (!show) resetDpad();
}

// --- UPDATE TEXTŮ A MENU ---
function updateAllTexts() {
    document.querySelectorAll('[data-text-key]').forEach(el => {
        el.innerText = t(el.dataset.textKey);
    });
    if(gameState === 'PLAYING' || isPaused || isGameOver) updateHUD();
    
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
            width: `${LEVEL_TILE}px`, height: `${LEVEL_TILE}px`, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', borderRadius: '0',
            border: isUnlocked ? `2px solid ${UI.cyan}` : '2px solid #2b3a4a',
            backgroundColor: 'transparent',
            cursor: isUnlocked ? 'pointer' : 'not-allowed',
            color: isUnlocked ? UI.cyan : UI.dim
        });

        box.innerHTML = `<div style="font-family: ${UI.font}; font-size: ${isTouchDevice ? 26 : 42}px;">${config.id}</div>`;
        
        if (progress.scores[config.id]) {
            box.innerHTML += `<div style="font-family: ${UI.font}; font-size: ${isTouchDevice ? 11 : 18}px; margin-top: ${isTouchDevice ? 3 : 8}px; color: inherit; display: flex; align-items: center; gap: 4px;">${pixelIcon('star', 'currentColor', isTouchDevice ? 2 : 3)} ${progress.scores[config.id]}</div>`;
        } else if (!isUnlocked) {
            box.innerHTML += `<div style="margin-top: ${isTouchDevice ? 3 : 8}px; display: flex; color: inherit;">${pixelIcon('lock', 'currentColor', isTouchDevice ? 2 : 3)}</div>`;
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
    if (gameMode === 'duel') { refreshDuelHud(); return; }
    const hero = players[0];
    const heroLives = hero ? hero.lives : 0;
    if (heroLives !== hudLives) {
        livesHud.value.textContent = heroLives;
        hudLives = heroLives;
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
    isWinAnimating = false;
    gameState = 'MENU';
    cameraShakeTime = 0;

    soundManager.stopEngine();
    soundManager.startMenuMusic();
    
    // Skrytí všech herních UI a arény
    pauseOverlay.style.display = 'none';
    resultOverlay.style.display = 'none';
    gameUI.style.display = 'none';
    levelSelectUI.style.display = 'none';
    duelHud.style.display = 'none';
    dpadUI.style.display = 'none';
    resetDpad();
    sceneGroup.visible = false;
    gameMode = 'campaign';
    winAnimationPlayer = null; 
    
    clearSceneEntities(); // Vymaže částice, nepřátele atd.
    
    // NUCENÝ RESET hráče
    clearPlayers();
    if (menuDrone.group) menuDrone.group.visible = true;
    
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
        const score = Math.floor(filledPercentage * timeRemaining * (players[0] ? players[0].lives : 1) * currentLevelId);
        
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


function showDuelResult(winner, reasonKey) {
    isGameOver = true;
    soundManager.stopEngine();
    soundManager.stopGameMusic();
    resultOverlay.style.display = 'flex';
    controlsUI.style.display = 'none';

    const color = winner.index === 0 ? '#ff3b5c' : '#00b4ff';
    const name = t(winner.labelKey);
    const standings = players
        .map((p) => `${t(p.labelKey)} ${p.percentage}%`)
        .join('  ·  ');

    resultOverlay.innerHTML = `
        <div style="font-family: ${UI.font}; color: ${color}; font-size: clamp(26px, 5vw, 54px); text-shadow: ${UI.glow(color)};">${t('duelWins').replace('%s', name)}</div>
        <div style="font-family: ${UI.font}; font-size: 16px; color: ${UI.text}; margin-top: 20px;">${name} ${t(reasonKey)}</div>
        <div style="font-family: ${UI.font}; font-size: 18px; color: ${UI.dim}; margin-top: 16px;">${standings}</div>`;

    const btnContainer = document.createElement('div');
    Object.assign(btnContainer.style, { marginTop: '40px', display: 'flex', gap: '20px' });

    const againBtn = document.createElement('button');
    againBtn.innerText = t('playAgain');
    Object.assign(againBtn.style, {
        fontFamily: UI.font, padding: '14px 22px', fontSize: '22px', cursor: 'pointer',
        backgroundColor: 'transparent', color: UI.cyan, border: `2px solid ${UI.cyan}`, borderRadius: '0'
    });
    applyHoverFill(againBtn, UI.cyan);
    againBtn.onclick = () => { soundManager.playSFX('click'); startDuel(); };

    const menuBtn = document.createElement('button');
    menuBtn.innerText = t('mainMenu');
    Object.assign(menuBtn.style, {
        fontFamily: UI.font, padding: '14px 22px', fontSize: '22px', cursor: 'pointer',
        backgroundColor: 'transparent', color: UI.dim, border: `2px solid ${UI.dim}`, borderRadius: '0'
    });
    applyHoverFill(menuBtn, UI.dim);
    menuBtn.onclick = () => { soundManager.playSFX('click'); quitToMenu(); };

    btnContainer.append(againBtn, menuBtn);
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
const players = [];
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

// Hodnoty v mřížce. Kromě prázdna a neutrální zdi arény nese políčko i to,
// komu patří — proto má každý hráč vlastní hodnotu pro zabranou plochu i stopu.
const CELL_EMPTY = 0;
const CELL_WALL = 5;
const capturedValue = (playerIndex) => (playerIndex === 0 ? 1 : 3);
const trailValue = (playerIndex) => (playerIndex === 0 ? 2 : 4);
const isCapturedCell = (value) => value === 1 || value === 3;
const isTrailCell = (value) => value === 2 || value === 4;
const capturedOwner = (value) => (value === 1 ? 0 : 1);
const trailOwner = (value) => (value === 2 ? 0 : 1);

// V kampani zůstává okraj arény azurový jako dřív; v souboji musí být
// neutrální, aby nevypadal jako území jednoho z hráčů.
const colorWallNeutral = new THREE.Color(0x4a5a7a);
const colorWallCampaign = new THREE.Color(0x00d9ff);
const arenaWallColor = () => (gameMode === 'duel' ? colorWallNeutral : colorWallCampaign);

// Kampaň si drží původní ladění, souboj rozlišuje hráče červenou a modrou.
const PLAYER_COLORS = {
    campaign: [{ captured: 0x00d9ff, trail: 0xffa023, tint: null }],
    duel: [
        { captured: 0xff3b5c, trail: 0xff9ab0, tint: 0xff3b5c },
        { captured: 0x00b4ff, trail: 0x9be4ff, tint: 0x00b4ff }
    ]
};

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
                grid[z][x] = CELL_WALL;
                createBlock(x, z, arenaWallColor(), CELL_WALL, false);
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
    animatingBlocks.length = 0;
    players.forEach((p) => { p.trail.length = 0; p.percentage = 0; });
    filledPercentage = 0;
}

// Inicializace prázdného gridu
for (let i = 0; i < MAX_BLOCKS; i++) {
    dummy.scale.set(0, 0, 0);
    dummy.updateMatrix();
    blocksMesh.setMatrixAt(i, dummy.matrix);
}
resetGrid();

// --- 4. HRÁČI ---
// Stav hráče je v objektu, aby stejnou logikou prošla kampaň (jeden hráč)
// i souboj dvou hráčů na jedné klávesnici.
function createPlayer(index, config) {
    const group = new THREE.Group();
    group.position.set(config.startX, 0, config.startZ);
    scene.add(group);

    const player = {
        index,
        group,
        model: null,
        rotor1: null,
        rotor2: null,
        keys: config.keys,
        labelKey: config.labelKey,
        colorCaptured: new THREE.Color(config.colors.captured),
        colorTrail: new THREE.Color(config.colors.trail),
        tint: config.colors.tint,
        startX: config.startX,
        startZ: config.startZ,
        velocityX: 0,
        velocityZ: 0,
        lastGridX: -1,
        lastGridZ: -1,
        lastTrailDir: null,
        trail: [],
        lives: 3,
        isRespawning: false,
        percentage: 0
    };

    players.push(player);
    attachDrone(player);
    return player;
}

function resetPlayerState(player) {
    player.group.position.set(player.startX, 0, player.startZ);
    player.group.rotation.set(0, 0, 0);
    player.group.visible = true;
    player.velocityX = 0;
    player.velocityZ = 0;
    player.lastGridX = -1;
    player.lastGridZ = -1;
    player.lastTrailDir = null;
    player.trail.length = 0;
    player.isRespawning = false;
}

function clearPlayers() {
    players.forEach((p) => scene.remove(p.group));
    players.length = 0;
}

const opponentsOf = (player) => players.filter((other) => other !== player);

// Nepřítel musí ohrozit kohokoli ve hře — v souboji jsou hráči dva.
function hitPlayersInRange(position, radius, reasonKey) {
    if (gameState !== 'PLAYING' || isWinAnimating || isGameOver) return false;
    let hitSomeone = false;
    for (const target of players) {
        if (target.isRespawning) continue;
        const dx = target.group.position.x - position.x;
        const dz = target.group.position.z - position.z;
        if (Math.hypot(dx, dz) < radius) {
            playerDied(target, t(reasonKey));
            hitSomeone = true;
        }
    }
    return hitSomeone;
}

// V kampani se čas i miny zastaví, dokud hráč čeká na oživení. V souboji
// by zdržení jednoho hráče nemělo zmrazit hodiny tomu druhému.
const matchClockRunning = () => gameMode === 'duel' || !players.some((p) => p.isRespawning);

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

// Model se načte jednou jako šablona; každý hráč z něj dostane vlastní kopii,
// aby se v souboji daly drony odlišit barvou.
let droneTemplate = null;
const dronesWaitingForModel = [];

loader.load('Sprite_drone_2.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.15, 0.15, 0.15);

    const rotorOne = model.getObjectByName('Rotor_one');
    const rotorTwo = model.getObjectByName('Rotor_two');

    model.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    // Vrtule si nechávají původní tmavou barvu z modelu, přisvícení se jich
    // ale týká stejně jako těla — jen nezáří, dokud na ně nedopadne světlo scény.
    model.traverse((child) => {
        if (!child.isMesh || !child.material || !child.material.emissive) return;
        child.material = child.material.clone();
        child.material.emissive.setHex(0x3d4a63);
        child.material.emissiveIntensity = 1;
    });

    // Vzdušný vír za listy. Textura má za každým ze dvou listů světlý ocas,
    // který proti směru otáčení slábne do ztracena. Protože je kroužek
    // potomkem rotoru, ocasy se točí s ním a vypadají jako vířící vzduch.
    model.updateWorldMatrix(true, true);
    const boxSize = new THREE.Vector3();
    [rotorOne, rotorTwo].forEach((rotor, index) => {
        if (!rotor) return;
        new THREE.Box3().setFromObject(rotor).getSize(boxSize);
        const tipRadius = Math.max(boxSize.x, boxSize.z) * 0.5 / model.scale.x;

        const wake = new THREE.Mesh(
            new THREE.RingGeometry(tipRadius * 0.58, tipRadius * 1.06, 48),
            new THREE.MeshBasicMaterial({
                // Rotory se točí proti sobě, takže každý potřebuje jinak otočený ocas.
                // Řetězec převrácení (plátno má osu Y dolů, prstenec je sklopený
                // do roviny XZ) vycházel obráceně a vír předbíhal list místo
                // aby se táhl za ním.
                map: createRotorWakeTexture(index === 0),
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

    droneTemplate = model;
    dronesWaitingForModel.forEach(attachDrone);
    dronesWaitingForModel.length = 0;
});

function attachDrone(player) {
    if (!droneTemplate) {
        dronesWaitingForModel.push(player);
        return;
    }

    const model = droneTemplate.clone();
    model.scale.copy(droneTemplate.scale);
    if (player.scaleMultiplier) model.scale.multiplyScalar(player.scaleMultiplier);

    // Obarvení jen pro souboj. Klonované materiály, aby druhý dron zůstal nedotčený.
    if (player.tint !== null && player.tint !== undefined) {
        const tint = new THREE.Color(player.tint);
        model.traverse((child) => {
            if (!child.isMesh || !child.material || child.userData.isRotorWake) return;
            if (!child.material.color) return;
            child.material = child.material.clone();
            child.material.color.lerp(tint, 0.6);
            if (child.material.emissive) child.material.emissive.copy(tint).multiplyScalar(0.25);
        });
    }

    player.model = model;
    player.rotor1 = model.getObjectByName('Rotor_one');
    player.rotor2 = model.getObjectByName('Rotor_two');
    player.group.add(model);
}

// Dron poletující v menu. Hráči vznikají až se zápasem, takže menu
// potřebuje vlastní kus, který na nich nezávisí.
const menuDrone = { group: new THREE.Group(), model: null, rotor1: null, rotor2: null, tint: null, scaleMultiplier: 1.35 };
scene.add(menuDrone.group);
attachDrone(menuDrone);

function spinRotors(target, delta) {
    if (target.rotor1) target.rotor1.rotation.y += 15 * delta;
    if (target.rotor2) target.rotor2.rotation.y -= 15 * delta;
}

// --- 5. OVLÁDÁNÍ A POHYB ---
const BASE_MAX_SPEED = 15;
let currentMaxSpeed = BASE_MAX_SPEED;
const accelerationRate = 8;

const KEY_LAYOUTS = {
    wasd: { up: 'w', down: 's', left: 'a', right: 'd' },
    arrows: { up: 'arrowup', down: 'arrowdown', left: 'arrowleft', right: 'arrowright' }
};

const pressedKeys = new Set();
const TRACKED_KEYS = new Set([
    ...Object.values(KEY_LAYOUTS.wasd),
    ...Object.values(KEY_LAYOUTS.arrows)
]);

window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (!TRACKED_KEYS.has(key)) return;
    // šipky by jinak rolovaly stránkou
    if (key.startsWith('arrow')) e.preventDefault();
    pressedKeys.add(key);
});
window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (TRACKED_KEYS.has(key)) pressedKeys.delete(key);
});

// Pauza klávesou. Escape prohlížeč nijak nepohlcuje (jen ukončí celou
// obrazovku, pokud v ní hra je), takže funguje obojí.
window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' && e.code !== 'Space') return;
    if (gameState !== 'PLAYING') return;

    // mezerník by jinak zmáčkl zaměřené tlačítko nebo odroloval stránku
    e.preventDefault();
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    togglePause();
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

// --- MINA: geometrický tvar místo modelu ---
// Těleso i obrys sdílí všechny miny, takže se dají vykreslit dohromady.
// Pulzující prstenec má materiál vlastní, protože mění barvu podle odpočtu.
const MINE_RADIUS = CELL_SIZE * 1.5;
const mineBodyGeometry = new THREE.CylinderGeometry(MINE_RADIUS * 0.72, MINE_RADIUS, CELL_SIZE * 0.7, 8);
const mineBodyMaterial = new THREE.MeshBasicMaterial({ color: 0x15151f });
const mineEdgeGeometry = new THREE.EdgesGeometry(mineBodyGeometry);
// Výstražná limetková. Nebije se s červeným ani modrým územím hráčů,
// s azurovou arénou, fialovým eaterem ani oranžovým bomberem.
const MINE_COLOR = 0xc6ff2e;
const MINE_COLOR_URGENT = 0xf2ffd0;
const mineEdgeMaterial = new THREE.LineBasicMaterial({ color: MINE_COLOR });
const mineRingGeometry = new THREE.RingGeometry(MINE_RADIUS * 0.78, MINE_RADIUS * 1.15, 8);

// --- SRDCE: život navíc ---
// Model se skládá ze stejné pixelové mřížky jako ikona života v HUD, jen
// vytažené do hloubky. Slučuje se do jediné geometrie, takže i s obrysem
// jsou to dvě vykreslovací volání bez ohledu na počet kostiček.
// Model srdce se skládá jen z VNĚJŠÍCH stěn. Kdyby se slepily celé kostky,
// zůstaly by uvnitř stěny mezi sousedy a černá skořápka by je prosvítala —
// obrys by pak lemoval každou kostičku místo obvodu celého srdce.
// `expand` nafoukne kostičky na místě, čímž vznikne skořápka pro obrys.
function createVoxelHeartGeometry(expand = 0) {
    const rows = ICON_PIXELS.heart;
    const width = rows[0].length;
    const height = rows.length;
    const pixel = CELL_SIZE * 0.32;
    const half = pixel / 2 + expand;
    const halfDepth = pixel * 1.5 + expand;

    const filled = (x, y) => x >= 0 && x < width && y >= 0 && y < height && rows[y][x] === 'X';

    const positions = [];
    const quad = (a, b, c, d) => positions.push(...a, ...b, ...c, ...a, ...c, ...d);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (!filled(x, y)) continue;

            const centerX = (x - (width - 1) / 2) * pixel;
            const centerY = ((height - 1) / 2 - y) * pixel;
            const x0 = centerX - half, x1 = centerX + half;
            const y0 = centerY - half, y1 = centerY + half;
            const z0 = -halfDepth, z1 = halfDepth;

            // čelo a záda má každá kostička vždy
            quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]);
            quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]);

            // boky jen tam, kde soused chybí
            if (!filled(x + 1, y)) quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]);
            if (!filled(x - 1, y)) quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]);
            if (!filled(x, y + 1)) quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]);
            if (!filled(x, y - 1)) quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]);
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals();
    return geometry;
}

const heartGeometry = createVoxelHeartGeometry();
const heartOutlineGeometry = createVoxelHeartGeometry(CELL_SIZE * 0.085);
const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xe8174a, side: THREE.DoubleSide });
// obrys obrácenou skořápkou — černá silueta kolem celého tvaru
const heartOutlineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });

const MAX_LIVES = 5;
// Miny padají každé 4–6 s, srdce má být vzácnost — proto desítky sekund
// a pokaždé jinak, aby se nedalo odpočítávat.
const randomHeartDelay = () => 40 + Math.random() * 50;
const activeHearts = [];
let heartSpawnTimer = 0;
let heartSpawnDelay = randomHeartDelay();

class HeartPickup {
    constructor(x, z) {
        this.isDead = false;
        this.bob = Math.random() * Math.PI * 2;

        this.mesh = new THREE.Group();
        this.mesh.position.set(x, BLOCK_HEIGHT + 0.5, z);

        const outline = new THREE.Mesh(heartOutlineGeometry, heartOutlineMaterial);
        this.mesh.add(outline, new THREE.Mesh(heartGeometry, heartMaterial));

        sceneGroup.add(this.mesh);
    }

    remove() {
        sceneGroup.remove(this.mesh);
        this.isDead = true;
    }

    update(delta) {
        if (this.isDead) return;

        this.mesh.rotation.y += 1.5 * delta;
        this.bob += delta * 2.2;
        this.mesh.position.y = BLOCK_HEIGHT + 0.5 + Math.sin(this.bob) * 0.09;

        const gridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const gridZ = Math.floor((this.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        if (grid[gridZ] && !isCapturedCell(grid[gridZ][gridX])) {
            this.remove();
            return;
        }

        for (const target of players) {
            if (target.isRespawning || target.lives >= MAX_LIVES) continue;
            const dx = target.group.position.x - this.mesh.position.x;
            const dz = target.group.position.z - this.mesh.position.z;
            if (Math.hypot(dx, dz) < CELL_SIZE * 2.4) {
                target.lives++;
                soundManager.playSFX('pickup');
                createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 24, [0xe8174a, 0xff7da0]);
                this.remove();
                updateHUD();
                return;
            }
        }
    }
}

// Hledání volného místa uvnitř zabraného území. Používá náhodné vzorkování,
// protože sken celé mřížky dělal znatelný záškub.
function findSpawnSpot(minDistance, avoid) {
    const margin = 4;
    const safeRadius = 2;
    const span = GRID_SIZE - 2 * margin;

    for (let tries = 0; tries < 150; tries++) {
        const x = margin + Math.floor(Math.random() * span);
        const z = margin + Math.floor(Math.random() * span);
        if (!isCapturedCell(grid[z][x])) continue;

        let isSurrounded = true;
        for (let dz = -safeRadius; dz <= safeRadius && isSurrounded; dz++) {
            for (let dx = -safeRadius; dx <= safeRadius; dx++) {
                if (grid[z + dz] && !isCapturedCell(grid[z + dz][x + dx])) { isSurrounded = false; break; }
            }
        }
        if (!isSurrounded) continue;

        let isFarEnough = true;
        for (const other of avoid) {
            const otherX = Math.floor((other.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
            const otherZ = Math.floor((other.mesh.position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
            const dx = x - otherX;
            const dz = z - otherZ;
            if (dx * dx + dz * dz < minDistance * minDistance) { isFarEnough = false; break; }
        }
        if (!isFarEnough) continue;

        return {
            x: x * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2),
            z: z * CELL_SIZE - (ARENA_SIZE / 2) + (CELL_SIZE / 2)
        };
    }
    return null;
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
        this.targetY = BLOCK_HEIGHT;

        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const texture = new THREE.CanvasTexture(canvas);
        
        this.textSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
        this.textSprite.position.y = 0.75;
        this.textSprite.scale.set(0.95, 0.95, 1);
        this.textSprite.visible = false; 
        
        this.textCanvas = canvas; this.textCtx = ctx; this.textTexture = texture;
        this.mesh.add(this.textSprite);
        this.isTriggered = false; this.lastDisplayedSecond = -1;

        const body = new THREE.Mesh(mineBodyGeometry, mineBodyMaterial);
        body.position.y = CELL_SIZE * 0.35;
        body.add(new THREE.LineSegments(mineEdgeGeometry, mineEdgeMaterial));
        this.mesh.add(body);

        // Prstenec leží na tělese a pulzuje tím rychleji, čím blíž je výbuch.
        this.ringMaterial = new THREE.MeshBasicMaterial({
            color: MINE_COLOR, transparent: true, opacity: 0.55,
            blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
        });
        this.ring = new THREE.Mesh(mineRingGeometry, this.ringMaterial);
        this.ring.rotation.x = -Math.PI / 2;
        this.ring.position.y = CELL_SIZE * 0.72;
        this.mesh.add(this.ring);

        this.pulsePhase = 0;
        sceneGroup.add(this.mesh);
    }

    updateCountdownText(seconds) {
        if (seconds === this.lastDisplayedSecond) return;
        this.lastDisplayedSecond = seconds;
        
        soundManager.playSFX('beep');
        
        // Pod CRT filtrem a v nízkém rozlišení se tenké číslo ztrácí,
        // proto dostane plnou tmavou podložku a silný světlý obrys.
        const ctx = this.textCtx;
        ctx.clearRect(0, 0, 128, 128);

        ctx.fillStyle = 'rgba(8, 8, 16, 0.92)';
        ctx.beginPath();
        ctx.arc(64, 64, 52, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 6;
        ctx.strokeStyle = seconds <= 2 ? '#f2ffd0' : '#c6ff2e';
        ctx.stroke();

        ctx.font = 'bold 86px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#000000';
        ctx.strokeText(seconds.toString(), 64, 68);
        ctx.fillStyle = seconds <= 2 ? '#ffffff' : '#dcff8a';
        ctx.fillText(seconds.toString(), 64, 68);

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
                        if (isCapturedCell(grid[z][x])) {
                            grid[z][x] = CELL_EMPTY; 
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
        
        if (gameState === 'PLAYING' && !isWinAnimating && !isGameOver) {
            for (const target of players) {
                if (target.isRespawning) continue;
                const dx = target.group.position.x - this.mesh.position.x;
                const dz = target.group.position.z - this.mesh.position.z;
                if (Math.sqrt(dx * dx + dz * dz) < explosionRadius * CELL_SIZE) {
                    playerDied(target, t('reasonMine'));
                }
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

        if (this.mesh.position.y <= this.targetY + 0.1 && grid[currentGridZ] && !isCapturedCell(grid[currentGridZ][currentGridX])) {
            this.explodeMine(); sceneGroup.remove(this.mesh); this.isDead = true; return;
        }

        // Nespuštěná mina jen klidně dýchá, po spuštění pulz zrychluje
        // a barva přechází do červené — odpočet jde poznat i koutkem oka.
        const urgency = this.isTriggered ? Math.max(0, 1 - this.timer / 5) : 0;
        this.pulsePhase += delta * (2.5 + urgency * 22);
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;

        this.ring.scale.setScalar(1 + pulse * (0.12 + urgency * 0.4));
        this.ringMaterial.opacity = 0.3 + pulse * (0.3 + urgency * 0.45);
        this.ringMaterial.color.setHex(urgency > 0.6 ? MINE_COLOR_URGENT : MINE_COLOR);

        if (this.isTriggered) {
            this.timer -= delta;
            this.updateCountdownText(Math.ceil(this.timer));
            if (this.timer <= 0) {
                this.explodeMine(); sceneGroup.remove(this.mesh); this.isDead = true; return;
            }
        }

        if (gameState === 'PLAYING' && !isWinAnimating && !this.isTriggered) {
            for (const target of players) {
                if (target.isRespawning) continue;
                const dx = target.group.position.x - this.mesh.position.x;
                const dz = target.group.position.z - this.mesh.position.z;
                if (Math.sqrt(dx * dx + dz * dz) < CELL_SIZE * 4.0) {
                    this.isTriggered = true;
                    this.textSprite.visible = true;
                    break;
                }
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
        // Bílá je jediná barva, která se nebije ani s červeným a modrým územím
        // hráčů v souboji, ani s azurovou arénou a ostatními nepřáteli v kampani.
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius * ENEMY_VISUAL_SCALE, 12, 12),
            new THREE.MeshBasicMaterial({ color: 0xeaf0ff })
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

        if (isCapturedCell(cellX) || cellX === CELL_WALL) {
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (isTrailCell(cellX)) playerDied(players[trailOwner(cellX)], t('reasonEnemyTrail'));
        this.mesh.position.x = nextX; 

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (isCapturedCell(cellZ) || cellZ === CELL_WALL) {
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (isTrailCell(cellZ)) playerDied(players[trailOwner(cellZ)], t('reasonEnemyTrail'));
        this.mesh.position.z = nextZ;

        if (bounced) soundManager.playSFX('bounce'); 

        hitPlayersInRange(this.mesh.position, this.radius + (CELL_SIZE * 0.5), 'reasonEnemyHit');
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
                    if (isCapturedCell(grid[z][x])) {
                        grid[z][x] = CELL_EMPTY; 
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

        if (isCapturedCell(cellX) || cellX === CELL_WALL) {
            this.eat(checkGridX, currentGridZ); 
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (isTrailCell(cellX)) playerDied(players[trailOwner(cellX)], t('reasonEaterTrail'));
        this.mesh.position.x = nextX;

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (isCapturedCell(cellZ) || cellZ === CELL_WALL) {
            this.eat(currentGridX, checkGridZ); 
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (isTrailCell(cellZ)) playerDied(players[trailOwner(cellZ)], t('reasonEaterTrail'));
        this.mesh.position.z = nextZ;
        
        this.mesh.rotation.x += 4 * delta; this.mesh.rotation.y += 4 * delta;
        if (bounced) soundManager.playSFX('bounce');

        hitPlayersInRange(this.mesh.position, this.radius + (CELL_SIZE * 0.5), 'reasonEaterHit');
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
                        if (isCapturedCell(grid[z][x])) {
                            grid[z][x] = CELL_EMPTY; 
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
        } else if (grid[currentGridZ] && (isCapturedCell(grid[currentGridZ][checkGridX]) || grid[currentGridZ][checkGridX] === CELL_WALL)) {
            this.eat(checkGridX, currentGridZ); hit = true;
        } else if (grid[checkGridZ] && (isCapturedCell(grid[checkGridZ][currentGridX]) || grid[checkGridZ][currentGridX] === CELL_WALL)) {
            this.eat(currentGridX, checkGridZ); hit = true;
        } else if (grid[currentGridZ] && grid[currentGridZ][checkGridX] === 2 || grid[checkGridZ] && grid[checkGridZ][currentGridX] === 2) {
             playerDied(players[trailOwner(grid[currentGridZ][checkGridX] === 2 || grid[currentGridZ][checkGridX] === 4 ? grid[currentGridZ][checkGridX] : grid[checkGridZ][currentGridX])], t('reasonFireballTrail')); hit = true;
        }

        if (hit) {
            createExplosion(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z, 45, [COLOR_ORANGE, COLOR_BLACK]);
            sceneGroup.remove(this.mesh); this.isDead = true; return;
        }
        this.mesh.position.x = nextX; this.mesh.position.z = nextZ;

        if (hitPlayersInRange(this.mesh.position, this.radius + (CELL_SIZE * 0.5), 'reasonFireballHit')) {
            sceneGroup.remove(this.mesh);
            this.isDead = true;
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

        if (isCapturedCell(cellX) || cellX === CELL_WALL) {
            nextX = this.vx > 0 ? checkGridX * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridX + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vx *= -1; 
            bounced = true;
        } else if (isTrailCell(cellX)) playerDied(players[trailOwner(cellX)], t('reasonBomberTrail'));
        this.mesh.position.x = nextX;

        let nextZ = this.mesh.position.z + this.vz * delta;
        let currentGridX = Math.floor((this.mesh.position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        let checkGridZ = Math.floor((nextZ + Math.sign(this.vz) * this.colRadius + (ARENA_SIZE / 2)) / CELL_SIZE);
        let cellZ = (grid[checkGridZ] && grid[checkGridZ][currentGridX] !== undefined) ? grid[checkGridZ][currentGridX] : 1;

        if (isCapturedCell(cellZ) || cellZ === CELL_WALL) {
            nextZ = this.vz > 0 ? checkGridZ * CELL_SIZE - (ARENA_SIZE / 2) - this.colRadius - 0.001 : (checkGridZ + 1) * CELL_SIZE - (ARENA_SIZE / 2) + this.colRadius + 0.001;
            this.vz *= -1; 
            bounced = true;
        } else if (isTrailCell(cellZ)) playerDied(players[trailOwner(cellZ)], t('reasonBomberTrail'));
        this.mesh.position.z = nextZ;
        
        this.mesh.rotation.x += 4 * delta; this.mesh.rotation.y += 4 * delta;
        if (bounced) soundManager.playSFX('bounce');

        hitPlayersInRange(this.mesh.position, this.radius + (CELL_SIZE * 0.5), 'reasonBomberHit');
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
    activeHearts.forEach(h => sceneGroup.remove(h.mesh));
    activeHearts.length = 0;
    heartSpawnTimer = 0;
    heartSpawnDelay = randomHeartDelay();
    for (let i = 0; i < MAX_PARTICLES; i++) {
        if (particles[i].active) releaseParticle(i);
    }
    particlesMesh.instanceMatrix.needsUpdate = true;
    droneDebris.forEach(d => scene.remove(d.mesh));
    droneDebris.length = 0;
}

const PLAYER_START_Z = (ARENA_SIZE / 2) - (CELL_SIZE / 2);

function beginMatch() {
    isGameOver = false;
    isWinAnimating = false;
    isPaused = false;
    itemSpawnTimer = 0;
    winAnimationPlayer = null;
    filledPercentage = 0;

    clearPlayers();
    clearSceneEntities();
    resetGrid();

    menuDrone.group.visible = false;
    sceneGroup.visible = true;
    menuUI.style.display = 'none';
    levelSelectUI.style.display = 'none';
    resultOverlay.style.display = 'none';
    gameUI.style.display = 'block';
    controlsUI.style.display = 'flex';
    refreshControlsHint();
    setTimeout(() => uiWarp.refresh(), 0);
}

function finishMatchStart() {
    updateAllTexts();
    soundManager.startEngine();
    soundManager.startGameMusic();
    gameState = 'PLAYING';
    // až teď, protože zobrazení šipek se řídí herním stavem
    refreshTouchControls();
}

function startLevel(levelId) {
    gameMode = 'campaign';
    currentLevelId = levelId;
    currentLevelConfig = LEVELS_CONFIG.find(c => c.id === levelId) || LEVELS_CONFIG[0];

    timeRemaining = currentLevelConfig.time;
    targetPercentage = currentLevelConfig.target;
    maxActiveMines = currentLevelConfig.maxMines;

    beginMatch();

    createPlayer(0, {
        keys: KEY_LAYOUTS.wasd,
        colors: PLAYER_COLORS.campaign[0],
        startX: 0,
        startZ: PLAYER_START_Z,
        labelKey: 'playerOne'
    });

    for (let i = 0; i < currentLevelConfig.bouncers; i++) {
        enemies.push(new Bouncer((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }
    for (let i = 0; i < currentLevelConfig.eaters; i++) {
        enemies.push(new Eater((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }
    for (let i = 0; i < currentLevelConfig.bombers; i++) {
        enemies.push(new Bomber((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }

    duelHud.style.display = 'none';
    hudContainer.style.display = 'flex';
    finishMatchStart();
}

const DUEL_TIME = 180;
const DUEL_MAX_MINES = 4;
// Bouncery drží souboj pohromadě: oblast, ve které některý z nich je,
// se nezabírá, takže jedno uzavření nesebere půlku mapy naráz.
const DUEL_BOUNCERS = 3;

function startDuel() {
    gameMode = 'duel';
    currentLevelId = 0;
    currentLevelConfig = null;

    timeRemaining = DUEL_TIME;
    targetPercentage = DUEL_TARGET;
    maxActiveMines = DUEL_MAX_MINES;

    beginMatch();

    // každý startuje u své strany arény
    createPlayer(0, {
        keys: KEY_LAYOUTS.wasd,
        colors: PLAYER_COLORS.duel[0],
        startX: 0,
        startZ: PLAYER_START_Z,
        labelKey: 'playerOne'
    });
    createPlayer(1, {
        keys: KEY_LAYOUTS.arrows,
        colors: PLAYER_COLORS.duel[1],
        startX: 0,
        startZ: -PLAYER_START_Z,
        labelKey: 'playerTwo'
    });

    for (let i = 0; i < DUEL_BOUNCERS; i++) {
        enemies.push(new Bouncer((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15));
    }

    hudContainer.style.display = 'none';
    duelHud.style.display = 'flex';
    refreshDuelHud();
    finishMatchStart();
}

// --- 7. LOGIKA HRY, SMRT A FLOOD FILL ---
const DUEL_TARGET = 50;

function recalculatePercentages() {
    if (isWinAnimating || isGameOver || gameState !== 'PLAYING') return;

    const counts = [0, 0];
    for (let z = 1; z < GRID_SIZE - 1; z++) {
        for (let x = 1; x < GRID_SIZE - 1; x++) {
            const value = grid[z][x];
            if (value === 1) counts[0]++;
            else if (value === 3) counts[1]++;
        }
    }

    players.forEach((p) => {
        p.percentage = Math.round((counts[p.index] / TOTAL_FILLABLE_CELLS) * 100);
    });
    filledPercentage = players[0] ? players[0].percentage : 0;
    updateHUD();

    if (isGameOver || isWinAnimating) return;

    if (gameMode === 'duel') {
        const leader = players.find((p) => p.percentage > DUEL_TARGET);
        if (leader) endDuel(leader, 'duelByArea');
    } else if (filledPercentage >= targetPercentage) {
        triggerWin();
    }
}

// zachováno kvůli volání z nepřátel a min
const calculatePercentage = recalculatePercentages;

function triggerWin() {
    isWinAnimating = true;
    soundManager.stopEngine();
    soundManager.playSFX('victory');

    const hero = players[0];
    hero.velocityX = 0; hero.velocityZ = 0;
    hero.lastGridX = -1; hero.lastGridZ = -1;
    winAnimationPlayer = hero;
    createFireworks(hero.group.position.x, hero.group.position.y, hero.group.position.z);
    setTimeout(() => { isWinAnimating = false; showResult(true); }, 2000);
}

function endDuel(winner, reasonKey) {
    if (isGameOver || isWinAnimating) return;
    isWinAnimating = true;
    soundManager.stopEngine();
    soundManager.playSFX('victory');

    players.forEach((p) => {
        p.velocityX = 0; p.velocityZ = 0;
        p.lastGridX = -1; p.lastGridZ = -1;
    });
    winAnimationPlayer = winner;
    createFireworks(winner.group.position.x, winner.group.position.y, winner.group.position.z);
    setTimeout(() => { isWinAnimating = false; showDuelResult(winner, reasonKey); }, 2000);
}

// Stopa se maže i při smrti: políčka, pod kterými bylo území soupeře,
// se mu vrací — jinak by se dalo mazat cizí území vlastní smrtí.
function removeTrail(player) {
    for (const point of player.trail) {
        const index = getIndex(point.x, point.z);
        const animIdx = animatingBlocks.findIndex((a) => a.index === index);
        if (animIdx !== -1) animatingBlocks.splice(animIdx, 1);

        if (point.prev === CELL_EMPTY) {
            grid[point.z][point.x] = CELL_EMPTY;
            dummy.scale.set(0, 0, 0);
            dummy.updateMatrix();
            blocksMesh.setMatrixAt(index, dummy.matrix);
        } else {
            const owner = players[capturedOwner(point.prev)];
            createBlock(point.x, point.z, owner ? owner.colorCaptured : arenaWallColor(), point.prev, false);
        }
    }
    blocksMesh.instanceMatrix.needsUpdate = true;
    player.trail.length = 0;
    player.lastTrailDir = null;
}

function closeTrail(player) {
    const finished = player.trail.slice();
    const mine = capturedValue(player.index);
    for (const point of finished) createBlock(point.x, point.z, player.colorCaptured, mine, false);
    player.trail.length = 0;
    player.lastTrailDir = null;
    fillEnclosedAreas(player, finished);
}

// Soupeři mohla být rozdělaná stopa přepsána zabráním území.
// O život nepřichází, jen mu stopa propadne.
function invalidateOverwrittenTrail(other) {
    const otherTrail = trailValue(other.index);
    if (other.trail.length === 0) return;
    if (other.trail.every((point) => grid[point.z][point.x] === otherTrail)) return;

    other.trail = other.trail.filter((point) => grid[point.z][point.x] === otherTrail);
    removeTrail(other);
    other.lastGridX = -1;
    other.lastGridZ = -1;
}

function playerDied(player, reasonText, forceGameOver = false) {
    if (isGameOver || isWinAnimating || gameState !== 'PLAYING') return;
    if (!player || player.isRespawning) return;

    if (forceGameOver) player.lives = 0; else player.lives--;

    soundManager.playSFX('death');
    soundManager.stopEngine();

    const momX = player.velocityX;
    const momZ = player.velocityZ;
    const origin = player.group.position;

    createExplosion(origin.x, origin.y, origin.z);

    // --- ANIMACE ROZPADU DRONA (s hybností) ---
    if (player.model) {
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

        explodePart(player.rotor1);
        explodePart(player.rotor2);
        explodePart(player.model, true);
    }

    cameraShakeTime = 0.5;

    removeTrail(player);
    recalculatePercentages();

    player.isRespawning = true;
    player.group.visible = false;
    player.velocityX = 0;
    player.velocityZ = 0;
    player.lastGridX = -1;
    player.lastGridZ = -1;
    currentMaxSpeed = BASE_MAX_SPEED;

    setTimeout(() => {
        if (gameState !== 'PLAYING' && !isGameOver) return;

        if (player.lives <= 0) {
            if (gameMode === 'duel') {
                const winner = opponentsOf(player)[0];
                if (winner) showDuelResult(winner, 'duelByLives');
            } else {
                showResult(false, forceGameOver ? reasonText : reasonText + t('livesOut'));
            }
            return;
        }

        resetPlayerState(player);
        soundManager.startEngine();
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

function fillEnclosedAreas(player, finishedTrail) {
    const mine = capturedValue(player.index);

    regionIds.fill(-1);
    trailMask.fill(0);
    for (const point of finishedTrail) trailMask[getIndex(point.x, point.z)] = 1;

    // Hranicí je jen vlastní území a zeď arény; území soupeře se dá obklíčit.
    const isBarrier = (value) => value === mine || value === CELL_WALL;

    let regionCount = 0;
    for (let z = 0; z < GRID_SIZE; z++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            const start = getIndex(x, z);
            if (isBarrier(grid[z][x]) || regionIds[start] !== -1) continue;

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

                if (cz + 1 < GRID_SIZE && !isBarrier(grid[cz + 1][cx]) && regionIds[cell + GRID_SIZE] === -1) { regionIds[cell + GRID_SIZE] = id; floodQueue[tail++] = cell + GRID_SIZE; }
                if (cz - 1 >= 0 && !isBarrier(grid[cz - 1][cx]) && regionIds[cell - GRID_SIZE] === -1) { regionIds[cell - GRID_SIZE] = id; floodQueue[tail++] = cell - GRID_SIZE; }
                if (cx + 1 < GRID_SIZE && !isBarrier(grid[cz][cx + 1]) && regionIds[cell + 1] === -1) { regionIds[cell + 1] = id; floodQueue[tail++] = cell + 1; }
                if (cx - 1 >= 0 && !isBarrier(grid[cz][cx - 1]) && regionIds[cell - 1] === -1) { regionIds[cell - 1] = id; floodQueue[tail++] = cell - 1; }
            }
        }
    }

    // Oblast, ve které stojí nepřítel nebo soupeřův dron, se nezabírá.
    // Bez toho by jediné uzavření sebralo celou volnou plochu najednou.
    const blockers = [];
    for (const enemy of enemies) blockers.push(enemy.mesh.position);
    for (const other of opponentsOf(player)) blockers.push(other.group.position);

    for (const position of blockers) {
        const bx = Math.floor((position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
        const bz = Math.floor((position.z + (ARENA_SIZE / 2)) / CELL_SIZE);
        if (bx < 0 || bx >= GRID_SIZE || bz < 0 || bz >= GRID_SIZE) continue;

        let id = regionIds[getIndex(bx, bz)];

        // Hráč stojící na zdi arény nebo na zabrané ploše nepatří do žádné oblasti.
        // Bez tohoto dohledání by neblokoval nic a jedno uzavření by sebralo celou mapu.
        for (let radius = 1; id === -1 && radius <= 2; radius++) {
            for (let dz = -radius; dz <= radius && id === -1; dz++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const nx = bx + dx;
                    const nz = bz + dz;
                    if (nx < 0 || nx >= GRID_SIZE || nz < 0 || nz >= GRID_SIZE) continue;
                    const neighbour = regionIds[getIndex(nx, nz)];
                    if (neighbour !== -1) { id = neighbour; break; }
                }
            }
        }

        if (id !== -1) regionHasEnemy[id] = 1;
    }

    let capturedCells = 0;
    for (let z = 1; z < GRID_SIZE - 1; z++) {
        for (let x = 1; x < GRID_SIZE - 1; x++) {
            const id = regionIds[getIndex(x, z)];
            if (id !== -1 && regionTouchesTrail[id] && !regionHasEnemy[id]) {
                createBlock(x, z, player.colorCaptured, mine, true);
                capturedCells++;
            }
        }
    }

    if (capturedCells > 0) soundManager.playSFX('capture');
    opponentsOf(player).forEach(invalidateOverwrittenTrail);
    recalculatePercentages();
}

// Pohyb a kreslení stopy. Pravidla jsou stejná pro kampaň i souboj,
// liší se jen tím, koho hráč potká: v souboji i soupeřovu stopu a území.
function updatePlayerMovement(player, delta) {
    if (player.isRespawning) return;

    const mineCaptured = capturedValue(player.index);
    const mineTrail = trailValue(player.index);

    // Obě osy se čtou nezávisle, takže W+A dá šikmý let.
    let inputX = 0;
    let inputZ = 0;
    const keys = player.keys;
    if (keys) {
        if (pressedKeys.has(keys.up)) inputZ -= 1;
        if (pressedKeys.has(keys.down)) inputZ += 1;
        if (pressedKeys.has(keys.left)) inputX -= 1;
        if (pressedKeys.has(keys.right)) inputX += 1;
    }

    // na mobilu nahrazuje klávesnici joystick nebo pevné šipky
    if (isTouchDevice && player.index === 0) {
        if (touchControlMode() === 'dpad') {
            if (dpad.up) inputZ -= 1;
            if (dpad.down) inputZ += 1;
            if (dpad.left) inputX -= 1;
            if (dpad.right) inputX += 1;
        } else if (joystick.active) {
            inputX = joystick.x;
            inputZ = joystick.z;
        }
    }

    // zamezení nechtěné otočky o 180° při kreslení stopy
    if (player.trail.length > 0) {
        if (player.lastTrailDir === 'z' && inputZ < 0) inputZ = 0;
        if (player.lastTrailDir === '-z' && inputZ > 0) inputZ = 0;
        if (player.lastTrailDir === 'x' && inputX < 0) inputX = 0;
        if (player.lastTrailDir === '-x' && inputX > 0) inputX = 0;
    } else {
        player.lastTrailDir = null;
    }

    // bez normalizace by byl šikmý let o 41 % rychlejší než rovný
    const inputLength = Math.hypot(inputX, inputZ);
    if (inputLength > 1) {
        inputX /= inputLength;
        inputZ /= inputLength;
    }

    const targetVelX = inputX * currentMaxSpeed;
    const targetVelZ = inputZ * currentMaxSpeed;

    player.velocityX = THREE.MathUtils.lerp(player.velocityX, targetVelX, accelerationRate * delta);
    player.velocityZ = THREE.MathUtils.lerp(player.velocityZ, targetVelZ, accelerationRate * delta);

    const position = player.group.position;
    position.x += player.velocityX * delta;
    position.z += player.velocityZ * delta;

    const limit = (ARENA_SIZE / 2) - (CELL_SIZE / 2);
    position.x = THREE.MathUtils.clamp(position.x, -limit, limit);
    position.z = THREE.MathUtils.clamp(position.z, -limit, limit);

    const currentGridX = Math.floor((position.x + (ARENA_SIZE / 2)) / CELL_SIZE);
    const currentGridZ = Math.floor((position.z + (ARENA_SIZE / 2)) / CELL_SIZE);

    if ((currentGridX !== player.lastGridX || currentGridZ !== player.lastGridZ) && player.lastGridX !== -1) {
        const pathCells = getCellsBetween(player.lastGridX, player.lastGridZ, currentGridX, currentGridZ);

        for (const cell of pathCells) {
            if (cell.x === player.lastGridX && cell.z === player.lastGridZ) continue;
            let value = grid[cell.z][cell.x];

            // nájezd do rozdělané stopy soupeře zabíjí jeho, ne tebe
            if (isTrailCell(value) && trailOwner(value) !== player.index) {
                playerDied(players[trailOwner(value)], t('reasonRivalTrail'));
                value = grid[cell.z][cell.x];
            }

            if (value === mineTrail) {
                playerDied(player, t('reasonCross'));
                return;
            }

            if (value === mineCaptured || value === CELL_WALL) {
                if (player.trail.length > 0) closeTrail(player);
                continue;
            }

            const previous = isCapturedCell(value) ? value : CELL_EMPTY;
            const last = player.trail.length > 0
                ? player.trail[player.trail.length - 1]
                : { x: player.lastGridX, z: player.lastGridZ };

            const dx = cell.x - last.x;
            const dz = cell.z - last.z;
            if (dx > 0) player.lastTrailDir = 'x';
            else if (dx < 0) player.lastTrailDir = '-x';
            else if (dz > 0) player.lastTrailDir = 'z';
            else if (dz < 0) player.lastTrailDir = '-z';

            createBlock(cell.x, cell.z, player.colorTrail, mineTrail, true);
            player.trail.push({ x: cell.x, z: cell.z, prev: previous });
            soundManager.playSFX('trail');
        }
    }

    player.lastGridX = currentGridX;
    player.lastGridZ = currentGridZ;
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
const duelLookTarget = new THREE.Vector3();

// V kampani kamera sleduje jediný dron. V souboji musí udržet v záběru oba,
// takže se vzdálenost dopočítává ze zorného úhlu a rozestupu hráčů.
function updateCamera() {
    if (gameMode === 'duel' && players.length === 2) {
        const first = players[0].group.position;
        const second = players[1].group.position;
        const midX = (first.x + second.x) / 2;
        const midZ = (first.z + second.z) / 2;

        const padding = 5;
        const spreadX = Math.abs(first.x - second.x) + padding;
        const spreadZ = Math.abs(first.z - second.z) + padding;

        const verticalFov = THREE.MathUtils.degToRad(camera.fov);
        const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
        const distance = THREE.MathUtils.clamp(
            Math.max((spreadZ / 2) / Math.tan(verticalFov / 2), (spreadX / 2) / Math.tan(horizontalFov / 2)),
            16, 38
        );

        cameraTargetPos.set(midX * 0.8, distance * 0.78, midZ * 0.8 + distance * 0.62);
        camera.position.lerp(cameraTargetPos, 0.05);
        duelLookTarget.set(midX, 0, midZ);
        cameraLookAtTarget.lerp(duelLookTarget, 0.08);
        camera.lookAt(cameraLookAtTarget);
        return;
    }

    const hero = players[0];
    if (!hero) return;
    const trackingFactor = 0.9;
    const heroPos = hero.group.position;
    // Na výšku se kamera jen mírně oddálí. Sleduje hráče, takže celá aréna
    // v záběru být nemusí — silné oddálení dělalo dron nečitelně malý.
    const portrait = THREE.MathUtils.clamp(1 / camera.aspect, 1, 1.18);
    // Čím užší obrazovka, tím víc se kamera sklání shora — pohled zepředu
    // nechával na vysokém displeji spodní polovinu prázdnou.
    const topDown = THREE.MathUtils.clamp((1 / camera.aspect - 1) / 1.2, 0, 1);
    const height = THREE.MathUtils.lerp(10, 15, topDown) * portrait;
    const depth = THREE.MathUtils.lerp(12, 6, topDown) * portrait;
    cameraTargetPos.set(heroPos.x * trackingFactor, height, heroPos.z * trackingFactor + depth);
    camera.position.lerp(cameraTargetPos, 0.05);
    cameraLookAtTarget.lerp(heroPos, 0.08);
    camera.lookAt(cameraLookAtTarget);
}

updateAllTexts(); 

uiWarp.setEnabled(settingsConfig.crt !== false);

// Hudba menu má hrát od začátku. Prohlížeč ale zvuk bez interakce blokuje,
// takže se o to pokusíme hned a při prvním doteku nebo klávese to zopakujeme.
soundManager.unlock();
soundManager.startMenuMusic();

// Posluchače držíme, dokud hudba opravdu nehraje — jediný pokus nestačí,
// protože prohlížeč smí přehrání odmítnout i při prvním doteku.
const MUSIC_START_EVENTS = ['pointerdown', 'mousedown', 'click', 'keydown', 'touchstart'];

function startMusicOnInteraction() {
    soundManager.unlock();
    if (gameState === 'MENU' || gameState === 'LEVEL_SELECT') soundManager.startMenuMusic();
    if (soundManager.isMenuMusicPlaying()) {
        MUSIC_START_EVENTS.forEach((event) => window.removeEventListener(event, startMusicOnInteraction));
    }
}
MUSIC_START_EVENTS.forEach((event) => window.addEventListener(event, startMusicOnInteraction));

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
        if (menuDrone.model) {
            const tMenu = elapsed * 0.5;
            // Kamera stojí na z = 15, takže kladnější z znamená blíž k divákovi.
            // Hloubka je navázaná na výchylku do stran: po krajích se dron vyklání
            // dopředu, uprostřed couvne za menu, aby nepřekrýval tlačítka.
            const swing = Math.sin(tMenu * 0.8);
            const reach = isTouchDevice ? 4 : 7;
            menuDrone.model.position.set(
                swing * reach,
                3.4 + Math.sin(tMenu * 1.1) * 1.5,
                -4 + Math.abs(swing) * 7
            );
            menuDrone.model.rotation.set(
                Math.sin(tMenu * 1.5) * 0.2,
                -0.5 + Math.sin(tMenu) * 0.3,
                Math.cos(tMenu * 1.2) * 0.2
            );
        }
        spinRotors(menuDrone, delta);

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
    
    if (!isWinAnimating && matchClockRunning()) {
        timeRemaining -= delta;
        if (timeRemaining <= 0) {
            timeRemaining = 0; updateHUD();
            if (gameMode === 'duel') {
                const leader = players.reduce((best, p) => (p.percentage > best.percentage ? p : best));
                endDuel(leader, 'duelByTime');
            } else {
                playerDied(players[0], t('reasonTime'), true);
            }
        } else updateHUD();
    }

    if (!isWinAnimating && matchClockRunning()) {
        if (activeItems.length < maxActiveMines) {
            itemSpawnTimer += delta;
            if (itemSpawnTimer > 4 + Math.random() * 2) {
                itemSpawnTimer = 0;
                const spot = findSpawnSpot(15, activeItems);
                if (spot) activeItems.push(new Item(spot.x, spot.z));
            }
        }

        // Srdce je vzácné — objeví se jen občas, po jednom, a jen když
        // má vůbec komu přidat život.
        heartSpawnTimer += delta;
        if (heartSpawnTimer > heartSpawnDelay && activeHearts.length === 0) {
            heartSpawnTimer = 0;
            heartSpawnDelay = randomHeartDelay();
            if (players.some((p) => p.lives < MAX_LIVES)) {
                const spot = findSpawnSpot(10, activeItems);
                if (spot) activeHearts.push(new HeartPickup(spot.x, spot.z));
            }
        }

        for (let i = activeHearts.length - 1; i >= 0; i--) {
            activeHearts[i].update(delta);
            if (activeHearts[i].isDead) activeHearts.splice(i, 1);
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
    
    players.forEach((p) => spinRotors(p, delta));

    if (isWinAnimating && winAnimationPlayer) {
        const winnerPos = winAnimationPlayer.group.position;
        winnerPos.y += 15 * delta;
        winAnimationPlayer.group.rotation.y += 8 * delta;
        fireworkTimer -= delta;
        if (fireworkTimer <= 0) {
            createFireworks(winnerPos.x + (Math.random() - 0.5) * 15, winnerPos.y + (Math.random() - 0.5) * 5, winnerPos.z + (Math.random() - 0.5) * 15);
            fireworkTimer = 0.2;
        }
    }

    if (!isWinAnimating) {
        const hoverHeight = 0.2;
        const hoverSpeed = 2;
        players.forEach((p, i) => {
            if (!p.model) return;
            p.model.position.x = 0;
            p.model.position.z = 0;
            // posun fáze, aby oba drony nehoupaly úplně stejně
            p.model.position.y = BLOCK_HEIGHT + 0.5 + Math.sin(elapsed * hoverSpeed + i * 1.7) * hoverHeight;
            p.model.rotation.set(0, 0, Math.sin(elapsed * hoverSpeed * 0.5 + i) * 0.05);
        });
    }

    if (!isWinAnimating) {
        let fastest = 0;
        for (const p of players) {
            updatePlayerMovement(p, delta);
            fastest = Math.max(fastest, Math.hypot(p.velocityX, p.velocityZ));
        }
        soundManager.setEngineSpeed(Math.min(fastest / BASE_MAX_SPEED, 1));
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

    updateCamera();

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