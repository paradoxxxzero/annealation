export const colorEncode = (r, g, b, l = 256) =>
  ~~(Math.min(r, 0.99) * l) +
  ~~(Math.min(g, 0.99) * l) * l +
  ~~(Math.min(b, 0.99) * l) * l * l

export const normalGauss = x => {
  // [0, 1] -> [0, 1] max at 1/2
  return Math.exp(-Math.pow((x - 0.5) * 4, 2))
}
export const centeredGauss = x => {
  // [-1, 1] -> [0, 1] max at 0
  return Math.exp(-Math.pow(x * 2, 2))
}

export const massToTemperature = mass =>
  mass < 5 ? (mass + 1.09611) * 1900 : (mass + 1.7) * 1700

export const rngTemperatureMass = maxMass => {
  const mass = maxMass * Math.pow(Math.random(), 15)
  const theoricTemperature = massToTemperature(mass)
  const variance = 0.75
  return {
    mass,
    temperature:
      theoricTemperature *
      (1 + variance * centeredGauss(1 - 2 * Math.random())),
  }
}
