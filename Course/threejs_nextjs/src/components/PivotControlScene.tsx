import { PivotControls } from "@react-three/drei";

export function PivotControlScene() {
  return (
    <PivotControls anchor={[0, 1, 0]} depthTest={false} axisColors={["red", "green", "blue"]}>
      <mesh position-x={2} scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </PivotControls>
  );
}
