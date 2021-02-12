export default {
  preset: 'RandomCube',
  remembered: {
    RandomCube: {
      0: {
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'randomCube',
        number: 1000,
        range: 1000,
        speed: 15,
        mass: 10,
        blackHoleMass: 0,
        scale: 50,
        saturation: 1,
        luminance: 0.5,
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        collisions: true,
        collisionBase: 100,
        collisionScale: 100,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    Galaxy: {
      0: {
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'randomDisc',
        number: 1000,
        range: 1000,
        speed: 15,
        mass: 10,
        blackHoleMass: 100000,
        scale: 30,
        saturation: 1,
        luminance: 0.5,
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        collisions: false,
        collisionBase: 100,
        collisionScale: 100,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    RandomSphere: {
      0: {
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'randomSphere',
        number: 1000,
        range: 500,
        speed: 15,
        mass: 10,
        blackHoleMass: 500000,
        scale: 30,
        saturation: 1,
        luminance: 0.5,
        gravitationalConstant: 6.67,
        simulationSpeed: 0.1,
        collisions: false,
        collisionBase: 50,
        collisionScale: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
    ProtoSolarSystem: {
      0: {
        fxaa: true,
        bloom: false,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 1,
        configuration: 'solarSystem',
        number: 1000,
        range: 1000,
        speed: 15,
        mass: 10,
        blackHoleMass: 0,
        scale: 3,
        saturation: 1,
        luminance: 0.5,
        gravitationalConstant: 6.67,
        simulationSpeed: 0.01,
        collisions: false,
        collisionBase: 100,
        collisionScale: 100,
        escapeDistance: 10000,
        blackHoleMassThreshold: 2000000,
      },
    },
    CollidingGalaxies: {
      0: {
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'collidingDisc',
        number: 1000,
        range: 1000,
        speed: 15,
        mass: 10,
        blackHoleMass: 500000,
        scale: 30,
        saturation: 1,
        luminance: 0.25,
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        collisions: true,
        collisionBase: 200,
        collisionScale: 1,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
  },
  closed: false,
  folders: {
    'Render fx': {
      preset: 'Default',
      closed: true,
      folders: {},
    },
    Configuration: {
      preset: 'Default',
      closed: false,
      folders: {},
    },
    Simulation: {
      preset: 'Default',
      closed: false,
      folders: {},
    },
  },
}
