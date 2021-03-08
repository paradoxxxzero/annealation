export default {
  preset: 'Cube',
  remembered: {
    Cube: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        number: 3000,
        range: 1000,
        speed: 5,
        mass: 10,
        blackHoleMass: 0,
        scale: 35,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.5,
        softening: 10,
        collisions: true,
        collisionThreshold: 25,
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    Tesseract: {
      0: {
        dimensions: 4,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 1,
        yz: 0,
        yw: 1,
        zw: 1,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        configuration: 'tesseract',
        number: 3000,
        range: 1500,
        speed: 0,
        mass: 10,
        blackHoleMass: 0,
        scale: 40,
        colorMode: 'Temperature',
        gravitationalConstant: 100,
        softening: 100,
        simulationSpeed: 2,
        collisions: true,
        collisionThreshold: 25,
        escapeDistance: 100000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    FrozenTesseract: {
      0: {
        dimensions: 4,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 6,
        zw: 7,
        backend: 'rust_none',
        threads: navigator.hardwareConcurrency - 1,
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
        configuration: 'tesseract',
        number: 5000,
        range: 1000,
        speed: 0,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        softening: 30,
        simulationSpeed: 0,
        collisions: false,
        collisionThreshold: 25,
        escapeDistance: 100000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    Wall: {
      0: {
        dimensions: 2,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 6,
        zw: 7,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        configuration: 'plane2',
        number: 10000,
        range: 3000,
        speed: 0,
        mass: 10,
        blackHoleMass: 0,
        scale: 20,
        colorMode: 'Temperature',
        gravitationalConstant: 1,
        softening: 35,
        simulationSpeed: 0.5,
        collisions: false,
        collisionThreshold: 25,
        escapeDistance: 100000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    RegularCube: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    Galaxy: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        creationMode: false,
      },
    },
    DualGalaxy: {
      0: {
        dimensions: 4,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 2,
        xz: 3,
        xw: 5,
        yz: 2.5,
        yw: 1.5,
        zw: 3.5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        number: 4000,
        range: 1000,
        speed: 1,
        mass: 10,
        blackHoleMass: 100000,
        scale: 28,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.25,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 5000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    BulbGalaxy: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        creationMode: false,
      },
    },
    SlowGalaxy: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        creationMode: false,
      },
    },
    Sphere: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        number: 4000,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 500000,
        creationMode: false,
      },
    },
    HarmonicSphere: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        number: 5000,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 500000,
        creationMode: false,
      },
    },
    ProtoSolarSystem: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 2000000,
        creationMode: false,
      },
    },
    CollidingGalaxies: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 500000,
        creationMode: false,
      },
    },
    CollidingGalaxiesBulb: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        configuration: 'collidingBulb',
        number: 8000,
        range: 3000,
        speed: 10,
        mass: 10,
        blackHoleMass: 500000,
        scale: 20,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 0.05,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 2000,
        blackHoleMassThreshold: 500000,
        creationMode: false,
      },
    },
    Fountain: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    EightCubes: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 2000,
        blackHoleMassThreshold: 2500,
        creationMode: false,
      },
    },
    Plane: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 500000,
        creationMode: false,
      },
    },
    Teapot: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    TeapotWithBlackHole: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_p2p',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    Ekusupuroshon: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'js_none',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    Ekusupuroshon2: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'js_none',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    LittleExpand: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
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
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
      },
    },
    BigSphere: {
      0: {
        dimensions: 3,
        zFov: 45,
        wFov: 45,
        w: 1500,
        xy: 0,
        xz: 0,
        xw: 5,
        yz: 0,
        yw: 5,
        zw: 5,
        backend: 'rust_bh',
        threads: navigator.hardwareConcurrency - 1,
        theta: 2,
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
        number: 20000,
        range: 2000,
        speed: 0,
        mass: 10,
        blackHoleMass: 0,
        scale: 30,
        colorMode: 'Temperature',
        gravitationalConstant: 6.67,
        simulationSpeed: 1.0,
        softening: 10,
        collisions: false,
        collisionThreshold: 10,
        escapeDistance: 2000,
        blackHoleMassThreshold: 10000,
        creationMode: false,
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
