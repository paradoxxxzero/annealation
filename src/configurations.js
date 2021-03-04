import { Spherical, Vector3, Euler } from 'three'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'
import { colorEncode, rngTemperatureMass } from './helpers'

const blackHole = blackHoleMass =>
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

export const cube = ({ number, range, speed, mass, blackHoleMass }) => {
  return new Array(number)
    .fill()
    .map(() => ({
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
    }))
    .concat(blackHole(blackHoleMass))
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
    .concat(blackHole(blackHoleMass))
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

  return new Array(number)
    .fill()
    .map(() => {
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
            Math.sqrt(
              (gravitationalConstant * blackHoleMass) / spherical.radius
            )
        )
      return {
        ...rngTemperatureMass(mass),
        position,
        speed: speedVector,
      }
    })
    .concat(blackHole(blackHoleMass))
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

  return new Array(number)
    .fill()
    .map(() => {
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
    .concat(blackHole(blackHoleMass))
}

export const expandingSphere = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
}) => {
  const spherical = new Spherical()
  range *= 0.5

  return new Array(number)
    .fill()
    .map(() => {
      spherical.radius = range * Math.cbrt(Math.random())
      spherical.theta = Math.random() * 2 * Math.PI
      spherical.phi = Math.acos(2 * Math.random() - 1.0)

      const position = new Vector3().setFromSpherical(spherical)
      const speedVector = position
        .clone()
        .normalize()
        .multiplyScalar(Math.random() * speed)
      return {
        ...rngTemperatureMass(mass),
        position,
        speed: speedVector,
      }
    })
    .concat(blackHole(blackHoleMass))
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
  const minRange = range / 12
  return new Array(number)
    .fill()
    .map(() => {
      spherical.radius = minRange + (range - minRange) * Math.random()
      spherical.theta = Math.random() * 2 * Math.PI
      spherical.phi = Math.PI / 2
      const position = new Vector3().setFromSpherical(spherical)
      const speedVector = new Vector3(
        Math.cos(spherical.theta),
        0,
        -Math.sin(spherical.theta)
      )
        .normalize()
        .multiplyScalar(
          speed *
            Math.sqrt(
              (gravitationalConstant * blackHoleMass) / spherical.radius
            )
        )
      return {
        ...rngTemperatureMass(mass),
        position,
        speed: speedVector,
      }
    })
    .concat(blackHole(blackHoleMass))
}

export const bulb = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  range *= 0.5
  return new Array(number)
    .fill()
    .map(() => {
      spherical.radius = range * Math.random()
      spherical.theta = Math.random() * 2 * Math.PI
      spherical.phi =
        (Math.PI / 2) *
        (1 +
          Math.pow(1 - spherical.radius / range, 3) * 2 * (0.5 - Math.random()))

      spherical.radius += (Math.abs(Math.cos(spherical.phi)) * range) / 8
      const position = new Vector3().setFromSpherical(spherical)
      const speedVector = new Vector3(
        Math.cos(spherical.theta),
        0,
        -Math.sin(spherical.theta)
      )
        .normalize()
        .multiplyScalar(
          speed *
            Math.sqrt(
              (gravitationalConstant * blackHoleMass) / spherical.radius
            )
        )
      return {
        ...rngTemperatureMass(mass),
        position,
        speed: speedVector,
      }
    })
    .concat(blackHole(blackHoleMass))
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
  speed,
  blackHoleMass,
  gravitationalConstant,
}) => {
  const halfNumber = ~~(number / 2)

  const firstShift = new Vector3(range * 0.15, range * 0.15, -range * 0.25)
  const firstEuler = new Euler(Math.PI / 4, 0, 0)
  const firstSpeed = new Vector3(-speed, -speed, 0)
  const firstDisc = disc({
    number: halfNumber,
    range: range / 3,
    mass,
    speed: 1,
    blackHoleMass,
    gravitationalConstant,
  })
  firstDisc.forEach(({ position, speed }) => {
    position.applyEuler(firstEuler).add(firstShift)
    speed.applyEuler(firstEuler).add(firstSpeed)
  })

  const secondShift = new Vector3(-range * 0.15, -range * 0.15, range * 0.25)
  const secondEuler = new Euler(-Math.PI / 8, 0, 0)
  const secondSpeed = new Vector3(speed, 0, 0)
  const secondDisc = disc({
    number: halfNumber,
    range: range / 2,
    mass,
    speed: 1,
    blackHoleMass,
    gravitationalConstant,
  })
  secondDisc.forEach(({ position, speed }) => {
    position.applyEuler(secondEuler).add(secondShift)
    speed.applyEuler(secondEuler).add(secondSpeed)
  })

  return [...firstDisc, ...secondDisc]
}

export const fountain = ({ number, range, mass, speed, blackHoleMass }) => {
  const spherical = new Spherical()
  range *= 0.5

  return new Array(number)
    .fill()
    .map(() => {
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
    .concat(blackHole(blackHoleMass))
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

  return new Array(number)
    .fill()
    .map(() => {
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
    .concat(blackHole(blackHoleMass))
}

export const teapot = ({ number, range, mass, blackHoleMass }) => {
  const segments = ~~(Math.sqrt(number / 32) - 1)
  const teapotGeometry = new TeapotGeometry(~~(range / 5), segments)
  const positions = teapotGeometry.attributes.position
  return new Array(positions.count)
    .fill()
    .map((_, i) => {
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
    .concat(blackHole(blackHoleMass))
}

export const test = ({ mass }) => [
  {
    ...rngTemperatureMass(mass),
    position: new Vector3(1, 2, 3),
    speed: new Vector3(),
  },
  {
    ...rngTemperatureMass(mass),
    position: new Vector3(1000, 1000, -500),
    speed: new Vector3(),
  },
  {
    ...rngTemperatureMass(mass),
    position: new Vector3(1000, 1000, -500),
    speed: new Vector3(),
  },
]
