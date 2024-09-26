/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  let tex = useTexture("./text1.jpg");
  const cylRef = useRef(null);
  useFrame((state, delta) => {
    cylRef.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cylRef}>
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;
