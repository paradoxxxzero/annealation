import { workerPromise } from './p2p-threaded'
import Gravity from './gravity'
import { OCTANTS } from './bh'

export default class BarnesHutThreadedGravity extends Gravity {
  constructor(orbs, params, allocLen) {
    super(orbs, params, allocLen)

    this.pool = new Array(~~params.threads).fill().map(() => {
      const url = import.meta.url
      return new Worker(
        // Handle bundling
        url.includes('gravity')
          ? new URL('../../worker/bh-thread.js', import.meta.url)
          : new URL('./gravity/worker/bh-thread.js', import.meta.url)
      )
    })
  }

  subdivide(cell) {
    const size = cell.size / 2.0

    //   y |
    //    0 --- x
    // z /

    //   4 5
    //  7 6
    //   0 1
    //  3 2
    cell.leaf = false
    cell.octants = OCTANTS.map(([x, y, z]) => ({
      x: cell.x + x * size,
      y: cell.y + y * size,
      z: cell.z + z * size,
      size,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      octants: null,
      leaf: true,
    }))
  }

  getSubCell(cell, index) {
    let i3 = index * 3
    const x = this.positions[i3] > cell.octants[6].x
    const y = this.positions[i3 + 1] > cell.octants[6].y
    const z = this.positions[i3 + 2] > cell.octants[6].z
    return cell.octants[
      OCTANTS.findIndex(([xc, yc, zc]) => !!xc == x && !!yc == y && !!zc == z)
    ]
  }

  addParticle(cell, index) {
    // If this cell is empty, add particle to it
    if (cell.index === null) {
      cell.index = index
      return
    }

    // Subdivide this cell
    this.subdivide(cell)

    // Inserting existing particle to subCell
    const existingSubCell = this.getSubCell(cell, cell.index)
    existingSubCell.index = cell.index

    const newSubCell = this.getSubCell(cell, index)
    // If both cells end up in same octant, subdivide again
    if (existingSubCell === newSubCell) {
      this.addParticle(existingSubCell, index)
    }

    newSubCell.index = index
  }

  makeOctree(origin, range) {
    const rootCell = {
      x: origin,
      y: origin,
      z: origin,
      size: range,
      index: null,
      mass: 0,
      cx: 0,
      cy: 0,
      cz: 0,
      octants: null,
      leaf: true,
    }

    // Let's insert every particles:
    for (let i = 0; i < this.len; i++) {
      let cell = rootCell

      while (!cell.leaf) {
        cell = this.getSubCell(cell, i)
      }

      this.addParticle(cell, i)
    }
    return rootCell
  }

  massDistribution(cell) {
    if (cell.leaf) {
      // If this cell is a leaf set particle mass to it
      let i3 = cell.index * 3
      cell.cx = this.positions[i3]
      cell.cy = this.positions[i3 + 1]
      cell.cz = this.positions[i3 + 2]
      cell.mass = this.masses[cell.index]
    } else {
      // For each octant
      for (let i = 0, n = cell.octants.length; i < n; i++) {
        const subCell = cell.octants[i]
        // If it has particles
        if (subCell.index !== null) {
          // Compute its distribution
          this.massDistribution(subCell)
          cell.mass += subCell.mass
          cell.cx += subCell.cx * subCell.mass
          cell.cy += subCell.cy * subCell.mass
          cell.cz += subCell.cz * subCell.mass
        }
      }

      // Compute center of mass
      cell.cx /= cell.mass
      cell.cy /= cell.mass
      cell.cz /= cell.mass
    }
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
    const cells = new Float32Array(cellCount * 14)
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
          this.accelerations.buffer,
          this.positions.buffer,
          this.masses.buffer,
          cells.buffer,
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
