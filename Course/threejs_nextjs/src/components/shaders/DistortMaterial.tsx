import {
  GradientTexture,
  MeshDistortMaterial,
  useCursor,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function DistortMaterial() {
  const [isHover, setHover] = useState<boolean>(false);
  const plainRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<any>(null);
  useCursor(isHover);

  //   useEffect(() => {
  //     if (materialRef.current) {
  //       materialRef.current.distort = isHover ? 0.4 : 0;
  //     }
  //   }, [isHover]);

  // For Animation
  const { lerp } = THREE.MathUtils;

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.distort = lerp(
        materialRef.current.distort,
        isHover ? 0.4 : 0,
        isHover ? 0.05 : 0.01
      );
    }
  });

  return (
    <>
      <mesh
        ref={plainRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[2, 3, 64, 64]} />
        <MeshDistortMaterial ref={materialRef} speed={3}>
          <GradientTexture
            colors={["#FF9933", "white", "#138808"]}
            stops={[0, 0.5, 1]}
          />
        </MeshDistortMaterial>
      </mesh>
    </>
  );
}
