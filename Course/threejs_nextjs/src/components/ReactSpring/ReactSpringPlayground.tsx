"use client";
import { Canvas } from "@react-three/fiber";
import { Playground } from "./Playground";
import { PropsPlayground } from "./Props";

// Topic
// 1. Imprerative API
// 2. Properties
// 3. Spring Ref
// 4. useSprings
// 5. useTrail

export function ReactSpringPlayground() {
  return (
    <section
      className="h-screen w-full bg-gray-900"
      style={{ height: "100vh" }}
    >
      <Canvas gl={{ antialias: true }}>
        {/* <Playground /> */}
        <PropsPlayground />
      </Canvas>
    </section>
  );
}
