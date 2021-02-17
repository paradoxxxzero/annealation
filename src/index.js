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
import wasmInit, { Annealation, wasm_memory } from 'wasm'
import Stats from 'stats.js'

const colorModes = {
  Temperature: 0.5,
  Rainbow: 1,
  Grayscale: 0.25,
  White: 0,
  ColorCoded: 0.75,
}

const stats = new Stats()

const getPreset = () =>
  decodeURIComponent(location.hash.replace(/^#/, '')) || presets.preset
const preset = getPreset()

const params = { ...presets.remembered[preset][0] }

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

function animate() {
  requestAnimationFrame(animate)
  stats.update()
  render()
}

function render() {
  const {
    simulationSpeed: dt,
    gravitationalConstant: G,
    collisions,
    softening,
    collisionThreshold,
    escapeDistance,
  } = params

  annealation.frog_leap(dt)
  const newLen = annealation.simulate(
    G,
    softening,
    collisions,
    collisionThreshold,
    escapeDistance
  )
  annealation.frog_drop(dt)
  if (newLen !== particles.geometry.drawRange.count) {
    particles.geometry.setDrawRange(0, newLen)
    particles.geometry.attributes.temperature.needsUpdate = true
    particles.geometry.attributes.mass.needsUpdate = true
  }
  particles.geometry.attributes.position.needsUpdate = true
  controls.update()
  composer.render()
}

// function collide([orb, otherOrb]) {
//   return {
//     color: orb.color.lerp(
//       otherOrb.color,
//       otherOrb.mass / (orb.mass + otherOrb.mass)
//     ),
//     mass: orb.mass + otherOrb.mass,
//     position: orb.mass > otherOrb.mass ? orb.position : otherOrb.position,
//     speed: new Vector3().addVectors(
//       orb.speed.multiplyScalar(orb.mass / (orb.mass + otherOrb.mass)),
//       otherOrb.speed.multiplyScalar(otherOrb.mass / (orb.mass + otherOrb.mass))
//     ),
//   }
// }
let particles, annealation

function init() {
  const orbs = configurations[params.configuration](params)

  annealation = Annealation.new(orbs.length)
  const { buffer } = wasm_memory()
  const positions = new Float32Array(
    buffer,
    annealation.positions_ptr(),
    3 * orbs.length
  )
  const speeds = new Float32Array(
    buffer,
    annealation.speeds_ptr(),
    3 * orbs.length
  )
  const masses = new Float32Array(buffer, annealation.masses_ptr(), orbs.length)
  const temperatures = new Float32Array(
    buffer,
    annealation.temperatures_ptr(),
    orbs.length * 3
  )

  const geometry = new BufferGeometry()
  geometry.setDrawRange(0, orbs.length)
  orbs.forEach(({ position, speed, mass, temperature }, i) => {
    positions[i * 3] = position.x
    positions[i * 3 + 1] = position.y
    positions[i * 3 + 2] = position.z
    speeds[i * 3] = speed.x
    speeds[i * 3 + 1] = speed.y
    speeds[i * 3 + 2] = speed.z
    masses[i] = mass
    temperatures[i] = temperature
  })

  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('mass', new BufferAttribute(masses, 1))
  geometry.setAttribute('temperature', new BufferAttribute(temperatures, 1))

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      scale: { value: params.scale },
      blackHoleMassThreshold: { value: params.blackHoleMassThreshold },
      mode: { value: colorModes[params.colorMode] },
    },
  })

  particles = new Points(geometry, material)
  scene.add(particles)
}

// const u = new Vector3()

// function simulate() {
//   var i,
//     n,
//     j,
//     updated = false

//   const {
//     simulationSpeed: dt,
//     gravitationalConstant: G,
//     collisions,
//     softening,
//     collisionScale,
//   } = params

//   const collided = []
//   for (i = 0, n = orbs.length; i < n; i++) {
//     const orb = orbs[i]
//     orb.speed.addScaledVector(orb.acceleration, dt * 0.5)
//     orb.position.addScaledVector(orb.speed, dt)
//   }
//   for (i = 0, n = orbs.length; i < n; i++) {
//     const orb = orbs[i]
//     orb.acceleration.set(0, 0, 0)
//     for (j = 0; j < i; j++) {
//       const otherOrb = orbs[j]

//       u.subVectors(otherOrb.position, orb.position)
//       let distance2 = u.lengthSq()
//       if (collisions) {
//         if (
//           distance2 <
//           Math.max(
//             softening,
//             collisionScale * Math.cbrt(orb.mass * otherOrb.mass)
//           )
//         ) {
//           if (!collided.map(([, otherOrb]) => otherOrb).includes(orb)) {
//             collided.push([orb, otherOrb])
//           }
//           break
//         }
//       } else {
//         distance2 += softening
//       }

//       // a = G * M / d²
//       u.normalize().multiplyScalar(G / distance2)
//       orb.acceleration.addScaledVector(u, otherOrb.mass)
//       otherOrb.acceleration.addScaledVector(u, -orb.mass)
//     }
//   }

//   if (collided.length) {
//     const newOrbs = collided.map(collide)
//     const deletedOrbs = collided.flat()

//     orbs = [...orbs.filter(orb => !deletedOrbs.includes(orb)), ...newOrbs]
//     updated = true
//     geometry.setDrawRange(0, orbs.length)
//   }

//   const escaped = []
//   for (i = 0, n = orbs.length; i < n; i++) {
//     const orb = orbs[i]
//     orb.speed.addScaledVector(orb.acceleration, dt * 0.5)

//     if (orb.position.distanceTo(origin) > params.escapeDistance) {
//       escaped.push(orb)
//     }
//   }
//   if (escaped.length) {
//     orbs = orbs.filter(orb => !escaped.includes(orb))
//     updated = true
//     geometry.setDrawRange(0, orbs.length)
//   }
//   return updated
// }

// function update(updated) {
//   const { scale, blackHoleMassThreshold } = params
//   for (var i = 0, n = orbs.length; i < n; i++) {
//     const orb = orbs[i]
//     // geometry.attributes.position.setXYZ(
//     //   i,
//     //   orb.position.x,
//     //   orb.position.y,
//     //   orb.position.z
//     // )

//     if (updated) {
//       const blackHole = orb.mass >= blackHoleMassThreshold

//       geometry.attributes.scale.setX(
//         i,
//         scale * (blackHole ? Math.pow(orb.mass, 0.1) : Math.cbrt(orb.mass))
//       )
//       geometry.attributes.color.setXYZ(
//         i,
//         blackHole ? 0 : orb.color.r,
//         blackHole ? 0 : orb.color.g,
//         blackHole ? 0 : orb.color.b
//       )
//     }
//   }
//   // geometry.attributes.position.needsUpdate = true
//   geometry.attributes.scale.needsUpdate = updated
//   geometry.attributes.color.needsUpdate = updated
// }

function restart() {
  scene.clear()
  annealation.free()
  init()
}

function initGUI() {
  const gui = new GUI({
    load: presets,
    preset,
  })

  const fx = gui.addFolder('Render fx')
  fx.add(params, 'autoRotate').onChange(on => (controls.autoRotate = on))
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
  config.add(params, 'number', 0, 5000, 1)
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
const wasmPromise = wasmInit()

wasmPromise.then(() => {
  init()
  initGUI()
  requestAnimationFrame(animate)
})
