import { MeshWobbleMaterial } from "@react-three/drei";

export function WobbleMaterial() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
        <MeshWobbleMaterial color={"#f76e53"} factor={3} speed={3} />
      </mesh>
    </>
  );
}
