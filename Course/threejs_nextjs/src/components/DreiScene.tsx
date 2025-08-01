import React, { useRef } from "react";
import * as THREE from "three";
import {
  Environment,
  Lightformer,
  OrbitControls,
  Sky,
  Stars,
  useHelper,
} from "@react-three/drei";
import { Particles } from "./common/Partcles";
import { useControls } from "leva";

export const DreiScene = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null!);

  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [-1.3, -0.1, -4.9] },
  });

  const { meshIntensity } = useControls("environment", {
    meshIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });

  const { height, radius, scale } = useControls("ground", {
    height: {
      value: 1,
      min: 0,
      max: 20,
    },
    radius: {
      value: 60,
      min: 0,
      max: 100,
    },
    scale: {
      value: 70,
      min: 0,
      max: 100,
    },
  });

  return (
    <>
      <OrbitControls />
      {/* <Particles /> */}

      {/* <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* <ambientLight /> */}

      <mesh position-y={1} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="white" envMapIntensity={meshIntensity} />
      </mesh>

      <Environment
        // background
        files={["/assets/env/table_mountain_1_4k.hdr"]}
        ground={{ height, radius, scale }}
      >
        {/* <Environment background > */}
        <mesh position-z={-1}>
          <planeGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        {/* <Lightformer position-z={-1} color="orange" intensity={5} scale={5} /> */}
      </Environment>

      <directionalLight ref={lightRef} castShadow />

      <mesh position-y={0} rotation-x={-Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </>
  );
};
