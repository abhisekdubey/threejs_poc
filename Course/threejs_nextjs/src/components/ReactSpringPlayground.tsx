"use client";
import { Canvas } from "@react-three/fiber";

export function ReactSpringPlayground() {
  return (
    <section
      className="h-screen w-full bg-gray-900"
      style={{ height: "100vh" }}
    >
      <Canvas
      
        gl={{ antialias: true }}
     
      >
     
      </Canvas>
    </section>
  );
}