"use client";
import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && groupRef.current.children.length > 0) {
      const image1 = groupRef.current.children[0] as THREE.Mesh;
      const image2 = groupRef.current.children[1] as THREE.Mesh;
      const image3 = groupRef.current.children[2] as THREE.Mesh;
      const image4 = groupRef.current.children[3] as THREE.Mesh;
      const image5 = groupRef.current.children[4] as THREE.Mesh;
      const image6 = groupRef.current.children[5] as THREE.Mesh;

      if (
        image1.material &&
        "zoom" in image1.material &&
        image2.material &&
        "zoom" in image2.material &&
        image3.material &&
        "zoom" in image3.material &&
        image4.material &&
        "zoom" in image4.material &&
        image5.material &&
        "zoom" in image5.material &&
        image6.material &&
        "zoom" in image6.material
      ) {
        (image1.material as any).zoom = 1 + scroll.range(0, 1 / 3) / 3;
        (image2.material as any).zoom = 1 + scroll.range(1 / 3, 1 / 3);
        (image3.material as any).zoom = 1 + scroll.range(1 / 3, 1 / 3);
        (image4.material as any).zoom = 1 + scroll.range(1 / 3, 1 / 3);
        (image5.material as any).zoom = 1 + scroll.range(2 / 3, 1 / 3) / 3;
        (image6.material as any).zoom = 1 + scroll.range(2 / 3, 1 / 3) / 3;
        (image6.material as any).grayscale = 1 - scroll.range(2 / 3, 1 / 3) / 3;
      }
    }
  });

  if (typeof height !== "number" || typeof width !== "number") return null;

  return (
    <group ref={groupRef}>
      <Image
        position={[-2, 0, 0]}
        scale={[4, height]}
        grayscale={0}
        zoom={1}
        url="/assets/images/img1.jpg"
      />
      <Image position={[2, 0, 1]} scale={3} url="/assets/images/img6.jpg" />
      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3]}
        url="/assets/images/trip2.jpg"
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2]}
        url="/assets/images/img8.jpg"
      />
      <Image
        position={[0.75, -height, 3.5]}
        scale={1.5}
        url="/assets/images/trip4.jpg"
      />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3]}
        url="/assets/images/img3.jpg"
        grayscale={1}
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2]}
        url="/assets/images/img7.jpg"
      />
    </group>
  );
}
