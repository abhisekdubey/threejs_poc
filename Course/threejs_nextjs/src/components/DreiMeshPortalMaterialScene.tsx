import {
  CameraControls,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function DreiMeshPortalMaterialScene() {
  const [isActive, setActive] = useState(false);
  const meshPortalMateriaRef = useRef<any>(null);
  const cameraControlRef = useRef<CameraControls | null>(null);

  useFrame((_, delta) => {
    if (meshPortalMateriaRef.current) {
      easing.damp(
        meshPortalMateriaRef.current,
        "blend",
        isActive ? 1 : 0,
        0.2,
        delta
      );
    }
  });

  useEffect(() => {
    if (cameraControlRef.current) {
      if (isActive) {
        cameraControlRef.current.setLookAt(0, 0, 3, 0, 0, 0, true);
      } else {
        cameraControlRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
      }
    }
  }, [isActive]);

  const model = useGLTF("/assets/models/portals/fiesta_tea-transformed.glb");
  const texture = useTexture("/assets/texture/concrete_floor_02_disp_1k.png");

  function doubleClickHandler() {
    setActive(!isActive);
  }

  return (
    <>
      {/* <OrbitControls /> */}
      <CameraControls ref={cameraControlRef} />

      <Text position={[0, 1.5, 0.1]} fontSize={0.6}>
        Tea
        <meshBasicMaterial toneMapped={false} />
      </Text>
      <RoundedBox
        args={[3, 4, 0.1]}
        radius={0.1}
        onDoubleClick={doubleClickHandler}
      >
        {/* <planeGeometry args={[2, 3]} /> */}
        {/* <MeshPortalMaterial blend={isActive ? 1 : 0}> */}
        <MeshPortalMaterial
          ref={meshPortalMateriaRef}
          resolution={512}
          blur={0}
        >
          <primitive object={model.scene} scale={0.6} position-y={-1} />

          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
}
