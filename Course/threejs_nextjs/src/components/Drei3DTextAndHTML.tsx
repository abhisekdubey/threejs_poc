import {
  Center,
  Float,
  Html,
  OrbitControls,
  Text,
  Text3D,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export function Drei3DTextAndHTML() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  return (
    <>
      <OrbitControls />

      {/* <Text
        fontSize={0.4}
        color={"#6CF527"}
        font="/assets/fonts/BitcountSingle-SemiBold.ttf"
        position-y={2}
        // rotation-y={Math.PI * 0.1}
        // maxWidth={2}
        // textAlign="center"
      >
        Hello Abhisek Dubey
      </Text> */}

      {/* <Center>
        <Float floatIntensity={1}>
          <Text3D
            font={"/assets/fonts/Inter_Bold.json"}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1.5}
          >
            {`hello\nworld`}
          </Text3D>
        </Float>
        <meshNormalMaterial />
      </Center> */}

      <mesh position-x={1} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={"#6CF527"} />
        <Html
          position={[-0.7, 0.5, 0.5]}
          wrapperClass="text"
          distanceFactor={5}
          occlude={[cubeRef]}
        >
          R3F
        </Html>
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
}
