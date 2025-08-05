import { MeshReflectorMaterial } from "@react-three/drei";

export function ReflectorMaterial() {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"#f76e53"} />
      </mesh>

      <mesh rotation-x={-Math.PI / 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />
        <MeshReflectorMaterial
          resolution={512}
          color={"gray"}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={1}
        />
      </mesh>
    </>
  );
}
