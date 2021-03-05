import { compute2, compute3, compute4 } from './bh-cell'

let accelerations, positions, masses

onmessage = function (e) {
  const [
    start,
    end,
    N,
    theta,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    cellsBuffer,
  ] = e.data
  if (e.data.length === 3) {
    let [accelerationsBuffer, positionsBuffer, massesBuffer] = e.data
    positions = new Float32Array(positionsBuffer)
    accelerations = new Float32Array(accelerationsBuffer)
    masses = new Float32Array(massesBuffer)
    return
  }
  const cells = new Float32Array(cellsBuffer)
  const collided = []
  const computeN = { 2: compute2, 3: compute3, 4: compute4 }[N]

  for (let i = start; i < end; i++) {
    let I = i * N
    for (let s = 0; s < N; s++) {
      accelerations[I + s] = 0
    }

    computeN(
      cells,
      0,
      i,
      theta,
      softening2,
      collisions,
      collided,
      threshold2,
      positions,
      accelerations,
      masses
    )

    for (let s = 0; s < N; s++) {
      accelerations[I + s] *= gravitationalConstant
    }
  }
  postMessage([collided])
}
