const fs = require('fs');

let content = fs.readFileSync('assets/core/index.js', 'utf8');

// 1. Add the triggerCardFlight function
const flightCode = `
// Flight Transition Code
let flightCanvas = null;
let flightRenderer = null;
let flightScene = null;
let flightCamera = null;
let THREE = null;

async function initFlightRenderer() {
  if (flightRenderer) return;
  if (!THREE) THREE = await import('three');
  
  flightCanvas = document.createElement('canvas');
  flightCanvas.id = 'flightCanvas';
  flightCanvas.style.position = 'fixed';
  flightCanvas.style.inset = '0';
  flightCanvas.style.width = '100vw';
  flightCanvas.style.height = '100vh';
  flightCanvas.style.pointerEvents = 'none'; // Click through
  flightCanvas.style.zIndex = '99999'; // Ensure it's on top of everything
  flightCanvas.style.display = 'none';
  document.body.appendChild(flightCanvas);

  flightRenderer = new THREE.WebGLRenderer({
    canvas: flightCanvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  flightRenderer.outputColorSpace = THREE.SRGBColorSpace;
  flightRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  flightRenderer.setSize(window.innerWidth, window.innerHeight);

  flightScene = new THREE.Scene();
  flightCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  flightCamera.position.set(0, 0, 10);
  flightCamera.lookAt(0, 0, 0);

  window.addEventListener('resize', () => {
    if (!flightRenderer) return;
    flightRenderer.setSize(window.innerWidth, window.innerHeight);
    flightCamera.aspect = window.innerWidth / window.innerHeight;
    flightCamera.updateProjectionMatrix();
  });
}

const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

async function triggerCardFlight(rect, imageUrl, onCompleteCallback) {
  await initFlightRenderer();
  
  if (!rect || rect.width === 0 || rect.height === 0) {
    rect = { left: window.innerWidth * 0.35, top: window.innerHeight * 0.38, width: 380, height: 237 };
  }

  const vHeight = 2.0 * Math.tan(THREE.MathUtils.degToRad(flightCamera.fov / 2)) * flightCamera.position.z;
  const unitsPerPx = vHeight / window.innerHeight;

  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const startX = (cx - window.innerWidth / 2) * unitsPerPx;
  const startY = -(cy - window.innerHeight / 2) * unitsPerPx;
  const startW = Math.max(rect.width * unitsPerPx, 0.8);
  const startH = Math.max(rect.height * unitsPerPx, 0.5);

  const targetWidthPx = Math.min(window.innerWidth * 0.76, 1100);
  const targetHeightPx = targetWidthPx * (10 / 16);
  const targetYPx = Math.max(window.innerHeight * 0.12, 60) + targetHeightPx / 2;
  const targetX = 0;
  const targetY = -(targetYPx - window.innerHeight / 2) * unitsPerPx;
  const targetW = targetWidthPx * unitsPerPx;
  const targetH = targetHeightPx * unitsPerPx;

  const tex = new THREE.TextureLoader().load(imageUrl);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  
  const SRGB_CHUNK = \`vec3 linearToSRGB(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }\`;

  const flightVertex = \`
    uniform float uSailStrength;
    uniform float uTwistStrength;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float x = uv.x * 2.0 - 1.0;
      float y = uv.y * 2.0 - 1.0;
      float centerArch = 1.0 - x * x;
      float verticalSoftness = 0.72 + 0.28 * (1.0 - y * y);
      pos.z += centerArch * verticalSoftness * uSailStrength;
      pos.z += x * y * uTwistStrength;
      pos.x += y * uTwistStrength * 0.08;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  \`;

  const flightFragment = \`
    uniform sampler2D uTexture;
    uniform float uOpacity;
    varying vec2 vUv;
    \${SRGB_CHUNK}
    void main() {
      vec4 col = texture2D(uTexture, vUv);
      gl_FragColor = vec4(linearToSRGB(col.rgb), col.a * uOpacity);
    }
  \`;

  const geo = new THREE.PlaneGeometry(1, 1, 48, 32);
  const mat = new THREE.ShaderMaterial({
    vertexShader: flightVertex,
    fragmentShader: flightFragment,
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      uTexture: { value: tex },
      uOpacity: { value: 1.0 },
      uSailStrength: { value: 0.0 },
      uTwistStrength: { value: 0.0 }
    }
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.scale.set(startW, startH, 1.0);

  const startPos = new THREE.Vector3(startX, startY, 0);
  const targetPos = new THREE.Vector3(targetX, targetY, 1.6);
  const side = startX >= 0 ? 1 : -1;
  const controlA = new THREE.Vector3(startX * 0.75, startY + 0.6, 0.9);
  const controlB = new THREE.Vector3(targetX + side * 0.35, targetY - 0.15, 2.1);
  const curve = new THREE.CubicBezierCurve3(startPos, controlA, controlB, targetPos);

  const startQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.08, side * -0.18, side * 0.05));
  const targetQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
  const _q = new THREE.Quaternion();

  flightScene.clear();
  flightScene.add(mesh);
  flightCanvas.style.display = 'block';
  flightCanvas.style.opacity = '1';

  const startTime = performance.now();
  const duration = 850;

  function animateFlight(now) {
    const elapsed = now - startTime;
    const progress = THREE.MathUtils.clamp(elapsed / duration, 0, 1);

    const detach = THREE.MathUtils.clamp((progress - 0.06) / 0.28, 0, 1);
    const travel = THREE.MathUtils.clamp((progress - 0.26) / 0.46, 0, 1);
    const expand = THREE.MathUtils.clamp((progress - 0.72) / 0.28, 0, 1);

    const eDetach = easeInOutCubic(detach);
    const eTravel = easeInOutCubic(travel);
    const eExpand = easeOutCubic(expand);

    curve.getPoint(eTravel, mesh.position);

    const rotT = THREE.MathUtils.clamp(eDetach * 0.3 + eTravel * 0.6 + eExpand * 0.1, 0, 1);
    _q.copy(startQuat).slerp(targetQuat, rotT);
    mesh.quaternion.copy(_q);

    const curW = startW + (targetW - startW) * eTravel;
    const curH = startH + (targetH - startH) * eTravel;
    const overshoot = 1.0 + 0.032 * Math.sin(eExpand * Math.PI);
    mesh.scale.set(curW * overshoot, curH * overshoot, 1.0);

    const sail = 0.95 * Math.sin(eTravel * Math.PI) * (1.0 - eExpand * 0.88);
    const twist = (side * 0.32) * Math.sin(Math.min(1.0, eDetach + eTravel * 0.5) * Math.PI) * (1.0 - eExpand);
    mesh.material.uniforms.uSailStrength.value = sail;
    mesh.material.uniforms.uTwistStrength.value = twist;

    flightRenderer.render(flightScene, flightCamera);

    if (progress < 1) {
      requestAnimationFrame(animateFlight);
    } else {
      if (onCompleteCallback) onCompleteCallback();

      let fadeStart = performance.now();
      const fadeDur = 200;
      function fadeOut(fNow) {
        const fElapsed = fNow - fadeStart;
        const fProg = THREE.MathUtils.clamp(fElapsed / fadeDur, 0, 1);
        mesh.material.uniforms.uOpacity.value = 1.0 - fProg;
        flightRenderer.render(flightScene, flightCamera);
        if (fProg < 1) {
          requestAnimationFrame(fadeOut);
        } else {
          flightCanvas.style.display = 'none';
          flightScene.remove(mesh);
          geo.dispose();
          mat.dispose();
        }
      }
      requestAnimationFrame(fadeOut);
    }
  }

  requestAnimationFrame(animateFlight);
}
// End Flight Transition Code

`;

content = flightCode + content;

// 2. Patch the onMsg handler
const oldHandler = `
  const onMsg = (evt) => {
    if (evt.data && evt.data.type === 'PROJECT_CLICK') {
      let slug = evt.data.slug;
      if (!slug || slug === 'project') slug = 'case-study-' + Math.floor(Math.random()*1000);
      window.history.pushState({},'', '/work/' + slug);
      setProjectSlug(slug);
      w('project-detail');
    }
  };
`;

const newHandler = `
  const onMsg = (evt) => {
    if (evt.data && evt.data.type === 'PROJECT_CLICK') {
      let slug = evt.data.slug;
      if (!slug || slug === 'project') slug = 'case-study-' + Math.floor(Math.random()*1000);
      
      let rect = evt.data.rect;
      let imageUrl = evt.data.imageUrl || getProjectBySlug(slug).heroImage;
      
      triggerCardFlight(rect, imageUrl, () => {
         window.history.pushState({},'', '/work/' + slug);
         setProjectSlug(slug);
         t('project-detail'); // bypass shader transition
         window.scrollTo({top:0,behavior:"auto"});
      });
    }
  };
`;

// use string replace but handle minified whitespace
const regex = /const\s+onMsg\s*=\s*\(?evt\)?\s*=>\s*\{[\s\S]*?w\('project-detail'\);[\s\S]*?\}\s*;/;

if (regex.test(content)) {
  content = content.replace(regex, newHandler);
  fs.writeFileSync('assets/core/index.js', content);
  console.log('Successfully patched index.js with Flight Transition');
} else {
  console.log('Regex failed to match onMsg');
}
