import { OrbitControls } from "@react-three/drei";

export function Playground() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />

      <mesh castShadow position={[0, 1.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"#cc3941"} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
        <boxGeometry args={[8,8,0.35]} />
        <meshStandardMaterial color={"#c7cac7"} />
      </mesh>
    </>
  );
}
