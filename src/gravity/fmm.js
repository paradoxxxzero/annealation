import { Vector3 } from 'three'

export default class FMMGravity {
  constructor(orbs, range) {
    this.len = orbs.length
    this.positions = new Float32Array(3 * this.len)
    this.masses = new Float32Array(this.len)
    this.temperatures = new Float32Array(this.len)

    this.position = orbs.map(({ position }) => position)
    this.speed = orbs.map(({ speed }) => speed)
    this.acceleration = orbs.map(() => new Vector3())
    this.u = new Vector3()
    this.origin = new Vector3()

    this.range = range * 5
    this.levels = 9

    this.childrenShifts = new Array(8).fill().map((_, i) =>
      i
        .toString(2)
        .padStart(3, '0')
        .split('')
        .map(s => parseInt(s))
    )
    const grid_size = 1 << (3 * this.levels)
    this.xGrid = new Float32Array(grid_size)
    this.yGrid = new Float32Array(grid_size)
    this.zGrid = new Float32Array(grid_size)
  }

  frog_leap(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
      this.position[i].addScaledVector(this.speed[i], dt)
    }
  }

  getCells(position) {
    const cells = []
    var num,
      size,
      x,
      y,
      z,
      half_range = this.range * 0.5

    for (var level = 1; level < this.levels; level++) {
      num = 1 << level
      size = this.range / num
      x = Math.floor((position.x + half_range) / size)
      y = Math.floor((position.y + half_range) / size)
      z = Math.floor((position.z + half_range) / size)

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

  simulate(G) {
    var i,
      n,
      cells,
      cell_size,
      cell_hash,
      half_range = this.range * 0.5

    // Computing cells from all particles
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(this.position[i])
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

        for (shift_i = 0; shift_i < this.childrenShifts.length; shift_i++) {
          shift = this.childrenShifts[shift_i]
          x = 2 * cell_x + shift[0]
          y = 2 * cell_y + shift[1]
          z = 2 * cell_z + shift[2]
          level = cell_level + 1

          cell_num = 1 << level

          if (!(x == occ_x && y == occ_y && z == occ_z && level == occ_level)) {
            cell_hash = this.getHash(level, x, y, z)

            cell_size = this.range / cell_num
            offset_x = this.position[i].x - (x + 0.5) * cell_size + half_range
            offset_y = this.position[i].y - (y + 0.5) * cell_size + half_range
            offset_z = this.position[i].z - (z + 0.5) * cell_size + half_range
            distance = Math.sqrt(
              offset_x * offset_x + offset_y * offset_y + offset_z * offset_z
            )
            k = (G * this.masses[i]) / (distance * distance * distance)

            this.xGrid[cell_hash] += k * offset_x
            this.yGrid[cell_hash] += k * offset_y
            this.zGrid[cell_hash] += k * offset_z
          }
        }
        cell_level = occ_level
        cell_x = occ_x
        cell_y = occ_y
        cell_z = occ_z
      }
    }

    // Applying force from all cells to particles
    for (i = 0, n = this.len; i < n; i++) {
      cells = this.getCells(this.position[i])
      for (cell_i = 0; cell_i < cells.length; cell_i++) {
        cell_hash = this.getHash(...cells[cell_i])
        this.acceleration[i].x += this.xGrid[cell_hash]
        this.acceleration[i].y += this.yGrid[cell_hash]
        this.acceleration[i].z += this.zGrid[cell_hash]
      }
    }
    return this.len
  }

  frog_drop(dt) {
    const half_dt = dt * 0.5

    for (var i = 0, n = this.len; i < n; i++) {
      this.speed[i].addScaledVector(this.acceleration[i], half_dt)
    }
    this.update()
  }

  update() {
    for (var i = 0, n = this.len; i < n; i++) {
      this.positions[i * 3] = this.position[i].x
      this.positions[i * 3 + 1] = this.position[i].y
      this.positions[i * 3 + 2] = this.position[i].z
    }
  }

  free() {
    delete this.positions
    delete this.masses
    delete this.temperatures
    delete this.position
    delete this.speed
    delete this.acceleration
  }
}
