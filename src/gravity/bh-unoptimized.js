import Gravity from './gravity'

export const QUADRANTS = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
]
export const OCTANTS = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 1],
  [0, 0, 1],
  [0, 1, 0],
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]
export const HEXADECANTS = [
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]

const ORTHANTS = [null, null, QUADRANTS, OCTANTS, HEXADECANTS]

export default class BarnesHutGravity extends Gravity {
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
    cell.orthants = ORTHANTS[this.N].map(orthant => {
      const p = new Float32Array(this.N)
      for (let i = 0, n = this.N; i < n; i++) {
        p[i] = cell.p[i] + orthant[i] * size
      }
      return {
        p,
        size,
        index: null,
        mass: 0,
        c: new Float32Array(this.N),
        orthants: null,
        leaf: true,
      }
    })
  }

  getSubCell(cell, index) {
    const orthants = ORTHANTS[this.N]
    const nose = orthants.length - 2
    let I = index * this.N

    return cell.orthants[
      orthants.findIndex(ortantShifts =>
        ortantShifts.every(
          (ortantShift, i) =>
            !!ortantShift == this.positions[I + i] > cell.orthants[nose].p[i]
        )
      )
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
      // Prevent same position infinite loop
      let I = index * this.N
      let cI = cell.index * this.N
      let same = true
      for (let s = 0, n = this.N; s < n; s++) {
        if (this.positions[cI + s] !== this.positions[I + s]) {
          same = false
          break
        }
      }
      if (!same) {
        this.addParticle(existingSubCell, index)
      }
    }

    newSubCell.index = index
  }

  makeOctree(origin, range) {
    const rootCell = {
      p: new Float32Array(this.N).fill(origin),
      size: range,
      index: null,
      mass: 0,
      c: new Float32Array(this.N),
      orthants: null,
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
      let I = cell.index * this.N
      for (let s = 0, n = this.N; s < n; s++) {
        cell.c[s] = this.positions[I + s]
      }
      cell.mass = this.masses[cell.index]
    } else {
      // For each octant
      for (let i = 0, n = cell.orthants.length; i < n; i++) {
        const subCell = cell.orthants[i]
        // If it has particles
        if (subCell.index !== null) {
          // Compute its distribution
          this.massDistribution(subCell)
          cell.mass += subCell.mass
          for (let s = 0, n = this.N; s < n; s++) {
            cell.c[s] += subCell.c[s] * subCell.mass
          }
        }
      }

      // Compute center of mass
      for (let s = 0, n = this.N; s < n; s++) {
        cell.c[s] /= cell.mass
      }
    }
  }

  getAccelerations(
    cell,
    index,
    theta,
    softening2,
    collisions,
    collided,
    threshold2
  ) {
    // If it's a leaf and cell is not containing cell
    if (cell.leaf) {
      if (cell.index !== null && cell.index !== index) {
        // Compute classical interactions between index particle and cell particle
        const I = index * this.N
        const J = cell.index * this.N
        const u = new Float32Array(this.N)
        let d2 = 0
        for (let s = 0, n = this.N; s < n; s++) {
          u[s] = this.positions[J + s] - this.positions[I + s]
          d2 += u[s] * u[s]
        }
        const d = Math.sqrt(d2 + softening2)
        if (collisions) {
          if (d2 < threshold2) {
            collided.push([index, cell.index])
          }
        }
        // TODO: forces according to N
        const fact = this.masses[cell.index] / (d * d * d)

        for (let s = 0, n = this.N; s < n; s++) {
          this.accelerations[I + s] += fact * u[s]
        }
      }
    } else {
      // If this cell contains octants
      // Compute distance between this particle and the cell center of mass
      const I = index * this.N
      const u = new Float32Array(this.N)
      let d2 = 0
      for (let s = 0, n = this.N; s < n; s++) {
        u[s] = cell.c[s] - this.positions[I + s]
        d2 += u[s] * u[s]
      }
      const r = Math.sqrt(d2)
      const d = cell.size

      if (d < theta * r) {
        // If the ratio of distance and radius is below theta, use approximation
        // Compute interaction between this particle and this cell
        const fact = cell.mass / (r * r * r)

        for (let s = 0, n = this.N; s < n; s++) {
          this.accelerations[I + s] += fact * u[s]
        }
      } else {
        // Otherwise compute accelerations for each octant
        for (let i = 0, n = cell.orthants.length; i < n; i++) {
          this.getAccelerations(
            cell.orthants[i],
            index,
            theta,
            softening2,
            collisions,
            collided,
            threshold2
          )
        }
      }
    }
  }

  async simulate() {
    const {
      theta,
      softening,
      gravitationalConstant,
      collisions,
      collisionThreshold,
    } = this.params

    const collided = []
    const softening2 = softening * softening
    const threshold2 = collisionThreshold * collisionThreshold
    const min = Math.min.apply(null, this.positions)
    const max = Math.max.apply(null, this.positions)

    const rootCell = this.makeOctree(min, max - min)
    this.massDistribution(rootCell)

    for (let i = 0; i < this.len; i++) {
      let I = i * this.N
      for (let s = 0; s < this.N; s++) {
        this.accelerations[I + s] = 0
      }

      this.getAccelerations(
        rootCell,
        i,
        theta,
        softening2,
        collisions,
        collided,
        threshold2
      )

      for (let s = 0; s < this.N; s++) {
        this.accelerations[I + s] *= gravitationalConstant
      }
    }

    return this.solve(collided)
  }
}
