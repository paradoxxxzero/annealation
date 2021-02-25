import { Spherical, Vector3, Euler } from 'three'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'

const colorEncode = (r, g, b, l = 256) =>
  ~~(Math.min(r, 0.99) * l) +
  ~~(Math.min(g, 0.99) * l) * l +
  ~~(Math.min(b, 0.99) * l) * l * l

// const normalGauss = x => {
//   // [0, 1] -> [0, 1] max at 1/2
//   return Math.exp(-Math.pow((x - 0.5) * 4, 2))
// }
const centeredGauss = x => {
  // [-1, 1] -> [0, 1] max at 0
  return Math.exp(-Math.pow(x * 2, 2))
}

const massToTemperature = mass =>
  mass < 5 ? (mass + 1.09611) * 1900 : (mass + 1.7) * 1700

const rngTemperatureMass = maxMass => {
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
export const cube = ({ number, range, speed, mass, blackHoleMass }) => {
  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    return {
      // mass 10^30 kg
      ...rngTemperatureMass(mass),
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
    }
  })
}

export const regularCube = ({ number, range, speed, mass, blackHoleMass }) => {
  const n = ~~Math.cbrt(number)
  return new Array(n)
    .fill()
    .map((_, i) =>
      new Array(n).fill().map((_, j) =>
        new Array(n).fill().map((_, k) => {
          const pos = new Vector3(i / n - 1 / 2, j / n - 1 / 2, k / n - 1 / 2)
          return {
            // mass 10^30 kg
            mass,
            temperature: 15000 * (0.75 - pos.lengthSq()) - 3000,
            // distance 10^161 m
            position: pos.multiplyScalar(range),
            speed: new Vector3(
              speed / 2 - Math.random() * speed,
              speed / 2 - Math.random() * speed,
              speed / 2 - Math.random() * speed
            ),
          }
        })
      )
    )
    .flat(3)
    .concat(
      blackHoleMass
        ? [
            {
              temperature: 0,
              mass: blackHoleMass,
              position: new Vector3(),
              speed: new Vector3(),
            },
          ]
        : []
    )
}

export const sphere = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  range *= 0.5

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    spherical.radius = range * Math.cbrt(Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.acos(2 * Math.random() - 1.0)

    const position = new Vector3().setFromSpherical(spherical)
    const x = 1 - 2 * Math.random()
    const y = 1 - 2 * Math.random()
    const z = -(x * position.x + y * position.y) / position.z
    const speedVector = new Vector3(x, y, z)
      .normalize()
      .multiplyScalar(
        speed *
          Math.sqrt((gravitationalConstant * blackHoleMass) / spherical.radius)
      )
    return {
      ...rngTemperatureMass(mass),
      position,
      speed: speedVector,
    }
  })
}

export const harmonicSphere = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  range *= 0.5

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    spherical.radius = range * Math.cbrt(Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.acos(2 * Math.random() - 1.0)

    const position = new Vector3().setFromSpherical(spherical)

    const speedVector = new Vector3(
      speed * Math.cos(spherical.theta),
      0,
      -speed * Math.sin(spherical.theta)
    )
      .normalize()
      .multiplyScalar(
        Math.sqrt((gravitationalConstant * blackHoleMass) / spherical.radius)
      )
    return {
      ...rngTemperatureMass(mass),
      position,
      speed: speedVector,
    }
  })
}
export const disc = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  range *= 0.5
  const minRange = range / 10
  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    spherical.radius = minRange + (range - minRange) * Math.random()
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI / 2 + (0.1 - Math.random() * 0.2)
    const position = new Vector3().setFromSpherical(spherical)
    const speedVector = new Vector3(
      Math.cos(spherical.theta),
      0,
      -Math.sin(spherical.theta)
    )
      .normalize()
      .multiplyScalar(
        speed *
          Math.sqrt((gravitationalConstant * blackHoleMass) / spherical.radius)
      )
    return {
      ...rngTemperatureMass(mass),
      position,
      speed: speedVector,
    }
  })
}

export const solarSystem = ({ gravitationalConstant }) => {
  const spherical = new Spherical()
  spherical.theta = Math.PI / 2
  const sun = {
    temperature: colorEncode(1, 1, 0),
    mass: 1989000,
    position: new Vector3(),
    speed: new Vector3(),
  }

  const planete = (mass, radius, color) => {
    spherical.radius = radius
    spherical.phi = Math.random() * 2 * Math.PI
    return {
      temperature: colorEncode(...color),
      mass,
      position: new Vector3().setFromSpherical(spherical),
      speed: new Vector3(-Math.cos(spherical.phi), Math.sin(spherical.phi), 0)
        .normalize()
        .multiplyScalar(
          Math.sqrt((gravitationalConstant * sun.mass) / spherical.radius)
        ),
    }
  }

  const mercury = planete(0.3285, 57.909, [0.8, 0.8, 0.8])
  const venus = planete(4.867, 108.16, [0.8, 0.8, 0])
  const earth = planete(5.972, 149.6, [0.15, 0.25, 1])
  const mars = planete(0.639, 227.99, [1, 0.5, 0.25])
  const jupiter = planete(1898, 778.36, [1, 0.65, 0.46])
  const saturn = planete(568.3, 1433.5, [0.55, 0.54, 0.4])
  const uranus = planete(86.81, 2872.4, [0, 1, 1])
  const neptune = planete(102.4, 4498.4, [0, 0, 1])

  const satellite = (mass, radius, color, planete) => {
    spherical.radius = radius
    spherical.phi = Math.random() * 2 * Math.PI
    return {
      temperature: colorEncode(...color),
      mass,
      position: new Vector3().setFromSpherical(spherical).add(planete.position),
      speed: new Vector3(-Math.cos(spherical.phi), Math.sin(spherical.phi), 0)
        .normalize()
        .multiplyScalar(
          Math.sqrt((gravitationalConstant * planete.mass) / spherical.radius)
        )
        .add(planete.speed),
    }
  }
  const moon = satellite(0.07342, 0.3844, [0.9, 0.9, 0.9], earth)
  const io = satellite(0.089319, 0.4218, [0.9, 0.9, 0.9], jupiter)
  const europa = satellite(0.048, 0.6711, [0.9, 0.9, 0.9], jupiter)
  const ganymede = satellite(0.14819, 1.0704, [0.9, 0.9, 0.9], jupiter)
  const callisto = satellite(0.10759, 1.8827, [0.9, 0.9, 0.9], jupiter)
  const titan = satellite(0.13452, 1.22183, [0.9, 0.9, 0.9], saturn)
  const rhea = satellite(0.002306, 0.52704, [0.9, 0.9, 0.9], saturn)
  const iapetus = satellite(0.001805, 3.5613, [0.9, 0.9, 0.9], saturn)

  return [
    sun,
    mercury,
    venus,
    earth,
    moon,
    mars,
    jupiter,
    io,
    europa,
    ganymede,
    callisto,
    saturn,
    titan,
    rhea,
    iapetus,
    uranus,
    neptune,
  ]
}

export const collidingDisc = ({
  number,
  range,
  mass,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  const minRange = range / 10
  // TODO orient galaxies
  const orbs = new Array(number).fill().map((_, i) => {
    if (blackHoleMass && (i === 0 || i === ~~(number / 2 + 1))) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    spherical.radius = 0.2 * (minRange + (range - minRange) * Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI / 2 + (0.1 - Math.random() * 0.2)
    const position = new Vector3().setFromSpherical(spherical)
    const speed = new Vector3(
      Math.cos(spherical.theta),
      0,
      -Math.sin(spherical.theta)
    )
      .normalize()
      .multiplyScalar(
        Math.sqrt((gravitationalConstant * blackHoleMass) / spherical.radius)
      )
    const tilt =
      i > number / 2
        ? new Euler(-Math.PI / 8, 0, Math.PI / 6)
        : new Euler(Math.PI / 4, 0, 0)
    position.applyEuler(tilt)
    speed.applyEuler(tilt)
    return {
      ...rngTemperatureMass(mass),
      position,
      speed,
    }
  })
  const firstShift = new Vector3(range * 0.15, range * 0.15, -range * 0.25)
  const secondShift = new Vector3(-range * 0.15, -range * 0.15, range * 0.25)
  const firstDisc = orbs.slice(0, ~~(number / 2))
  const secondDisc = orbs.slice(~~(number / 2))
  firstDisc.forEach(orb => {
    orb.position.add(firstShift)
  })
  secondDisc.forEach(orb => {
    orb.position.add(secondShift)
  })
  return orbs
}

export const fountain = ({ number, range, mass, speed, blackHoleMass }) => {
  const spherical = new Spherical()
  range *= 0.5

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    spherical.radius = range / 10 + Math.random() * range
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI - (Math.random() * Math.PI) / 12
    const position = new Vector3().setFromSpherical(spherical)

    return {
      ...rngTemperatureMass(mass),
      position,
      speed: new Vector3(0, speed * Math.random(), 0),
    }
  })
}

export const eightCubes = ({ number, range, mass, speed, blackHoleMass }) => {
  const N = 8
  range *= 0.333
  const orbs = new Array(number).fill().map(() => ({
    ...rngTemperatureMass(mass),
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
  }))
  const cubes = new Array(N)
    .fill()
    .map((_, i) => orbs.slice(~~((i * number) / N), ~~(((i + 1) * number) / N)))
  const shifts = new Array(N).fill().map((_, i) =>
    new Vector3(
      ...i
        .toString(2)
        .padStart(3, '0')
        .split('')
        .map(s => (s === '0' ? -1 : 1))
    ).multiplyScalar(range)
  )

  cubes.forEach((cube, i) => {
    cube.forEach(orb => {
      orb.position.add(shifts[i])
    })
  })

  if (blackHoleMass) {
    orbs.push({
      temperature: 0,
      mass: blackHoleMass,
      position: new Vector3(),
      speed: new Vector3(),
    })
  }

  return orbs
}

export const plane = ({ number, range, mass, blackHoleMass }) => {
  range *= 0.25

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        temperature: 0,
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
      }
    }
    return {
      ...rngTemperatureMass(mass),
      position: new Vector3(
        range / 2 - Math.random() * range,
        range,
        range / 2 - Math.random() * range
      ),
      speed: new Vector3(),
    }
  })
}

export const teapot = ({ number, range, mass, blackHoleMass }) => {
  const segments = ~~(Math.sqrt(number / 32) - 1)
  const teapotGeometry = new TeapotGeometry(~~(range / 5), segments)
  const positions = teapotGeometry.attributes.position
  const orbs = new Array(positions.count).fill().map((_, i) => {
    return {
      ...rngTemperatureMass(mass),
      position: new Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      ),
      speed: new Vector3(),
    }
  })
  if (blackHoleMass) {
    orbs.push({
      temperature: 0,
      mass: blackHoleMass,
      position: new Vector3(),
      speed: new Vector3(),
    })
  }
  return orbs
}
