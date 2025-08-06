"use client";
import { Canvas } from "@react-three/fiber";
import { Playground } from "./Playground";

export function ReactThreeRapierPlayground() {
  return (
    <>
      <section className="h-screen w-full" style={{ height: "100vh" }}>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [3, 3, 7],
          }}
          gl={{ antialias: true }}
        >
          <Playground />
        </Canvas>
      </section>
    </>
  );
}
