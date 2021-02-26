/* global SharedArrayBuffer */
import { workerPromise } from './p2p-threaded'
import NoGravity from './none'

export default class P2PThreadedSABGravity extends NoGravity {
  constructor(orbs, params) {
    super(orbs, params)
    this.positionsBuffer = new SharedArrayBuffer(3 * this.len * 4) // 32 / 8
    this.positions = new Float32Array(this.positionsBuffer)
    this.speedsBuffer = new SharedArrayBuffer(3 * this.len * 4) // 32 / 8
    this.speeds = new Float32Array(this.speedsBuffer)
    this.accelerationsBuffer = new SharedArrayBuffer(3 * this.len * 4) // 32 / 8
    this.accelerations = new Float32Array(this.accelerationsBuffer)
    this.massesBuffer = new SharedArrayBuffer(this.len * 4) // 32 / 8
    this.masses = new Float32Array(this.massesBuffer)

    this.pool = new Array(~~params.threads).fill().map(() => {
      const url = import.meta.url
      return new Worker(
        // Handle bundling
        url.includes('gravity')
          ? new URL('../../worker/p2p-thread-sab.js', import.meta.url)
          : new URL('./gravity/worker/p2p-thread-sab.js', import.meta.url)
      )
    })
    this.pool.forEach(worker => {
      worker.postMessage([
        this.accelerationsBuffer,
        this.positionsBuffer,
        this.massesBuffer,
      ])
    })

    orbs.forEach(({ position, mass, speed, temperature }, i) => {
      this.positions[i * 3] = position.x
      this.positions[i * 3 + 1] = position.y
      this.positions[i * 3 + 2] = position.z
      this.speeds[i * 3] = speed.x
      this.speeds[i * 3 + 1] = speed.y
      this.speeds[i * 3 + 2] = speed.z
      this.masses[i] = mass
      this.temperatures[i] = temperature
    })
  }

  async simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
      escapeDistance,
    } = this.params
    let collided = []
    const skip = []

    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold

    let parts = ~~(this.len / this.pool.length)

    const workersResults = await Promise.all(
      this.pool.map((worker, i) =>
        workerPromise(worker, [
          i * parts,
          i == this.pool.length - 1 ? this.len : (i + 1) * parts,
          this.len,
          gravitationalConstant,
          softening2,
          collisions,
          threshold2,
        ])
      )
    )
    workersResults.forEach(([collidedPart]) => {
      collided.push(...collidedPart)
    })

    escapeDistance && this.solveEscapes(skip)
    if (collided.length) {
      collided = this.aggregateCollisions(collided)
      collided.forEach(cell => {
        skip.push(...cell.slice(1))
      })
      this.solveCollisions(collided)
    }
    skip.length &&
      (this.len = this.crunchOrbs(
        skip.concat(collided.map(([i, j]) => Math.max(i, j)))
      ))

    return this.len
  }
}
