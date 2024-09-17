import Gravity from './gravity'
import { workerPromise } from '../utils'
import BhThread from './worker/bh-thread.js?worker'
import BhThreadSab from './worker/bh-thread-sab.js?worker'
import P2PThread from './worker/p2p-thread.js?worker'
import P2PThreadSab from './worker/p2p-thread-sab.js?worker'

const WORKERS = {
  'bh-thread': BhThread,
  'bh-thread-sab': BhThreadSab,
  'p2p-thread': P2PThread,
  'p2p-thread-sab': P2PThreadSab,
}

export default class P2PThreadedGravity extends Gravity {
  constructor(orbs, params, allocLen, workerName = 'p2p-thread') {
    super(orbs, params, allocLen)

    this.initThreadPool(workerName)
  }

  initThreadPool(workerName) {
    this.pool = new Array(~~this.params.threads).fill().map(() => {
      const Worker = WORKERS[workerName]
      return new Worker()
    })
  }

  async simulate() {
    const { gravitationalConstant, softening, collisions, collisionThreshold } =
      this.params
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
          this.N,
          gravitationalConstant,
          softening2,
          collisions,
          threshold2,
          this.accelerations.buffer,
          this.positions.buffer,
          this.masses.buffer,
        ])
      )
    )
    if (!this.alive) {
      return
    }
    workersResults.forEach(([accelerationBuffer, start, end, collidedPart]) => {
      const accelerations = new Float32Array(accelerationBuffer)
      for (let i = start; i < end; i++) {
        let i3 = i * 3
        this.accelerations[i3] = accelerations[i3]
        this.accelerations[i3 + 1] = accelerations[i3 + 1]
        this.accelerations[i3 + 2] = accelerations[i3 + 2]
      }
      collided.push(...collidedPart)
    })

    return this.solve(collided)
  }

  free() {
    super.free()
    this.pool.forEach(worker => worker.terminate())
  }
}
