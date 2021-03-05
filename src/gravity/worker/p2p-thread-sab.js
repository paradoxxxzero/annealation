import P2PGravity from '../p2p'
let accelerations, positions, masses

onmessage = function (e) {
  if (e.data.length === 3) {
    let [accelerationsBuffer, positionsBuffer, massesBuffer] = e.data
    positions = new Float32Array(positionsBuffer)
    accelerations = new Float32Array(accelerationsBuffer)
    masses = new Float32Array(massesBuffer)
    return
  }
  const collided = []
  const [
    start,
    end,
    len,
    dimensions,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
  ] = e.data

  P2PGravity.prototype.compute.call(
    {
      positions,
      masses,
      accelerations,
      compute2: P2PGravity.prototype.compute2,
      compute3: P2PGravity.prototype.compute3,
      compute4: P2PGravity.prototype.compute4,
    },
    start,
    end,
    dimensions,
    len,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    collided
  )
  postMessage([collided])
}
