import { GUI } from 'dat.gui'
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  NoToneMapping,
  PerspectiveCamera,
  Points,
  ReinhardToneMapping,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import fragmentShader from './fragmentShader.glsl'
import vertexShader from './vertexShader.glsl'
import presets from './presets'

const params = {
  // Effects
  bloom: true,
  bloomStrength: 1.5,
  bloomRadius: 0.75,
  bloomThreshold: 0,
  bloomExposure: 0.75,
  afterImage: false,
  afterImageDamp: 0.75,
  // Random init
  initParticleSize: 1000,
  initPositionRange: 1000,
  initSpeedRange: 15,
  initWeightRange: 10,
  saturation: 1,
  luminance: 0.5,
  // Simulation params
  gravitationalConstant: 6.67, // * 1e-11
  simulationSpeed: 0.5, // * 1e19 s
  collisionBase: 100,
  collisionScale: 100,
  escapeDistance: 10000,
}

const renderer = new WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = ReinhardToneMapping
document.body.appendChild(renderer.domElement)

const origin = new Vector3()
const scene = new Scene()

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  20000
)
camera.position.set(0, 0, 2000)
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 10000

const composer = new EffectComposer(renderer)

const renderScene = new RenderPass(scene, camera)
composer.addPass(renderScene)

const afterImagePass = new AfterimagePass()
afterImagePass.uniforms.damp.value = params.afterImageDamp
if (params.afterImage) {
  composer.addPass(afterImagePass)
}

const bloomPass = new UnrealBloomPass(
  new Vector2(window.innerWidth, window.innerHeight),
  params.bloomStrength,
  params.bloomRadius,
  params.bloomThreshold
)
renderer.toneMappingExposure = params.bloomExposure

if (params.bloom) {
  composer.addPass(bloomPass)
}

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  render()
}

function render() {
  // Array(10).fill().forEach(simulate)
  update(simulate())
  composer.render()
}

// let orbs = [
//   {
//     color: new Color(1, 0, 0),
//     weight: 10,
//     position: new Vector3(100, 100, 0),
//     speed: new Vector3(),
//     acceleration: new Vector3(),
//   },
//   {
//     color: new Color(0, 1, 0),
//     weight: 500,
//     position: new Vector3(0, 100, 100),
//     speed: new Vector3(),
//     acceleration: new Vector3(),
//   },
//   {
//     color: new Color(0, 0, 1),
//     weight: 25,
//     position: new Vector3(100, 0, 100),
//     speed: new Vector3(),
//     acceleration: new Vector3(),
//   },
// ]
// const target = {}
function collide([orb, otherOrb]) {
  return {
    color: orb.color.lerp(
      otherOrb.color,
      otherOrb.weight / (orb.weight + otherOrb.weight)
    ),
    weight: orb.weight + otherOrb.weight,
    position: orb.weight > otherOrb.weight ? orb.position : otherOrb.position,
    speed: new Vector3().addVectors(
      orb.speed.multiplyScalar(orb.weight / (orb.weight + otherOrb.weight)),
      otherOrb.speed.multiplyScalar(
        otherOrb.weight / (orb.weight + otherOrb.weight)
      )
    ),
    acceleration: new Vector3(),
  }
}
let geometry, orbs

function initOrbs() {
  orbs = new Array(params.initParticleSize).fill().map(() => ({
    color: new Color().setHSL(
      Math.random(),
      params.saturation,
      params.luminance
    ),
    // weight 10^31 kg
    weight: Math.random() * params.initWeightRange,
    // distance 10^16 m
    position: new Vector3(
      params.initPositionRange / 2 - Math.random() * params.initPositionRange,
      params.initPositionRange / 2 - Math.random() * params.initPositionRange,
      params.initPositionRange / 2 - Math.random() * params.initPositionRange
    ),
    speed: new Vector3(
      params.initSpeedRange / 2 - Math.random() * params.initSpeedRange,
      params.initSpeedRange / 2 - Math.random() * params.initSpeedRange,
      params.initSpeedRange / 2 - Math.random() * params.initSpeedRange
    ),
    acceleration: new Vector3(),
  }))
}

function init() {
  initOrbs()
  geometry = new BufferGeometry()
  const positions = new Float32Array(orbs.length * 3)
  const scales = new Float32Array(orbs.length)
  const colors = new Float32Array(orbs.length * 3)
  geometry.setDrawRange(0, orbs.length)
  orbs.forEach(({ position, weight, color }, i) => {
    positions[i * 3] = position.x
    positions[i * 3 + 1] = position.y
    positions[i * 3 + 2] = position.z
    scales[i] = 50 * Math.cbrt(weight)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  })

  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  geometry.setAttribute('scale', new BufferAttribute(scales, 1))
  geometry.setAttribute('color', new BufferAttribute(colors, 3))

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    vertexColors: true,
  })

  const particles = new Points(geometry, material)
  scene.add(particles)
}

const u = new Vector3()

function simulate() {
  var i,
    n,
    j,
    updated = false
  const dt = params.simulationSpeed
  const G = params.gravitationalConstant
  const cb = params.collisionBase
  const cs = params.collisionScale

  const collisions = []
  for (i = 0, n = orbs.length; i < n; i++) {
    const orb = orbs[i]
    orb.speed.addScaledVector(orb.acceleration, dt * 0.5)
    orb.position.addScaledVector(orb.speed, dt)
  }
  for (i = 0, n = orbs.length; i < n; i++) {
    const orb = orbs[i]
    orb.acceleration.set(0, 0, 0)
    for (j = 0; j < i; j++) {
      const otherOrb = orbs[j]

      u.subVectors(otherOrb.position, orb.position)
      const distance2 = u.lengthSq()

      if (
        distance2 < Math.max(cb, cs * Math.cbrt(orb.weight * otherOrb.weight))
      ) {
        if (!collisions.map(([, otherOrb]) => otherOrb).includes(orb)) {
          collisions.push([orb, otherOrb])
        }
        break
      }
      u.normalize().multiplyScalar(
        // 1e-11 * (1e31)^2 / (1e16)^2 -> 62 - 32 - 11 -> -19 -> dt 1e19 s
        G / distance2
      )
      orb.acceleration.addScaledVector(u, otherOrb.weight)
      otherOrb.acceleration.addScaledVector(u, -orb.weight)
    }
  }

  if (collisions.length) {
    const newOrbs = collisions.map(collide)
    const deletedOrbs = collisions.flat()

    orbs = [...orbs.filter(orb => !deletedOrbs.includes(orb)), ...newOrbs]
    updated = true
    geometry.setDrawRange(0, orbs.length)
  }

  const escaped = []
  for (i = 0, n = orbs.length; i < n; i++) {
    const orb = orbs[i]
    orb.speed.addScaledVector(orb.acceleration, dt * 0.5)

    if (orb.position.distanceTo(origin) > params.escapeDistance) {
      escaped.push(orb)
    }
  }

  if (escaped.length) {
    orbs = orbs.filter(orb => !escaped.includes(orb))
    updated = true
    geometry.setDrawRange(0, orbs.length)
  }
  return updated
}

function update(updated) {
  for (var i = 0, n = orbs.length; i < n; i++) {
    const orb = orbs[i]
    geometry.attributes.position.setXYZ(
      i,
      orb.position.x,
      orb.position.y,
      orb.position.z
    )

    if (updated) {
      geometry.attributes.scale.setX(i, 50 * Math.cbrt(orb.weight))
      geometry.attributes.color.setXYZ(i, orb.color.r, orb.color.g, orb.color.b)
    }
  }
  geometry.attributes.position.needsUpdate = true
  geometry.attributes.scale.needsUpdate = updated
  geometry.attributes.color.needsUpdate = updated
}

const gui = new GUI({
  load: presets,
  preset: decodeURIComponent(location.hash.replace(/^#/, '')) || 'Tesseract',
})
const fx = gui.addFolder('Render fx')
fx.add(params, 'bloom').onChange(on => {
  if (on && !composer.passes.includes(bloomPass)) {
    renderer.toneMapping = ReinhardToneMapping
    composer.addPass(bloomPass)
  }
  if (!on && composer.passes.includes(bloomPass)) {
    renderer.toneMapping = NoToneMapping
    composer.removePass(bloomPass)
  }
})
fx.add(params, 'bloomStrength', 0, 3).onChange(v => (bloomPass.strength = v))
fx.add(params, 'bloomRadius', 0, 1).onChange(v => (bloomPass.radius = v))
fx.add(params, 'bloomThreshold', 0, 1).onChange(v => (bloomPass.threshold = v))
fx.add(params, 'bloomExposure', 0.001, 128).onChange(
  v => (renderer.toneMappingExposure = v)
)
fx.add(params, 'afterImage').onChange(on => {
  if (on && !composer.passes.includes(afterImagePass)) {
    if (composer.passes.includes(bloomPass)) {
      composer.insertPass(afterImagePass, composer.passes.indexOf(bloomPass))
    } else {
      composer.addPass(afterImagePass)
    }
  }
  if (!on && composer.passes.includes(afterImagePass)) {
    composer.removePass(afterImagePass)
  }
})
fx.add(params, 'afterImageDamp', 0, 1).onChange(
  v => (afterImagePass.uniforms.damp.value = v)
)
const initParams = gui.addFolder('Initialization')
initParams.add(params, 'initParticleSize', 0, 5000, 1)
initParams.add(params, 'initPositionRange', 0, 5000, 1)
initParams.add(params, 'initSpeedRange', 0, 100)
initParams.add(params, 'initWeightRange', 0, 100)
initParams.add(params, 'saturation', 0, 1)
initParams.add(params, 'luminance', 0, 1)
initParams.add(
  {
    restart: () => {
      scene.clear()
      init()
    },
  },
  'restart'
)

initParams.open()
const simulation = gui.addFolder('Simulation')
simulation.add(params, 'gravitationalConstant', 0.0, 25.0, 0.1)
simulation.add(params, 'simulationSpeed', 0.0, 10.0, 0.01)
simulation.add(params, 'collisionBase', 0, 1000, 1)
simulation.add(params, 'collisionScale', 0, 1000, 1)
simulation.add(params, 'escapeDistance', 0, 100000, 1)
simulation.open()

gui.remember(params)
gui.revert()
gui.__preset_select.addEventListener('change', ({ target: { value } }) => {
  location.hash = `#${encodeURIComponent(value)}`
})
window.addEventListener('hashchange', () => {
  gui.preset =
    decodeURIComponent(location.hash.replace(/^#/, '')) || 'Tesseract'
  gui.revert()
})

init()
requestAnimationFrame(animate)
