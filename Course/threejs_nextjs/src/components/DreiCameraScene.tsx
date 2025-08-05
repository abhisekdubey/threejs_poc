import React, { useRef } from "react";
import * as THREE from "three";
import {
  CubeCamera,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const DreiCameraScene = () => {
  const cubeRef = useRef<THREE.CubeCamera>(null);

  useFrame((_, delta) => {
    if(cubeRef.current){
      cubeRef.current.rotation.x += delta;
      cubeRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <OrbitControls />

      <Environment background files={["/assets/env/table_mountain_1_4k.hdr"]} />

      {/* <PerspectiveCamera makeDefault position={[0,0,5]} /> */}

      {/* <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial />
      </mesh> */}

      <CubeCamera>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>

      <mesh ref={cubeRef} position-z={5}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};
