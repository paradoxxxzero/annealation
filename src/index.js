import { GUI } from 'dat.gui'
import {
  BufferAttribute,
  BufferGeometry,
  NoToneMapping,
  PerspectiveCamera,
  Points,
  ReinhardToneMapping,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
  DynamicDrawUsage,
  Raycaster,
  Vector3,
} from 'three'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'
import * as configurations from './configurations'
import fragmentShader from './fragmentShader.glsl'
import vertexShader from './vertexShader.glsl'
import presets from './presets'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import wasmInit, {
  P2PRustGravity,
  FMMRustGravity,
  TreeRustGravity,
  RustNoGravity,
  wasm_memory,
} from 'wasm'
import Stats from 'stats.js'
import P2PGravity from './gravity/p2p'
import FMMGravity from './gravity/fmm'
import NoGravity from './gravity/none'
import P2PThreadedGravity from './gravity/p2p-threaded'
import P2PThreadedSABGravity from './gravity/p2p-threaded-sab'
import { massToTemperature } from './helpers'
let raf = null
let newOrb = null
const colorModes = {
  Temperature: 0.5,
  Rainbow: 1,
  Grayscale: 0.25,
  White: 0,
  ColorCoded: 0.75,
}
let particles, gravity
const backends = {
  js_p2p: P2PGravity,
  rust_p2p: P2PRustGravity,
  js_p2p_threaded: P2PThreadedGravity,
  js_p2p_sab: P2PThreadedSABGravity,
  js_fmm: FMMGravity,
  rust_fmm: FMMRustGravity,
  rust_tree: TreeRustGravity,
  js_none: NoGravity,
  rust_none: RustNoGravity,
}

const fallbacks = {
  js_p2p_sab: 'js_p2p_threaded',
}

if (typeof SharedArrayBuffer === 'undefined') {
  delete backends.js_p2p_threaded_sab
}

const stats = new Stats()

const getPreset = () =>
  decodeURIComponent(location.hash.replace(/^#/, '')) || presets.preset
const preset = getPreset()

const params = new Proxy(
  { ...presets.remembered[preset][0] },
  {
    set(target, key, value) {
      target[key] = value
      gravity?.params_change(target, key, value)
      return true
    },
  }
)

const renderer = new WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = ReinhardToneMapping
document.body.appendChild(renderer.domElement)
document.body.appendChild(stats.dom)

// const origin = new Vector3()
const scene = new Scene()

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  20000
)
camera.position.set(1500, 1500, 1500)
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 20000

controls.enableDamping = true
controls.dampingFactor = 0.05

const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const afterImagePass = new AfterimagePass()
afterImagePass.uniforms.damp.value = params.afterImageDamp
afterImagePass.enabled = params.afterImage
composer.addPass(afterImagePass)

const fxaaPass = new ShaderPass(FXAAShader)
const pixelRatio = renderer.getPixelRatio()

fxaaPass.material.uniforms.resolution.value.x =
  1 / (window.innerWidth * pixelRatio)
fxaaPass.material.uniforms.resolution.value.y =
  1 / (window.innerHeight * pixelRatio)
fxaaPass.enabled = params.fxaa
composer.addPass(fxaaPass)

const bloomPass = new UnrealBloomPass(
  new Vector2(window.innerWidth, window.innerHeight),
  params.bloomStrength,
  params.bloomRadius,
  params.bloomThreshold
)
renderer.toneMappingExposure = params.bloomExposure

bloomPass.enabled = params.bloom
composer.addPass(bloomPass)

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)

  const pixelRatio = renderer.getPixelRatio()

  fxaaPass.material.uniforms.resolution.value.x =
    1 / (window.innerWidth * pixelRatio)
  fxaaPass.material.uniforms.resolution.value.y =
    1 / (window.innerHeight * pixelRatio)
}

async function animate() {
  stats.update()
  await render()
  raf = requestAnimationFrame(animate)
}

async function render() {
  gravity.frog_leap()
  const newLen = await gravity.simulate()
  gravity.frog_drop()

  if (newLen !== particles.geometry.drawRange.count) {
    particles.geometry.setDrawRange(0, newLen)
    particles.geometry.attributes.temperature.needsUpdate = true
    particles.geometry.attributes.mass.needsUpdate = true
  }
  particles.geometry.attributes.position.needsUpdate = true
  controls.update()

  if (newOrb !== null) {
    newOrb.iter !== 0 && gravity.shrink(1)
    newOrb.iter++
    raycaster.setFromCamera(mouse, camera)
    const position = new Vector3()
    position.copy(raycaster.ray.origin)
    position.addScaledVector(raycaster.ray.direction, 1000)

    const speed = new Vector3()
    speed.copy(raycaster.ray.direction)
    speed.multiplyScalar(newOrb.speed)
    const mass = Math.pow(newOrb.iter / 50, 4) * params.mass
    gravity.grow([
      {
        position,
        speed,
        mass: mass,
        temperature: massToTemperature(mass),
      },
    ])
    particles.geometry.attributes.temperature.needsUpdate = true
    particles.geometry.attributes.mass.needsUpdate = true
  }
  composer.render()
}

function init() {
  const {
    backend,
    configuration,
    scale,
    blackHoleMassThreshold,
    colorMode,
  } = params
  const orbs = configurations[configuration](params)
  let positions, masses, temperatures
  const Backend = backends[backend] || backends[fallbacks[backend]]
  const allocLength = orbs.length + 1000

  gravity = new Backend(orbs, params, allocLength)

  if (backend.startsWith('rust')) {
    const { buffer } = wasm_memory()
    positions = new Float32Array(
      buffer,
      gravity.positions_ptr(),
      3 * allocLength
    )
    masses = new Float32Array(buffer, gravity.masses_ptr(), allocLength)
    temperatures = new Float32Array(
      buffer,
      gravity.temperatures_ptr(),
      allocLength
    )
    // gravity.precalc(softening)
  } else {
    ;({ positions, masses, temperatures } = gravity)
  }

  const geometry = new BufferGeometry()
  geometry.setDrawRange(0, orbs.length)
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
  )
  geometry.setAttribute(
    'mass',
    new BufferAttribute(masses, 1).setUsage(DynamicDrawUsage)
  )
  geometry.setAttribute(
    'temperature',
    new BufferAttribute(temperatures, 1).setUsage(DynamicDrawUsage)
  )
  geometry.setDrawRange(0, orbs.length)

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      scale: { value: scale },
      blackHoleMassThreshold: { value: blackHoleMassThreshold },
      mode: { value: colorModes[colorMode] },
    },
  })

  particles = new Points(geometry, material)
  scene.add(particles)
}

function restart() {
  cancelAnimationFrame(raf)
  scene.clear()
  gravity.free()
  init()
  raf = requestAnimationFrame(animate)
}

function initGUI() {
  const gui = new GUI({
    load: presets,
    preset,
  })
  gui.add(params, 'backend', Object.keys(backends)).onChange(restart)
  gui.add(params, 'resolution', 1, 9, 1).onChange(restart)
  gui.add(params, 'threads', 1, 128, 1).onChange(restart)
  const fx = gui.addFolder('Render fx')
  fx.add(params, 'autoRotate')
    .onChange(on => (controls.autoRotate = on))
    .listen()
  fx.add(params, 'fxaa').onChange(on => (fxaaPass.enabled = on))
  fx.add(params, 'bloom').onChange(on => {
    bloomPass.enabled = on
    renderer.toneMapping = on ? ReinhardToneMapping : NoToneMapping
  })
  fx.add(params, 'bloomStrength', 0, 10, 0.01).onChange(
    v => (bloomPass.strength = v)
  )
  fx.add(params, 'bloomRadius', 0, 1, 0.01).onChange(
    v => (bloomPass.radius = v)
  )
  fx.add(params, 'bloomThreshold', 0, 1, 0.01).onChange(
    v => (bloomPass.threshold = v)
  )
  fx.add(params, 'bloomExposure', 0.001, 128).onChange(
    v => (renderer.toneMappingExposure = v)
  )
  fx.add(params, 'afterImage').onChange(on => (afterImagePass.enabled = on))
  fx.add(params, 'afterImageDamp', 0, 1).onChange(
    v => (afterImagePass.uniforms.damp.value = v)
  )

  const config = gui.addFolder('Configuration')
  config.add(params, 'configuration', Object.keys(configurations))
  config.add(params, 'number')
  config.add(params, 'range', 0, 5000, 1).name('range (1e15m)')
  config.add(params, 'speed', 0, 1000).name('speed (1e2m.s)')
  config.add(params, 'mass', 0, 1000).name('mass (1e30kg)')
  config.add(params, 'blackHoleMass', 0, 1000000, 1000)
  config
    .add(params, 'scale', 0, 1000)
    .onChange(v => (particles.material.uniforms.scale.value = v))
  config
    .add(params, 'colorMode', Object.keys(colorModes))
    .onChange(v => (particles.material.uniforms.mode.value = colorModes[v]))
  config.add(
    {
      restart,
    },
    'restart'
  )

  config.open()
  const simulation = gui.addFolder('Simulation')
  simulation.add(params, 'gravitationalConstant', 0.0, 25.0, 0.01)
  // // (a = 1e-11 * 1e30 / 1e(15 * 2) = 1e-11 m.s-2)
  // // dp = a * dt² -> dt = sqrt(dp / a) = sqrt(1e15 / 1e-11) = 1e13s
  simulation
    .add(params, 'simulationSpeed', 0.0, 100.0, 0.001)
    .name('speed (1e13s)')
  simulation.add(params, 'softening', 0, 1000, 1)
  simulation.add(params, 'collisions')
  simulation.add(params, 'collisionThreshold', 0, 1000, 1)
  simulation.add(params, 'escapeDistance', 0, 100000, 1)
  simulation
    .add(params, 'blackHoleMassThreshold', 0, 2000000, 1)
    .onChange(
      v => (particles.material.uniforms.blackHoleMassThreshold.value = v)
    )
  simulation.open()
  gui.add(
    {
      'Go 4d': () => {
        window.open('https://paradoxxxzero.github.io/katannealation')
      },
    },
    'Go 4d'
  )
  gui.remember(params)
  gui.revert()
  gui.__preset_select.addEventListener('change', ({ target: { value } }) => {
    location.hash = `#${encodeURIComponent(value)}`
  })
  window.addEventListener('hashchange', () => {
    gui.preset = getPreset()
    restart()
  })
}

const raycaster = new Raycaster()
const mouse = new Vector2()
let delay = null
window.addEventListener('pointerdown', function (event) {
  mouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  )
  const activateNewOrb = () => {
    params.autoRotate = false
    controls.autoRotate = false
    delay = null
    newOrb = {
      iter: 0,
      speed: 20 * (1 + event.button),
    }
  }
  if (event.shiftKey) {
    activateNewOrb()
  } else {
    delay = setTimeout(activateNewOrb, 125)
  }
})

window.addEventListener('pointermove', function (event) {
  if (delay) {
    clearTimeout(delay)
    delay = null
  } else if (newOrb !== null) {
    mouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    )
  }
})

window.addEventListener('pointerup', function () {
  if (delay) {
    clearTimeout(delay)
    delay = null
  }
  newOrb = null
})

const wasmPromise = wasmInit('./dist/wasm/index_bg.wasm')

wasmPromise.then(() => {
  init()
  initGUI()
  raf = requestAnimationFrame(animate)
})
