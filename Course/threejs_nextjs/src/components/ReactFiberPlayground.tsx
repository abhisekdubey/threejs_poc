"use client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export function ReactFiberPlayground() {
  const creatingCanvasHandler = (state: any) => {
    state.gl.setClearColor("#857c72ff", 0.8); // Set background color
  };

  return (
    <section className="h-screen w-full bg-gray-900">
      <Canvas gl={{ antialias: true }} onCreated={creatingCanvasHandler}>
        <axesHelper args={[3]} />
        <gridHelper args={[20, 20, "cyan"]} />
        <Scene />
      </Canvas>
    </section>
  );
}
