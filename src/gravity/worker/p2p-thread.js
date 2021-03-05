import P2PGravity from '../p2p'

onmessage = function (e) {
  const [
    start,
    end,
    len,
    dimensions,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
    accelerationsBuffer,
    positionsBuffer,
    massesBuffer,
  ] = e.data
  const positions = new Float32Array(positionsBuffer)
  const accelerations = new Float32Array(accelerationsBuffer)
  const masses = new Float32Array(massesBuffer)
  const collided = []
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
  postMessage([accelerationsBuffer, start, end, collided])
}
