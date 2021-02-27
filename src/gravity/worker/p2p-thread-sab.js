let accelerations, positions, masses

onmessage = function (e) {
  if (e.data.length === 3) {
    let [accelerationsBuffer, positionsBuffer, massesBuffer] = e.data
    positions = new Float32Array(positionsBuffer)
    accelerations = new Float32Array(accelerationsBuffer)
    masses = new Float32Array(massesBuffer)
    return
  }
  const [
    start,
    end,
    len,
    gravitationalConstant,
    softening2,
    collisions,
    threshold2,
  ] = e.data

  const collided = []
  const u = [0, 0, 0]
  const a = [0, 0, 0]
  for (let i = start; i < end; i++) {
    let i3 = i * 3
    a.fill(0)
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue
      }
      let j3 = j * 3
      u[0] = positions[j3] - positions[i3]
      u[1] = positions[j3 + 1] - positions[i3 + 1]
      u[2] = positions[j3 + 2] - positions[i3 + 2]
      let distance2 = u[0] * u[0] + u[1] * u[1] + u[2] * u[2]
      let distance = Math.sqrt(distance2 + softening2)
      if (collisions) {
        if (distance2 < threshold2) {
          collided.push([i, j])
        }
      }

      let fact = masses[j] / (distance * distance * distance)
      a[0] += u[0] * fact
      a[1] += u[1] * fact
      a[2] += u[2] * fact
    }
    accelerations[i3] = a[0] * gravitationalConstant
    accelerations[i3 + 1] = a[1] * gravitationalConstant
    accelerations[i3 + 2] = a[2] * gravitationalConstant
  }
  postMessage([collided])
}
