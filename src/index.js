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
  Vector3,
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

const params = {
  // Effects
  fxaa: true,
  bloom: true,
  bloomStrength: 1.5,
  bloomRadius: 0.75,
  bloomThreshold: 0,
  bloomExposure: 0.75,
  afterImage: false,
  afterImageDamp: 0.75,
  // Configuration
  configuration: 'randomCube',
  number: 1000,
  range: 1000,
  speed: 15,
  mass: 10, // 1e31 kg
  blackHoleMass: 10000, // 1e31 kg
  scale: 50,
  saturation: 1,
  luminance: 0.5,
  // Simulation params
  gravitationalConstant: 6.67, // * 1e-11
  simulationSpeed: 0.5, // * 1e19 s
  collisions: true,
  collisionBase: 100,
  collisionScale: 100,
  escapeDistance: 10000,
  blackHoleMassThreshold: 10000,
}

const renderer = new WebGLRenderer()
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
// camera.up.set(1, 0, 0)
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 10000

const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const fxaaPass = new ShaderPass(FXAAShader)
const pixelRatio = renderer.getPixelRatio()

fxaaPass.material.uniforms.resolution.value.x =
  1 / (window.innerWidth * pixelRatio)
fxaaPass.material.uniforms.resolution.value.y =
  1 / (window.innerHeight * pixelRatio)
fxaaPass.enabled = params.fxaa
composer.addPass(fxaaPass)

const afterImagePass = new AfterimagePass()
afterImagePass.uniforms.damp.value = params.afterImageDamp
afterImagePass.enabled = params.afterImage
composer.addPass(afterImagePass)

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
  render()
}

function render() {
  // Array(10).fill().forEach(simulate)
  update(simulate())
  composer.render()
}

function collide([orb, otherOrb]) {
  return {
    color: orb.color.lerp(
      otherOrb.color,
      otherOrb.mass / (orb.mass + otherOrb.mass)
    ),
    mass: orb.mass + otherOrb.mass,
    position: orb.mass > otherOrb.mass ? orb.position : otherOrb.position,
    speed: new Vector3().addVectors(
      orb.speed.multiplyScalar(orb.mass / (orb.mass + otherOrb.mass)),
      otherOrb.speed.multiplyScalar(otherOrb.mass / (orb.mass + otherOrb.mass))
    ),
    acceleration: new Vector3(),
  }
}
let geometry, orbs

function init() {
  orbs = configurations[params.configuration](params)
  geometry = new BufferGeometry()
  const positions = new Float32Array(orbs.length * 3)
  const scales = new Float32Array(orbs.length)
  const colors = new Float32Array(orbs.length * 3)
  geometry.setDrawRange(0, orbs.length)
  orbs.forEach(({ position, mass, color }, i) => {
    const blackHole = mass >= params.blackHoleMassThreshold
    positions[i * 3] = position.x
    positions[i * 3 + 1] = position.y
    positions[i * 3 + 2] = position.z
    scales[i] =
      params.scale * (blackHole ? Math.pow(mass, 0.1) : Math.cbrt(mass))
    colors[i * 3] = blackHole ? 0 : color.r
    colors[i * 3 + 1] = blackHole ? 0 : color.g
    colors[i * 3 + 2] = blackHole ? 0 : color.b
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

  const {
    simulationSpeed: dt,
    gravitationalConstant: G,
    collisions,
    collisionBase,
    collisionScale,
  } = params

  const collided = []
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
      let distance2 = u.lengthSq()
      if (collisions) {
        if (
          distance2 <
          Math.max(
            collisionBase,
            collisionScale * Math.cbrt(orb.mass * otherOrb.mass)
          )
        ) {
          if (!collided.map(([, otherOrb]) => otherOrb).includes(orb)) {
            collided.push([orb, otherOrb])
          }
          break
        }
      } else {
        distance2 += collisionBase
      }
      u.normalize().multiplyScalar(
        // 1e-11 * (1e31)^2 / (1e16)^2 -> 62 - 32 - 11 -> -19 -> dt 1e19 s
        G / distance2
      )
      orb.acceleration.addScaledVector(u, otherOrb.mass)
      otherOrb.acceleration.addScaledVector(u, -orb.mass)
    }
  }

  if (collided.length) {
    const newOrbs = collided.map(collide)
    const deletedOrbs = collided.flat()

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
  const { scale, blackHoleMassThreshold } = params
  for (var i = 0, n = orbs.length; i < n; i++) {
    const orb = orbs[i]
    geometry.attributes.position.setXYZ(
      i,
      orb.position.x,
      orb.position.y,
      orb.position.z
    )

    if (updated) {
      const blackHole = orb.mass >= blackHoleMassThreshold

      geometry.attributes.scale.setX(
        i,
        scale * (blackHole ? Math.pow(orb.mass, 0.1) : Math.cbrt(orb.mass))
      )
      geometry.attributes.color.setXYZ(
        i,
        blackHole ? 0 : orb.color.r,
        blackHole ? 0 : orb.color.g,
        blackHole ? 0 : orb.color.b
      )
    }
  }
  geometry.attributes.position.needsUpdate = true
  geometry.attributes.scale.needsUpdate = updated
  geometry.attributes.color.needsUpdate = updated
}

function restart() {
  scene.clear()
  init()
}

const gui = new GUI({
  load: presets,
  preset: decodeURIComponent(location.hash.replace(/^#/, '')) || 'Tesseract',
})
const fx = gui.addFolder('Render fx')
fx.add(params, 'fxaa').onChange(on => (fxaaPass.enabled = on))
fx.add(params, 'bloom').onChange(on => {
  bloomPass.enabled = on
  renderer.toneMapping = on ? ReinhardToneMapping : NoToneMapping
})
fx.add(params, 'bloomStrength', 0, 3).onChange(v => (bloomPass.strength = v))
fx.add(params, 'bloomRadius', 0, 1).onChange(v => (bloomPass.radius = v))
fx.add(params, 'bloomThreshold', 0, 1).onChange(v => (bloomPass.threshold = v))
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
config.add(params, 'range', 0, 5000, 1)
config.add(params, 'speed', 0, 1000)
config.add(params, 'mass', 0, 1000)
config.add(params, 'blackHoleMass', 0, 1000000, 1000)
config.add(params, 'scale', 0, 1000)
config.add(params, 'saturation', 0, 1)
config.add(params, 'luminance', 0, 1)
config.add(
  {
    restart,
  },
  'restart'
)

config.open()
const simulation = gui.addFolder('Simulation')
simulation.add(params, 'gravitationalConstant', 0.0, 25.0, 0.1)
simulation.add(params, 'simulationSpeed', 0.0, 10.0, 0.01)
simulation.add(params, 'collisions')
simulation.add(params, 'collisionBase', 0, 1000, 1)
simulation.add(params, 'collisionScale', 0, 1000, 1)
simulation.add(params, 'escapeDistance', 0, 100000, 1)
simulation.add(params, 'blackHoleMassThreshold', 0, 1000000, 1)
simulation.open()

gui.remember(params)
gui.revert()
gui.__preset_select.addEventListener('change', ({ target: { value } }) => {
  location.hash = `#${encodeURIComponent(value)}`
  restart()
})
window.addEventListener('hashchange', () => {
  gui.preset =
    decodeURIComponent(location.hash.replace(/^#/, '')) || 'RandomCube'
  gui.revert()
  restart()
})

init()
requestAnimationFrame(animate)
