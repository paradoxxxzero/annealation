import {
  AmbientLight,
  Color,
  FogExp2,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  ReinhardToneMapping,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

const renderer = new WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.toneMapping = ReinhardToneMapping
document.body.appendChild(renderer.domElement)

const origin = new Vector3()
const scene = new Scene()
// scene.fog = new FogExp2(0x000000, 0.0002)

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

const ambientLight = new AmbientLight(0x404040)
scene.add(ambientLight)

const pointLight = new PointLight(0xffffff)
scene.add(pointLight)

const composer = new EffectComposer(renderer)

const renderScene = new RenderPass(scene, camera)
composer.addPass(renderScene)

// const afterimagePass = new AfterimagePass()
// afterimagePass.uniforms.damp.value = 0.6
// composer.addPass(afterimagePass)

const bloomPass = new UnrealBloomPass(
  new Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0,
  0
)

composer.addPass(bloomPass)

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
  simulate()
  update()
  composer.render()
}
const initPositionRange = 1000
const initSpeedRange = 30
const S = 1
const L = 0.5
let orbs = new Array(1000).fill().map(() => ({
  color: new Color().setHSL(Math.random(), S, L),
  // weight 10^31 kg
  weight: Math.random() * 10,
  // distance 10^16 m
  position: new Vector3(
    initPositionRange / 2 - Math.random() * initPositionRange,
    initPositionRange / 2 - Math.random() * initPositionRange,
    initPositionRange / 2 - Math.random() * initPositionRange
  ),
  speed: new Vector3(
    initSpeedRange / 2 - Math.random() * initSpeedRange,
    initSpeedRange / 2 - Math.random() * initSpeedRange,
    initSpeedRange / 2 - Math.random() * initSpeedRange
  ),
  acceleration: new Vector3(),
}))
// orbs.push({
//   color: new Color(0.25, 0.25, 0.25),
//   weight: 50,
//   position: new Vector3(),
//   speed: new Vector3(),
//   acceleration: new Vector3(),
// })

const spheres = new Group()
scene.add(spheres)

function createSphere({ color, position, weight }) {
  const geometry = new IcosahedronGeometry(1, 2)
  const material = new MeshBasicMaterial({ color })
  const sphere = new Mesh(geometry, material)
  sphere.position.copy(position)
  sphere.scale.setScalar(5 * Math.pow(weight, 1 / 3))
  spheres.add(sphere)
}

// const target = {}
function collide([orb, otherOrb]) {
  return {
    color:
      //   new Color().setHSL(
      //   (orb.color.getHSL(target).h * orb.weight +
      //     otherOrb.color.getHSL(target).h * otherOrb.weight) /
      //     (orb.weight + otherOrb.weight),
      //   S,
      //   L
      // ),
      orb.color.lerp(
        otherOrb.color,
        otherOrb.weight / (orb.weight + otherOrb.weight)
      ),
    weight: orb.weight + otherOrb.weight,
    position: orb.weight > otherOrb.weight ? orb.position : otherOrb.position,
    speed: new Vector3().addVectors(orb.speed, otherOrb.speed),
    acceleration: new Vector3(),
  }
}

function init() {
  orbs.forEach(createSphere)

  requestAnimationFrame(animate)
}

const u = new Vector3()
const G = 6.67 // * 1e-11
const dt = 0.5 // * 1e19 s

function simulate() {
  const collisions = []
  orbs.forEach(orb => {
    orb.position.addScaledVector(orb.speed, 0.5 * dt)
  })
  orbs.forEach((orb, i) => {
    orb.acceleration.set(0, 0, 0)
    // ;[...orbs, blackHole].forEach((otherOrb, j) => {
    orbs.forEach((otherOrb, j) => {
      if (j >= i) {
        return
      }

      u.subVectors(otherOrb.position, orb.position)
      const distance = Math.sqrt(100.0 + u.lengthSq())

      if (distance < 12) {
        if (!collisions.map(([, otherOrb]) => otherOrb).includes(orb)) {
          collisions.push([orb, otherOrb])
        }
        return
      }
      // 1e-11 * (1e31)^2 / (1e16)^2 -> 62 - 32 - 11 -> -19 -> dt 1e19 s
      const attraction =
        (G * (orb.weight * otherOrb.weight)) / (distance * distance * distance)
      u.multiplyScalar(attraction)
      orb.acceleration.add(u)
      otherOrb.acceleration.sub(u)
    })
  })
  if (collisions.length) {
    const newOrbs = collisions.map(collide)
    const deletedOrbs = collisions.flat()

    deletedOrbs
      .map(orb => spheres.children[orbs.indexOf(orb)])
      .forEach(sphere => spheres.remove(sphere))
    newOrbs.forEach(createSphere)

    orbs = [...orbs.filter(orb => !deletedOrbs.includes(orb)), ...newOrbs]
  }

  const escaped = []
  orbs.forEach(orb => {
    orb.speed.addScaledVector(orb.acceleration, dt)
    orb.position.addScaledVector(orb.speed, 0.5 * dt)

    if (orb.position.distanceTo(origin) > 5000) {
      escaped.push(orb)
    }
  })

  if (escaped.length) {
    escaped
      .map(orb => spheres.children[orbs.indexOf(orb)])
      .forEach(sphere => spheres.remove(sphere))
    orbs = orbs.filter(orb => !escaped.includes(orb))
  }
}

function update() {
  spheres.children.forEach((sphere, i) => {
    const orb = orbs[i]

    // !i && console.log(sphere.position, orb.speed)
    sphere.position.copy(orb.position)
  })
}

init()
