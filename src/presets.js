export default {
  preset: 'Cube',
  remembered: {
    Cube: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'cube',
        number: 1250,
        range: 1000,
        speed: 5,
        mass: 10,
        blackHoleMass: 0,
        scale: 50,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        softening: 10,
        collisions: true,
        collisionThreshold: 25,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    RegularCube: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'regularCube',
        number: 1250,
        range: 1000,
        speed: 0,
        mass: 1,
        blackHoleMass: 0,
        scale: 50,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        softening: 10,
        collisions: false,
        collisionThreshold: 25,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    Galaxy: {
      0: {
        backend: 'js_bh',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'disc',
        number: 2000,
        range: 1500,
        speed: 1,
        mass: 10,
        blackHoleMass: 100000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 1000,
        blackHoleMassThreshold: 10000,
      },
    },
    BulbGalaxy: {
      0: {
        backend: 'js_bh',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'bulb',
        number: 2000,
        range: 1500,
        speed: 1,
        mass: 10,
        blackHoleMass: 100000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: true,
        collisionThreshold: 2,
        escapeDistance: 800,
        blackHoleMassThreshold: 10000,
      },
    },
    SlowGalaxy: {
      0: {
        backend: 'js_bh',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'disc',
        number: 2000,
        range: 1500,
        speed: 0.75,
        mass: 10,
        blackHoleMass: 100000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 2,
        escapeDistance: 1000,
        blackHoleMassThreshold: 10000,
      },
    },
    Sphere: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'sphere',
        number: 1000,
        range: 1500,
        speed: 1,
        mass: 10,
        blackHoleMass: 500000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.1,
        softening: 50,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
    HarmonicSphere: {
      0: {
        backend: 'js_p2p_threaded',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'harmonicSphere',
        number: 4000,
        range: 1500,
        speed: 15,
        mass: 10,
        blackHoleMass: 500000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.2,
        softening: 50,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
    ProtoSolarSystem: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
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
        colorMode: 'ColorCoded',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.001,
        softening: 0,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 2000000,
      },
    },
    CollidingGalaxies: {
      0: {
        backend: 'js_bh',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 2,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'collidingDisc',
        number: 4000,
        range: 3000,
        speed: 10,
        mass: 10,
        blackHoleMass: 500000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.075,
        softening: 10,
        collisions: true,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
    Fountain: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'fountain',
        number: 1000,
        range: 2000,
        speed: 5,
        mass: 20,
        blackHoleMass: 100000,
        scale: 15,
        colorMode: 'Rainbow',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.05,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    EightCubes: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'eightCubes',
        number: 1000,
        range: 1000,
        speed: 5,
        mass: 10,
        blackHoleMass: 0,
        scale: 50,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        softening: 10,
        collisions: true,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 2500,
      },
    },
    Plane: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 2,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'plane',
        number: 1250,
        range: 3000,
        speed: 15,
        mass: 10,
        blackHoleMass: 500000,
        scale: 15,
        colorMode: 'White',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.1,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 500000,
      },
    },
    Teapot: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'teapot',
        number: 2000,
        range: 2500,
        speed: 15,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    TeapotWithBlackHole: {
      0: {
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'teapot',
        number: 2000,
        range: 2500,
        speed: 15,
        mass: 10,
        blackHoleMass: 25000,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    Ekusupuroshon: {
      0: {
        backend: 'js_none',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 3,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'expandingSphere',
        number: 50000,
        range: 10,
        speed: 100,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    Ekusupuroshon2: {
      0: {
        backend: 'js_none',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 3,
        theta: 1,
        autoRotate: true,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'expandingSphere',
        number: 1000000,
        range: 10,
        speed: 50,
        mass: 10,
        blackHoleMass: 0,
        scale: 5,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    LittleExpand: {
      0: {
        backend: 'js_p2p_sab',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 3,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'expandingSphere',
        number: 3000,
        range: 10,
        speed: 40,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
      },
    },
    BigSphere: {
      0: {
        backend: 'js_fmm',
        threads: navigator.hardwareConcurrency - 1,
        resolution: 7,
        theta: 1,
        autoRotate: false,
        fxaa: true,
        bloom: true,
        bloomStrength: 1.5,
        bloomRadius: 0.75,
        bloomThreshold: 0,
        bloomExposure: 0.75,
        afterImage: false,
        afterImageDamp: 0.75,
        configuration: 'sphere',
        number: 15000,
        range: 2000,
        speed: 0,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 2.0,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 10000,
        blackHoleMassThreshold: 10000,
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
