import { OrbitControls } from "@react-three/drei";

export const DreiOrbitControlsScene = () => {
  return (
    <>
      <OrbitControls
        // enableDamping={true}
        // dampingFactor={0.5}
        // autoRotate
        // autoRotateSpeed={8}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
      />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};
