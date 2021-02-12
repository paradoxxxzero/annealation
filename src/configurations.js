import { Color, Spherical, Vector3, Euler } from 'three'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'

export const cube = ({
  number,
  range,
  speed,
  mass,
  blackHoleMass,
  saturation,
  luminance,
}) => {
  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    return {
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
    }
  })
}

export const sphere = ({
  number,
  range,
  mass,
  blackHoleMass,
  saturation,
  luminance,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range * Math.cbrt(Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.acos(2 * Math.random() - 1.0)

    const position = new Vector3().setFromSpherical(spherical)
    const x = 1 - 2 * Math.random()
    const y = 1 - 2 * Math.random()
    const z = -(x * position.x + y * position.y) / position.z
    const speed = new Vector3(x, y, z)
      .normalize()
      .multiplyScalar(
        Math.sqrt((gravitationalConstant * blackHoleMass) / spherical.radius)
      )
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position,
      speed,
      acceleration: new Vector3(),
    }
  })
}

export const harmonicSphere = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  saturation,
  luminance,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
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
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position,
      speed: speedVector,
      acceleration: new Vector3(),
    }
  })
}
export const disc = ({
  number,
  range,
  mass,
  blackHoleMass,
  saturation,
  luminance,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range * Math.sqrt(Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI / 2 - Math.random() * 0.2 //Math.PI / 2 + (Math.PI / 16) * Math.sin(spherical.theta)
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
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position,
      speed,
      acceleration: new Vector3(),
    }
  })
}

export const solarSystem = ({ gravitationalConstant }) => {
  const spherical = new Spherical()
  spherical.theta = Math.PI / 2
  const sun = {
    color: new Color(1, 1, 0),
    mass: 1989000,
    position: new Vector3(),
    speed: new Vector3(),
    acceleration: new Vector3(),
  }

  const planete = (mass, radius, color) => {
    spherical.radius = radius
    spherical.phi = Math.random() * 2 * Math.PI
    return {
      color,
      mass,
      position: new Vector3().setFromSpherical(spherical),
      speed: new Vector3(-Math.cos(spherical.phi), Math.sin(spherical.phi), 0)
        .normalize()
        .multiplyScalar(
          Math.sqrt((gravitationalConstant * sun.mass) / spherical.radius)
        ),
      acceleration: new Vector3(),
    }
  }

  const mercury = planete(0.3285, 57.909, new Color(0.8, 0.8, 0.8))
  const venus = planete(4.867, 108.16, new Color(0.8, 0.8, 0))
  const earth = planete(5.972, 149.6, new Color(0.15, 0.25, 1))
  const mars = planete(0.639, 227.99, new Color(1, 0.5, 0.25))
  const jupiter = planete(1898, 778.36, new Color(1, 0.65, 0.46))
  const saturn = planete(568.3, 1433.5, new Color(0.55, 0.54, 0.4))
  const uranus = planete(86.81, 2872.4, new Color(0, 1, 1))
  const neptune = planete(102.4, 4498.4, new Color(0, 0, 1))

  const satellite = (mass, radius, color, planete) => {
    spherical.radius = radius
    spherical.phi = Math.random() * 2 * Math.PI
    return {
      color,
      mass,
      position: new Vector3().setFromSpherical(spherical).add(planete.position),
      speed: new Vector3(-Math.cos(spherical.phi), Math.sin(spherical.phi), 0)
        .normalize()
        .multiplyScalar(
          Math.sqrt((gravitationalConstant * planete.mass) / spherical.radius)
        ),
      acceleration: new Vector3(),
    }
  }
  const moon = satellite(0.07342, 0.3844, new Color(1, 1, 1), earth)

  return [
    sun,
    mercury,
    venus,
    earth,
    moon,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  ]
}

export const collidingDisc = ({
  number,
  range,
  mass,
  blackHoleMass,
  saturation,
  luminance,
  gravitationalConstant,
}) => {
  const spherical = new Spherical()
  // TODO orient galaxies
  const orbs = new Array(number).fill().map((_, i) => {
    if (blackHoleMass && (i === 0 || i === ~~(number / 2 + 1))) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range * Math.sqrt(Math.random())
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI / 2 - Math.random() * 0.2 //Math.PI / 2 + (Math.PI / 16) * Math.sin(spherical.theta)
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
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position,
      speed,
      acceleration: new Vector3(),
    }
  })
  const firstShift = new Vector3(750, 750, -1000)
  const secondShift = new Vector3(-750, -750, 1000)
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

export const fountain = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  saturation,
  luminance,
}) => {
  const spherical = new Spherical()

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    spherical.radius = range / 10 + Math.random() * range
    spherical.theta = Math.random() * 2 * Math.PI
    spherical.phi = Math.PI - (Math.random() * Math.PI) / 12
    const position = new Vector3().setFromSpherical(spherical)

    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position,
      speed: new Vector3(0, speed * Math.random(), 0),
      acceleration: new Vector3(),
    }
  })
}

export const eightCubes = ({
  number,
  range,
  mass,
  speed,
  blackHoleMass,
  saturation,
  luminance,
}) => {
  const N = 8
  const orbs = new Array(number).fill().map(() => ({
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
    ).multiplyScalar(500)
  )

  cubes.forEach((cube, i) => {
    cube.forEach(orb => {
      orb.position.add(shifts[i])
    })
  })

  if (blackHoleMass) {
    orbs.push({
      color: new Color(1, 1, 1),
      mass: blackHoleMass,
      position: new Vector3(),
      speed: new Vector3(),
      acceleration: new Vector3(),
    })
  }

  return orbs
}

export const plane = ({
  number,
  range,
  mass,
  blackHoleMass,
  saturation,
  luminance,
}) => {
  const tilt = new Euler(-Math.PI / 16, Math.PI / 4, 0, 'YXZ')

  return new Array(number).fill().map((_, i) => {
    if (i === 0 && blackHoleMass) {
      return {
        color: new Color(1, 1, 1),
        mass: blackHoleMass,
        position: new Vector3(),
        speed: new Vector3(),
        acceleration: new Vector3(),
      }
    }
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position: new Vector3(
        range / 2 - Math.random() * range,
        range * 0.75,
        range / 2 - Math.random() * range
      ).applyEuler(tilt),
      speed: new Vector3(),
      acceleration: new Vector3(),
    }
  })
}

export const teapot = ({
  number,
  range,
  mass,
  blackHoleMass,
  saturation,
  luminance,
}) => {
  const segments = ~~(Math.sqrt(number / 32) - 1)
  const teapotGeometry = new TeapotGeometry(range, segments)
  const positions = teapotGeometry.attributes.position
  const orbs = new Array(positions.count).fill().map((_, i) => {
    return {
      color: new Color().setHSL(Math.random(), saturation, luminance),
      // mass 10^31 kg
      mass: Math.random() * mass,
      // distance 10^16 m
      position: new Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      ),
      speed: new Vector3(),
      acceleration: new Vector3(),
    }
  })
  if (blackHoleMass) {
    orbs.push({
      color: new Color(1, 1, 1),
      mass: blackHoleMass,
      position: new Vector3(),
      speed: new Vector3(),
      acceleration: new Vector3(),
    })
  }
  return orbs
}
