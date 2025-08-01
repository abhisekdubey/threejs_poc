"use client";
import { Canvas } from "@react-three/fiber";
import { DreiScene } from "./DreiScene";

export function ReactDreiPlayground() {

  return (
    <section className="h-screen w-full bg-gray-900">
      <Canvas shadows gl={{ antialias: true }} camera={{fov: 75, near: 0.1, far: 1000, position: [1, 3, 6]}}>
        <DreiScene />
      </Canvas>
    </section>
  );
}
