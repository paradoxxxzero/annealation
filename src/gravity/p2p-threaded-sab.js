/* global SharedArrayBuffer */
import P2PThreadedGravity from './p2p-threaded'
import { workerPromise } from '../utils'

export default class P2PThreadedSABGravity extends P2PThreadedGravity {
  constructor(orbs, params, allocLen, workerName = 'p2p-thread-sab') {
    super(orbs, params, allocLen, workerName)
    this.positionsBuffer = new SharedArrayBuffer(3 * allocLen * 4) // 32 / 8
    this.positions = new Float32Array(this.positionsBuffer)
    this.speedsBuffer = new SharedArrayBuffer(3 * allocLen * 4) // 32 / 8
    this.speeds = new Float32Array(this.speedsBuffer)
    this.accelerationsBuffer = new SharedArrayBuffer(3 * allocLen * 4) // 32 / 8
    this.accelerations = new Float32Array(this.accelerationsBuffer)
    this.massesBuffer = new SharedArrayBuffer(allocLen * 4) // 32 / 8
    this.masses = new Float32Array(this.massesBuffer)

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
    } = this.params
    let collided = []

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
    if (!this.alive) {
      return
    }
    workersResults.forEach(([collidedPart]) => {
      collided.push(...collidedPart)
    })

    return this.solve(collided)
  }
}
