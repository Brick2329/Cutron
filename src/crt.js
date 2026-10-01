import * as THREE from 'three';

// Scéna se renderuje do malého bufferu a teprve ten se přes shader roztáhne přes obrazovku.
// Nízké rozlišení je součástí retro vzhledu a zároveň je to největší úspora výkonu,
// protože GPU počítá jen zlomek pixelů.

const vertexShader = /* glsl */`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`;

const fragmentShader = /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform float uCurvature;
    uniform float uScanline;
    uniform float uAberration;
    uniform float uMask;
    uniform float uBrightness;
    uniform float uCorner;
    varying vec2 vUv;

    void main() {
        // Vyklenutí stínítka. Zkreslení roste s druhou mocninou vzdálenosti od středu,
        // takže střed obrazu zůstává ostrý a ohýbají se hlavně okraje — jako na baňce CRT.
        vec2 centered = vUv * 2.0 - 1.0;
        vec2 bend = abs(centered.yx) * uCurvature;
        centered += centered * bend * bend;
        vec2 uv = centered * 0.5 + 0.5;

        // mimo plochu stínítka je tma
        if (uv.x < -0.02 || uv.x > 1.02 || uv.y < -0.02 || uv.y > 1.02) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        uv = clamp(uv, 0.0, 1.0);

        // barevné rozladění kanálů po stranách
        float shift = uAberration * 0.002 * length(centered);
        vec3 color;
        color.r = texture2D(tDiffuse, uv + vec2(shift, 0.0)).r;
        color.g = texture2D(tDiffuse, uv).g;
        color.b = texture2D(tDiffuse, uv - vec2(shift, 0.0)).b;

        // řádkování zarovnané přesně na jeden řádek vnitřního rozlišení
        float scan = sin(uv.y * uResolution.y * 6.2831853) * 0.5 + 0.5;
        color *= 1.0 - uScanline * scan;

        // maska luminoforu (svislé RGB pruhy)
        float stripe = mod(gl_FragCoord.x, 3.0);
        vec3 mask = vec3(1.0 - uMask);
        if (stripe < 1.0) mask.r = 1.0 + uMask;
        else if (stripe < 2.0) mask.g = 1.0 + uMask;
        else mask.b = 1.0 + uMask;
        color *= mask;

        // vinětace do rohů
        float vignette = smoothstep(1.6, 0.4, length(centered));
        color *= mix(0.88, 1.0, vignette);

        // kompenzace ztmavení od řádkování a masky + celkové prosvětlení
        color *= (1.0 + uScanline * 0.9) * uBrightness;

        // Okraj stínítka: měkký přechod do černé a zaoblené rohy,
        // aby vyklenutá plocha končila jako sklo obrazovky, ne jako ostrý obdélník.
        vec2 fromCenter = abs(uv - 0.5) * 2.0;
        vec2 overCorner = max(fromCenter - (1.0 - uCorner), 0.0);
        float cornerDist = length(overCorner) / max(uCorner, 0.0001);
        float screenMask = 1.0 - smoothstep(0.75, 1.0, cornerDist);
        screenMask *= smoothstep(0.0, 0.006, uv.x) * (1.0 - smoothstep(0.994, 1.0, uv.x));
        screenMask *= smoothstep(0.0, 0.006, uv.y) * (1.0 - smoothstep(0.994, 1.0, uv.y));
        color *= screenMask;

        gl_FragColor = vec4(color, 1.0);
    }
`;

// Ohnutí HTML rozhraní.
// SVG filtr by uměl ohnout i samotné písmo, ale posouvá pouze vykreslení — klikací
// plocha zůstane na původním místě, takže by se u rohů tlačítka kreslila jinde,
// než kam jdou zmáčknout. Proto se místo toho posouvají celé prvky podle stejné
// křivky jako obraz: CSS posun hitbox bere s sebou, takže ovládání zůstane přesné.
export function createUiWarp(curvature) {
    const items = [];
    let enabled = false;

    function layout(el) {
        // Prvek může mít vlastní posun (třeba vystředění translateX(-50%)),
        // takže se ohnutí přidává k němu, ne místo něj.
        const base = el.dataset.warpBaseTransform || '';
        el.style.transform = base;
        if (!enabled) return;

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return; // skrytý prvek

        const width = window.innerWidth;
        const height = window.innerHeight;
        const cx = ((rect.left + rect.width / 2) / width) * 2 - 1;
        const cy = ((rect.top + rect.height / 2) / height) * 2 - 1;

        const bendX = Math.abs(cy) * curvature;
        const bendY = Math.abs(cx) * curvature;
        const dx = -cx * bendX * bendX * (width / 2);
        const dy = -cy * bendY * bendY * (height / 2);

        el.style.transform = `${base} translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`.trim();
    }

    return {
        register(el) {
            el.dataset.warpBaseTransform = el.style.transform || '';
            items.push(el);
            layout(el);
        },
        refresh() { items.forEach(layout); },
        setEnabled(on) { enabled = on; items.forEach(layout); }
    };
}

export function createCrtPipeline(renderer, options = {}) {
    const state = {
        enabled: options.enabled !== false,
        pixelScale: options.pixelScale || 3
    };

    const renderTarget = new THREE.WebGLRenderTarget(1, 1, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: true
    });

    const material = new THREE.ShaderMaterial({
        uniforms: {
            tDiffuse: { value: renderTarget.texture },
            uResolution: { value: new THREE.Vector2(1, 1) },
            uCurvature: { value: options.curvature ?? 0.32 },
            uScanline: { value: options.scanline ?? 0.10 },
            uAberration: { value: options.aberration ?? 0.4 },
            uMask: { value: options.mask ?? 0.035 },
            uBrightness: { value: options.brightness ?? 1.25 },
            uCorner: { value: options.corner ?? 0.09 }
        },
        vertexShader,
        fragmentShader,
        depthTest: false,
        depthWrite: false
    });

    const quadScene = new THREE.Scene();
    quadScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
    const quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    function resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);

        const lowWidth = Math.max(160, Math.floor(width / state.pixelScale));
        const lowHeight = Math.max(120, Math.floor(height / state.pixelScale));
        renderTarget.setSize(lowWidth, lowHeight);
        material.uniforms.uResolution.value.set(lowWidth, lowHeight);
    }

    function render(scene, camera) {
        if (!state.enabled) {
            renderer.setRenderTarget(null);
            renderer.render(scene, camera);
            return;
        }
        renderer.setRenderTarget(renderTarget);
        renderer.render(scene, camera);
        renderer.setRenderTarget(null);
        renderer.render(quadScene, quadCamera);
    }

    function setEnabled(enabled) {
        state.enabled = enabled;
        // bez CRT se renderuje přímo na obrazovku, takže je potřeba plné rozlišení
        renderer.setPixelRatio(enabled ? 1 : Math.min(window.devicePixelRatio, 2));
        resize();
    }

    function setPixelScale(scale) {
        state.pixelScale = scale;
        resize();
    }

    setEnabled(state.enabled);

    return { render, resize, setEnabled, setPixelScale, isEnabled: () => state.enabled };
}
