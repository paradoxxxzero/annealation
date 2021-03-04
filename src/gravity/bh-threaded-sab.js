/* global SharedArrayBuffer */
import P2PThreadedSABGravity from './p2p-threaded-sab'
import { workerPromise, mix } from '../utils'
import BarnesHutGravity from './bh'

export default class BarnesHutThreadedSABGravity extends mix(
  BarnesHutGravity,
  P2PThreadedSABGravity
) {
  constructor(orbs, params, allocLen, workerName = 'bh-thread-sab') {
    super(orbs, params, allocLen, workerName)
  }

  fill(cell, cells, flag) {
    const s = flag.shift
    cells[0 + s] = cell.size
    cells[1 + s] = cell.index
    cells[2 + s] = cell.mass
    cells[3 + s] = cell.cx
    cells[4 + s] = cell.cy
    cells[5 + s] = cell.cz
    if (cell.leaf) {
      for (let i = 0; i < 8; i++) {
        cells[6 + i + s] = NaN
      }
    } else {
      for (let i = 0; i < 8; i++) {
        flag.shift += 14
        cells[6 + i + s] = flag.shift
        this.fill(cell.octants[i], cells, flag)
      }
    }

    return s
  }

  async simulate() {
    const {
      gravitationalConstant,
      softening,
      collisions,
      collisionThreshold,
      theta,
    } = this.params
    let collided = []

    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold
    const min = Math.min.apply(null, this.positions)
    const max = Math.max.apply(null, this.positions)
    const rootCell = this.makeOctree(min, max - min)
    this.massDistribution(rootCell)
    const count = c =>
      c.octants
        ? c.octants.length + c.octants.map(count).reduce((a, b) => a + b, 0)
        : 0
    const cellCount = count(rootCell) + 1
    const cellsBuffer = new SharedArrayBuffer(cellCount * 14 * 4)
    const cells = new Float32Array(cellsBuffer)
    this.fill(rootCell, cells, { shift: 0 })
    let parts = ~~(this.len / this.pool.length)

    const workersResults = await Promise.all(
      this.pool.map((worker, i) =>
        workerPromise(worker, [
          i * parts,
          i == this.pool.length - 1 ? this.len : (i + 1) * parts,
          theta,
          gravitationalConstant,
          softening2,
          collisions,
          threshold2,
          cellsBuffer,
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

  free() {
    super.free()
    this.pool.forEach(worker => worker.terminate())
  }
}
