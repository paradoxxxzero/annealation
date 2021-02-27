import Gravity from './gravity'

export default class FMMGravity extends Gravity {
  constructor(orbs, params) {
    super(orbs, params)
    this.paramsChange()
  }

  paramsChange() {
    this.grid_dimension_size = 1 << (3 * ~~this.params.resolution)
    this.grid = new Float32Array(this.grid_dimension_size * 3)
  }

  getCells(i) {
    const cells = []
    var num,
      size,
      x,
      y,
      z,
      half_range = this.params.range * 0.5

    for (var level = 1; level < ~~this.params.resolution; level++) {
      num = 1 << level
      size = this.params.range / num
      x = Math.floor((this.positions[i * 3] + half_range) / size)
      y = Math.floor((this.positions[i * 3 + 1] + half_range) / size)
      z = Math.floor((this.positions[i * 3 + 2] + half_range) / size)

      // in bounds
      if (0 <= x && x < num && 0 <= y && y < num && 0 <= z && z < num) {
        cells.push([level, x, y, z])
      }
    }
    return cells
  }

  getHash(level, x, y, z) {
    return (
      (1 << (3 * level)) + x * (1 << (2 * level)) + y * (1 << (1 * level)) + z
    )
  }

  async simulate() {
    // TODO: implement collisions somehow
    const { gravitationalConstant, softening } = this.params

    const collided = []
    const softening2 = softening * softening
    this.grid.fill(0)

    var i,
      n,
      cells,
      cell_size,
      cell_hash,
      half_range = this.params.range * 0.5,
      childrenShifts = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]

    // Computing cells from all particles
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(i)
      var cell_level = 0,
        cell_x = 0,
        cell_y = 0,
        cell_z = 0,
        cell_num,
        occ_level,
        occ_x,
        occ_y,
        occ_z,
        x,
        y,
        z,
        level,
        shift,
        cell_i,
        shift_i,
        offset_x,
        offset_y,
        offset_z,
        k,
        distance
      for (cell_i = 1; cell_i < cells.length; cell_i++) {
        ;[occ_level, occ_x, occ_y, occ_z] = cells[cell_i]
        for (shift_i = 0; shift_i < childrenShifts.length; shift_i++) {
          shift = childrenShifts[shift_i]
          x = 2 * cell_x + shift[0]
          y = 2 * cell_y + shift[1]
          z = 2 * cell_z + shift[2]
          level = cell_level + 1

          cell_num = 1 << level

          if (!(x == occ_x && y == occ_y && z == occ_z && level == occ_level)) {
            cell_hash = this.getHash(level, x, y, z)

            cell_size = this.params.range / cell_num
            offset_x =
              this.positions[i * 3] - (x + 0.5) * cell_size + half_range
            offset_y =
              this.positions[i * 3 + 1] - (y + 0.5) * cell_size + half_range
            offset_z =
              this.positions[i * 3 + 2] - (z + 0.5) * cell_size + half_range
            distance = Math.sqrt(
              offset_x * offset_x +
                offset_y * offset_y +
                offset_z * offset_z +
                softening2
            )
            k =
              (gravitationalConstant * this.masses[i]) /
              (distance * distance * distance)

            this.grid[cell_hash] += k * offset_x
            this.grid[cell_hash + this.grid_dimension_size] += k * offset_y
            this.grid[cell_hash + 2 * this.grid_dimension_size] += k * offset_z
          }
        }
        cell_level = occ_level
        cell_x = occ_x
        cell_y = occ_y
        cell_z = occ_z
      }
    }

    // Applying force from all cells to particles
    const a = [0, 0, 0]
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(i)
      a.fill(0)
      for (cell_i = 0; cell_i < cells.length; cell_i++) {
        cell_hash = this.getHash(...cells[cell_i])
        a[0] += this.grid[cell_hash]
        a[1] += this.grid[cell_hash + this.grid_dimension_size]
        a[2] += this.grid[cell_hash + 2 * this.grid_dimension_size]
      }
      this.accelerations[i * 3] = a[0]
      this.accelerations[i * 3 + 1] = a[1]
      this.accelerations[i * 3 + 2] = a[2]
    }

    return this.solve(collided)
  }
}
