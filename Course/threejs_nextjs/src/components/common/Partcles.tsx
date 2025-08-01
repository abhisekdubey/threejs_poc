import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Particles() {
  const partilcesRef = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (partilcesRef.current) {
      partilcesRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  // Load the texture for the particles
  const snowTexture = useLoader(THREE.TextureLoader, "/assets/snowflake.webp");

  const verticesCount = 2000;
  const positionsArray = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 10; // Random position in the range [-5, 5]
  }

  return (
    <points ref={partilcesRef}>
      {/* <sphereGeometry /> */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positionsArray, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} alphaMap={snowTexture} transparent />
    </points>
  );
}
