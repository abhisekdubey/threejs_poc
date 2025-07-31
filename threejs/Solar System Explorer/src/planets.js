import * as THREE from 'three';

// Enhanced planet data with all new planets
export const planetData = {
    sun: {
        name: "Sun",
        radius: 3, // Make it bigger
        distance: 0,
        rotationSpeed: 0.004,
        orbitSpeed: 0,
        texture: "./assets/textures/8k/sun.jpg",
        description: "Our star, the Sun, is a massive ball of hydrogen and helium that provides light and energy to our solar system.",
        facts: ["Diameter: 1.4 million km", "Surface Temperature: 5,500°C", "Age: 4.6 billion years"]
    },
    mercury: {
        name: "Mercury",
        radius: 0.38,
        distance: 8,
        rotationSpeed: 0.004,
        orbitSpeed: 0.04,
        texture: "./assets/textures/8k/mercury.jpg",
        description: "The smallest and innermost planet, Mercury is a rocky world with extreme temperature variations.",
        facts: ["Distance from Sun: 57.9 million km", "Surface Temperature: -180°C to 430°C", "Year Length: 88 Earth days"]
    },
    venus: {
        name: "Venus",
        radius: 0.95,
        distance: 12,
        rotationSpeed: 0.002,
        orbitSpeed: 0.015,
        texture: "./assets/textures/8k/venus_surface.jpg",
        atmosphere: "./assets/textures/4k/venus_atmosphere.jpg",
        description: "Venus is Earth's sister planet, similar in size but with a toxic atmosphere and extreme greenhouse effect.",
        facts: ["Distance from Sun: 108.2 million km", "Surface Temperature: 462°C", "Atmosphere: 96% CO2"]
    },
    earth: {
        name: "Earth",
        radius: 1,
        distance: 16,
        rotationSpeed: 0.01,
        orbitSpeed: 0.01,
        texture: "./assets/textures/8k/earth_daymap.jpg",
        clouds: "./assets/textures/8k/earth_clouds.jpg",
        moon: "./assets/textures/8k/moon.jpg",
        description: "Our home planet, Earth is the only known world with life, liquid water, and a protective atmosphere.",
        facts: ["Distance from Sun: 149.6 million km", "Surface Temperature: -88°C to 58°C", "Year Length: 365.25 days"]
    },
    mars: {
        name: "Mars",
        radius: 0.53,
        distance: 20,
        rotationSpeed: 0.008,
        orbitSpeed: 0.008,
        texture: "./assets/textures/8k/mars.jpg",
        description: "The Red Planet, Mars has the largest volcano and canyon in the solar system.",
        facts: ["Distance from Sun: 227.9 million km", "Surface Temperature: -140°C to 20°C", "Moons: 2 (Phobos, Deimos)"]
    },
    jupiter: {
        name: "Jupiter",
        radius: 2.5,
        distance: 28,
        rotationSpeed: 0.04,
        orbitSpeed: 0.002,
        texture: "./assets/textures/8k/jupiter.jpg",
        description: "The largest planet, Jupiter is a gas giant with a Great Red Spot storm that has raged for centuries.",
        facts: ["Distance from Sun: 778.5 million km", "Surface Temperature: -110°C", "Moons: 95+"]
    },
    saturn: {
        name: "Saturn",
        radius: 2.1,
        distance: 36,
        rotationSpeed: 0.038,
        orbitSpeed: 0.0009,
        texture: "./assets/textures/8k/saturn.jpg",
        rings: "./assets/textures/8k/saturn_ring_alpha.png",
        description: "Famous for its spectacular ring system, Saturn is another gas giant with beautiful icy rings.",
        facts: ["Distance from Sun: 1.4 billion km", "Surface Temperature: -140°C", "Ring System: 7 main rings"]
    },
    uranus: {
        name: "Uranus",
        radius: 1.8,
        distance: 44,
        rotationSpeed: 0.03,
        orbitSpeed: 0.0004,
        texture: "./assets/textures/2k/uranus.jpg",
        description: "The ice giant Uranus rotates on its side, with its axis tilted at 98 degrees.",
        facts: ["Distance from Sun: 2.9 billion km", "Surface Temperature: -195°C", "Moons: 27"]
    },
    neptune: {
        name: "Neptune",
        radius: 1.7,
        distance: 52,
        rotationSpeed: 0.032,
        orbitSpeed: 0.0001,
        texture: "./assets/textures/2k/neptune.jpg",
        description: "The windiest planet, Neptune has the fastest winds in the solar system reaching 2,100 km/h.",
        facts: ["Distance from Sun: 4.5 billion km", "Surface Temperature: -200°C", "Moons: 14"]
    }
};

// Dwarf planets data
export const dwarfPlanetData = {
    ceres: {
        name: "Ceres",
        radius: 0.07,
        distance: 60,
        rotationSpeed: 0.01,
        orbitSpeed: 0.00005,
        texture: "./assets/textures/4k/ceres_fictional.jpg",
        description: "The largest object in the asteroid belt, Ceres is classified as a dwarf planet.",
        facts: ["Location: Asteroid Belt", "Diameter: 940 km", "Discovery: 1801"]
    },
    haumea: {
        name: "Haumea",
        radius: 0.12,
        distance: 68,
        rotationSpeed: 0.02,
        orbitSpeed: 0.00003,
        texture: "./assets/textures/4k/haumea_fictional.jpg",
        description: "An egg-shaped dwarf planet with a rapid rotation and two moons.",
        facts: ["Location: Kuiper Belt", "Rotation: 4 hours", "Shape: Ellipsoid"]
    },
    makemake: {
        name: "Makemake",
        radius: 0.11,
        distance: 76,
        rotationSpeed: 0.015,
        orbitSpeed: 0.00002,
        texture: "./assets/textures/4k/makemake_fictional.jpg",
        description: "A bright dwarf planet in the Kuiper Belt with no known moons.",
        facts: ["Location: Kuiper Belt", "Surface: Methane ice", "Discovery: 2005"]
    },
    eris: {
        name: "Eris",
        radius: 0.13,
        distance: 84,
        rotationSpeed: 0.012,
        orbitSpeed: 0.00001,
        texture: "./assets/textures/4k/eris_fictional.jpg",
        description: "The most massive dwarf planet, Eris is slightly larger than Pluto.",
        facts: ["Location: Kuiper Belt", "Distance: 96 AU", "Discovery: 2005"]
    }
};

export function createPlanet(name, data) {
    const group = new THREE.Group();
    
    // Special handling for the Sun
    if (name === 'sun') {
        return createSun(data);
    }
    
    // Create planet geometry
    const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
    const loader = new THREE.TextureLoader();
    
    // Create material with texture
    const material = new THREE.MeshStandardMaterial({
        map: loader.load(data.texture),
        roughness: 0.8,
        metalness: 0.1
    });
    
    const planet = new THREE.Mesh(geometry, material);
    planet.userData = { name, data };
    group.add(planet);
    
    // Add atmosphere for Venus
    if (name === 'venus' && data.atmosphere) {
        const atmosphereGeometry = new THREE.SphereGeometry(data.radius + 0.05, 32, 32);
        const atmosphereMaterial = new THREE.MeshStandardMaterial({
            map: loader.load(data.atmosphere),
            transparent: true,
            opacity: 0.6
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        group.add(atmosphere);
    }
    
    // Add clouds for Earth
    if (name === 'earth' && data.clouds) {
        const cloudGeometry = new THREE.SphereGeometry(data.radius + 0.02, 32, 32);
        const cloudMaterial = new THREE.MeshStandardMaterial({
            map: loader.load(data.clouds),
            transparent: true,
            opacity: 0.4
        });
        const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        group.add(clouds);
    }
    
    // Add Moon for Earth
    if (name === 'earth' && data.moon) {
        const moonGeometry = new THREE.SphereGeometry(0.27, 16, 16);
        const moonMaterial = new THREE.MeshStandardMaterial({
            map: loader.load(data.moon),
            roughness: 0.9,
            metalness: 0.1
        });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.position.set(2.5, 0, 0);
        moon.userData = { name: 'moon', data: { name: 'Moon', description: 'Earth\'s only natural satellite.' } };
        group.add(moon);
    }
    
    // Add rings for Saturn
    if (name === 'saturn' && data.rings) {
        const ringGeometry = new THREE.RingGeometry(data.radius + 0.5, data.radius + 2, 64);
        const ringMaterial = new THREE.MeshStandardMaterial({
            map: loader.load(data.rings),
            transparent: true,
            side: THREE.DoubleSide
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        group.add(rings);
    }
    
    // Position planet at its orbital distance
    group.position.x = data.distance;
    
    return group;
}

// New function specifically for creating the Sun
function createSun(data) {
    const group = new THREE.Group();
    const loader = new THREE.TextureLoader();
    
    // Create the main sun sphere
    const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        map: loader.load(data.texture),
        emissive: 0xffff00,
        emissiveIntensity: 0.3
    });
    
    const sun = new THREE.Mesh(geometry, material);
    sun.userData = { name: 'sun', data };
    group.add(sun);
    
    // Add a glowing outer sphere
    const glowGeometry = new THREE.SphereGeometry(data.radius + 0.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        transparent: true,
        opacity: 0.3,
        side: THREE.BackSide
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);
    
    // Add a larger outer glow
    const outerGlowGeometry = new THREE.SphereGeometry(data.radius + 1, 32, 32);
    const outerGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
    });
    
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    group.add(outerGlow);
    
    // Add point light at the center
    const sunLight = new THREE.PointLight(0xffffff, 3, 100);
    sunLight.position.set(0, 0, 0);
    group.add(sunLight);
    
    return group;
}

export function createOrbitPath(distance) {
    const points = [];
    const segments = 64;
    
    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(
            Math.cos(angle) * distance,
            0,
            Math.sin(angle) * distance
        ));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
        color: 0x444444,
        transparent: true,
        opacity: 0.3
    });
    
    return new THREE.Line(geometry, material);
} 