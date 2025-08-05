"use client";
import { Preload, Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import { Images } from "./common/Images";
import { Suspense } from "react";

export function DreiScrollControlsScene() {
  const model = useGLTF("/assets/models/table_model.gltf", true);

  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight />
       <Suspense fallback={null}>
        <ScrollControls damping={0.4} pages={3} infinite>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>to</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '60vw' }}>be</h1>
            <h1 style={{ position: 'absolute', top: '198.5vh', left: '0.5vw', fontSize: '40vw' }}>home</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </>
  );
}
