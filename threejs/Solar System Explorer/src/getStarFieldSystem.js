import * as THREE from 'three';

export function getStarFieldSystem(scene) {
  const stars = createTwinklingStars();
  const shootingStars = [];

  scene.add(stars.points);

  function createTwinklingStars({
    count = 1500,
    spread = 500,
    size = 1.5,
    color = 0xffffff
  } = {}) {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const opacities = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      positions.push(x, y, z);
      opacities.push(Math.random());
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('aOpacity', new THREE.Float32BufferAttribute(opacities, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uSize: { value: size }
      },
      vertexShader: `
        attribute float aOpacity;
        uniform float uTime;
        uniform float uSize;
        varying float vOpacity;
        void main() {
          vOpacity = aOpacity + 0.5 * sin(uTime + position.x * 0.5 + position.y * 0.3);
          vOpacity = clamp(vOpacity, 0.1, 1.0);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vOpacity;
        void main() {
          gl_FragColor = vec4(uColor, vOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    return {
      points,
      update: (elapsed) => {
        material.uniforms.uTime.value = elapsed;
      },
    };
  }

  function spawnShootingStar() {
    const geometry = new THREE.SphereGeometry(0.2, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });    
    const star = new THREE.Mesh(geometry, material);
    star.position.set(
      (Math.random() - 0.5) * 50,
      Math.random() * 25 + 20,
      -10 // instead of -100
    );
    star.userData = {
      velocity: new THREE.Vector3(Math.random() * -1.5, -1, 2).normalize().multiplyScalar(0.8),
      life: 1.5 // seconds
    };
    scene.add(star);
    shootingStars.push(star);
  }

  let shootingTimer = 0;

  function update(elapsed, delta) {
    // Update twinkling stars
    stars.update(elapsed);

    // Spawn new shooting stars every ~2–6 seconds randomly
    shootingTimer += delta;
    if (shootingTimer > THREE.MathUtils.randFloat(2, 6)) {
      spawnShootingStar();
      shootingTimer = 0;
    }

    // Update shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const star = shootingStars[i];
      star.position.add(star.userData.velocity.clone().multiplyScalar(delta * 60));
      star.userData.life -= delta;
      if (star.userData.life <= 0) {
        scene.remove(star);
        shootingStars.splice(i, 1);
      }
    }
  }

  return { update };
}