import { Color, Spherical, Vector3 } from 'three'

export const randomCube = ({
  number,
  range,
  speed,
  mass,
  saturation,
  luminance,
}) => {
  return new Array(number).fill().map(() => ({
    color: new Color().setHSL(Math.random(), saturation, luminance),
    // mass 10^31 kg
    mass: Math.random() * mass,
    // distance 10^16 m
    position: new Vector3(
      range / 2 - Math.random() * range,
      range / 2 - Math.random() * range,
      range / 2 - Math.random() * range
    ),
    speed: new Vector3(
      speed / 2 - Math.random() * speed,
      speed / 2 - Math.random() * speed,
      speed / 2 - Math.random() * speed
    ),
    acceleration: new Vector3(),
  }))
}

export const randomDisc = ({
  number,
  range,
  speed,
  mass,
  saturation,
  luminance,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0) {
      return {
        color: new Color(1, 1, 1),
        mass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range * Math.sqrt(Math.random())
    spherical.theta = Math.random() * 0.1
    spherical.phi = Math.random() * 2 * Math.PI
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: 1,
      // distance 10^16 m
      position: new Vector3().setFromSpherical(spherical),
      speed: new Vector3(
        Math.cos(spherical.phi),
        -Math.sin(spherical.phi),
        0
      ).multiplyScalar(speed / Math.sqrt(spherical.radius)),
      acceleration: new Vector3(),
    }
  })
}

export const proceduralDisc = ({
  number,
  range,
  speed,
  mass,
  saturation,
  luminance,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0) {
      return {
        color: new Color(1, 1, 1),
        mass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range / 10 + (9 * range * i) / (10 * number)
    spherical.theta = Math.PI / 2
    spherical.phi = ((i * 1 * Math.PI) / number) * 2 * Math.PI
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: 1,
      // distance 10^16 m
      position: new Vector3().setFromSpherical(spherical),
      speed: new Vector3(-Math.cos(spherical.phi), Math.sin(spherical.phi), 0)
        .normalize()
        .multiplyScalar(
          Math.sqrt((gravitationalConstant * mass) / spherical.radius)
        ),
      acceleration: new Vector3(),
    }
  })
}
