import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CustomGeometry } from "./customGeometry/custom";
import { Particles } from "./common/Partcles";

export const Scene = () => {
  const circleRef = useRef<THREE.Mesh>(null!);
  const torusKnotRef = useRef<THREE.Mesh>(null!);

  const texture = useLoader(THREE.TextureLoader, "/assets/india_map.jpg");

  useFrame((state, delta) => {
    // const time = state.clock.getElapsedTime();
    // state.camera.position.x = Math.sin(time) * 5;
    // state.camera.position.z = Math.cos(time) * 5;
    // state.camera.lookAt(0, 0, 0);

    circleRef.current.rotation.y += delta;
    torusKnotRef.current.rotation.y -= delta;
  });

  return (
    <>
      <OrbitControls />

      {/* <CustomGeometry /> */}

      <Particles />
      {/* <mesh>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial map={texture} side={2} />
      </mesh> */}

      <mesh ref={torusKnotRef} position-x={-2}>
        <torusKnotGeometry />
        <meshNormalMaterial wireframe />
      </mesh>
      <mesh ref={circleRef} position-x={2}>
        <torusGeometry />
        <meshBasicMaterial color={"red"} wireframe />
      </mesh>
    </>
  );
};
