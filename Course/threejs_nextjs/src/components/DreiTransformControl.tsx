import { OrbitControls, TransformControls } from "@react-three/drei";

export function DreiTransformControl() {
  return (
    <>
      <OrbitControls makeDefault />
      <TransformControls position-x={2} mode="rotate">
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </TransformControls>
    </>
  );
}
