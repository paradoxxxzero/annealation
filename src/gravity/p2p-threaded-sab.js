/* global SharedArrayBuffer */
import P2PThreadedGravity, { workerPromise } from './p2p-threaded'

export default class P2PThreadedSABGravity extends P2PThreadedGravity {
  constructor(orbs, params) {
    super(orbs, params)
    this.pool.forEach(worker => worker.terminate())
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
        'init',
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

  frog_leap() {
    const dt = this.params.simulationSpeed
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speeds[i * 3] += this.accelerations[i * 3] * half_dt
      this.speeds[i * 3 + 1] += this.accelerations[i * 3 + 1] * half_dt
      this.speeds[i * 3 + 2] += this.accelerations[i * 3 + 2] * half_dt
      this.positions[i * 3] += this.speeds[i * 3] * dt
      this.positions[i * 3 + 1] += this.speeds[i * 3 + 1] * dt
      this.positions[i * 3 + 2] += this.speeds[i * 3 + 2] * dt
    }
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
          'iterate',
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
