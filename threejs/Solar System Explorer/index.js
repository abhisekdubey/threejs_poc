import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import { createPlanet, createOrbitPath, planetData, dwarfPlanetData } from "./src/planets.js";

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 30, 60);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Create star background using your images
function createStarBackground() {
    const loader = new THREE.TextureLoader();
    
    // Create a large sphere for the background
    const geometry = new THREE.SphereGeometry(100, 32, 32);
    
    // Use the milky way image for the background
    const material = new THREE.MeshBasicMaterial({
        map: loader.load("./assets/textures/8k/stars_milky_way.jpg"),
        side: THREE.BackSide // Render on the inside of the sphere
    });
    
    const backgroundSphere = new THREE.Mesh(geometry, material);
    scene.add(backgroundSphere);
    
    // Add additional star field for more depth
    const starGeometry = new THREE.SphereGeometry(80, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({
        map: loader.load("./assets/textures/8k/stars.jpg"),
        transparent: true,
        opacity: 0.7,
        side: THREE.BackSide
    });
    
    const starField = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starField);
}

// Initialize star background
createStarBackground();

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2, 200);
sunLight.position.set(0, 0, 0);
sunLight.castShadow = true;
scene.add(sunLight);

// Create planets
const planets = {};
const orbitPaths = {};

// Create main planets
Object.entries(planetData).forEach(([name, data]) => {
    if (name !== 'sun') {
        const planet = createPlanet(name, data);
        planets[name] = planet;
        scene.add(planet);
        
        // Create orbit path
        const orbitPath = createOrbitPath(data.distance);
        orbitPaths[name] = orbitPath;
        scene.add(orbitPath);
    }
});

// Create dwarf planets
Object.entries(dwarfPlanetData).forEach(([name, data]) => {
    const planet = createPlanet(name, data);
    planets[name] = planet;
    scene.add(planet);
    
    // Create orbit path
    const orbitPath = createOrbitPath(data.distance);
    orbitPaths[name] = orbitPath;
    scene.add(orbitPath);
});

// Create Sun
const sun = createPlanet('sun', planetData.sun);
planets.sun = sun;
scene.add(sun);

// Raycaster for planet selection and hover
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedPlanet = null;
let hoveredPlanet = null;

// Tooltip element
const tooltip = document.getElementById('tooltip');

// Event listeners
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Check for hover
    checkHover(event);
});

window.addEventListener('click', () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(planets), true);
    
    if (intersects.length > 0) {
        const planet = getPlanetFromIntersection(intersects[0]);
        if (planet) {
            selectPlanet(planet);
        }
    }
});

// Helper function to get the correct planet name from intersection
function getPlanetFromIntersection(intersection) {
    let current = intersection.object;
    
    // Traverse up the parent chain to find the planet group
    while (current) {
        if (current.userData && current.userData.name) {
            // Skip moon, clouds, atmosphere, etc.
            if (current.userData.name === 'moon') {
                return 'earth'; // Moon belongs to Earth
            }
            if (current.userData.name !== 'moon') {
                return current.userData.name;
            }
        }
        current = current.parent;
    }
    
    return null;
}

// Fixed hover detection function
function checkHover(event) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(planets), true);
    
    if (intersects.length > 0) {
        const planetName = getPlanetFromIntersection(intersects[0]);
        if (planetName && planetName !== hoveredPlanet) {
            hoveredPlanet = planetName;
            showTooltip(event, planetName);
        }
    } else {
        if (hoveredPlanet) {
            hoveredPlanet = null;
            hideTooltip();
        }
    }
}

// Show simple tooltip
function showTooltip(event, planetName) {
    const data = planetData[planetName] || dwarfPlanetData[planetName];
    
    tooltip.textContent = data.name;
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY - 10 + 'px';
    tooltip.classList.add('show');
}

// Hide tooltip
function hideTooltip() {
    tooltip.classList.remove('show');
}

// UI Controls
document.getElementById('reset-camera').addEventListener('click', () => {
    camera.position.set(0, 30, 60);
    controls.reset();
});

let showOrbits = true;
document.getElementById('toggle-orbits').addEventListener('click', () => {
    showOrbits = !showOrbits;
    Object.values(orbitPaths).forEach(orbit => {
        orbit.visible = showOrbits;
    });
});

let rotationEnabled = true;
document.getElementById('toggle-rotation').addEventListener('click', () => {
    rotationEnabled = !rotationEnabled;
});

// Planet selection
function selectPlanet(planetName) {
    selectedPlanet = planetName;
    const data = planetData[planetName] || dwarfPlanetData[planetName];
    const planetInfo = document.getElementById('planet-info');
    
    planetInfo.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <div class="facts">
            ${data.facts.map(fact => `<p>• ${fact}</p>`).join('')}
        </div>
    `;
    planetInfo.classList.add('active');
    
    // Focus camera on planet
    const planet = planets[planetName];
    const targetPosition = planet.position.clone();
    targetPosition.y += 5;
    camera.position.lerp(targetPosition, 0.1);
}

// Animation loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const elapsed = clock.getElapsedTime();
    const delta = clock.getDelta();
    
    // Update planets
    Object.entries(planets).forEach(([name, planet]) => {
        const data = planetData[name] || dwarfPlanetData[name];
        
        if (rotationEnabled) {
            // Planet rotation
            planet.rotation.y += data.rotationSpeed;
            
            // Planet orbit (except Sun)
            if (name !== 'sun') {
                const angle = elapsed * data.orbitSpeed;
                planet.position.x = Math.cos(angle) * data.distance;
                planet.position.z = Math.sin(angle) * data.distance;
            }
        }
    });
    
    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
