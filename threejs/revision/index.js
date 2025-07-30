import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
// Create a WebGL renderer
// antialias: true enables smoother edges
// It can be set to false for better performance on lower-end devices
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75; // Field of view in degrees
const aspect = w / h; // Aspect ratio
const near = 0.1; // Near clipping plane
const far = 10; // Far clipping plane

// Create a perspective camera
// Parameters: fov, aspect ratio, near plane, far plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Create a scene
const scene = new THREE.Scene();

// Add orbit controls to the camera
// OrbitControls allows the camera to orbit around a target point
// It enables mouse or touch interactions to rotate, zoom, and pan the camera
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia) for smoother controls
controls.dampingFactor = 0.03; // Set the damping factor for smoother movement
controls.screenSpacePanning = false; // Disable panning in screen space
controls.maxPolarAngle = Math.PI / 2; // Limit the vertical rotation to prevent flipping
controls.minDistance = 1; // Set the minimum distance for zooming in
controls.maxDistance = 5; // Set the maximum distance for zooming out

const geometry = new THREE.IcosahedronGeometry(1.0, 2); // Create an Icosahedron geometry
// Parameters: radius, detail level (0 for basic shape)
// The detail level can be increased for more complex shapes
// For example, detail level 1 will create a more complex shape with more vertices
// Create a mesh with the geometry and a material
// The geometry defines the shape of the object, while the material defines how it looks
// You can use different materials like MeshBasicMaterial, MeshStandardMaterial, etc.
// MeshBasicMaterial is a simple material that does not react to lights
// MeshStandardMaterial is a more advanced material that reacts to lights and shadows
// The color is specified in hexadecimal format (0xRRGGBB)

const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xccff,
  wireframe: true, // Set to true to see the wireframe of the geometry
});

const standardMaterialmaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  //   wireframe: true,
  flatShading: true, // Set to true for flat shading, false for smooth shading
});

const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff, // Black color for the wireframe
  wireframe: true, // Enable wireframe mode
});

// Create a mesh by combining the geometry and material
const mesh = new THREE.Mesh(geometry, standardMaterialmaterial);

// Add the mesh to the scene
scene.add(mesh);

const wireMesh = new THREE.Mesh(geometry, wireMaterial);
wireMesh.scale.setScalar(1.001); // Scale the wireframe mesh slightly larger than the main mesh
// Add the wireframe mesh to the scene
// scene.add(wireMesh);
mesh.add(wireMesh); // Add the wireframe mesh as a child of the main mesh

// Create a directional light to illuminate the scene

// const light = new THREE.DirectionalLight(0xffffff, 1.0); // White light with intensity 1.0
// light.position.set(5, 15, 5); // Set the position of the light
// light.castShadow = true; // Enable shadows for the light

const light = new THREE.HemisphereLight(0x0099ff, 0xaa5500); // Hemisphere light with white sky color and black ground color
// Hemisphere light simulates light coming from the sky and ground
// It creates a soft ambient light effect, which is useful for outdoor scenes
// The first color is the sky color, and the second color is the ground color
// The intensity of the light is set to 1.0, which is a standard brightness
// You can adjust the intensity to make the light brighter or dimmer
// The light will illuminate the scene evenly from above, creating a natural lighting effect
// Hemisphere light does not cast shadows, so it is useful for scenes where shadows are not needed

// Add the light to the scene
scene.add(light);

function animate(t = 0) {
  requestAnimationFrame(animate); // Request the next frame to animate
  //   mesh.rotation.x += 0.01; // Rotate the mesh around the x-axis
    mesh.rotation.y = t * 0.0001; // Rotate the mesh around the y-axis
  //   mesh.rotation.z += 0.01; // Rotate the mesh around the z-axis
  //   mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
  // Scale the mesh based on time
  // This creates a pulsating effect by changing the scale over time
  // The scale is set to a value between 0.5 and 1.5
  renderer.render(scene, camera); // Render the scene from the perspective of the camera
  controls.update(); // Update the controls to reflect any changes
}

// Start the animation loop
animate();
