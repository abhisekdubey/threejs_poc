"use client";
import { Canvas } from "@react-three/fiber";
import { DreiScene } from "./DreiScene";
import { DreiCameraScene } from "./DreiCameraScene";
import { DreiControlsScene } from "./DreiControlsScene";
import { DreiOrbitControlsScene } from "./DreiOrbitControlsScene";
import { DreiPresentationControlsScene } from "./DreiPresentationControlsScene";
import { DreiScrollControlsScene } from "./DreiScrollControlsScene";
import { DreiTransformControl } from "./DreiTransformControl";
import { PivotControlScene } from "./PivotControlScene";

export function ReactDreiPlayground() {
  return (
    <section
      className="h-screen w-full bg-gray-900"
      style={{ height: "100vh" }}
    >
      <Canvas
        shadows
        gl={{ antialias: true }}
        // camera={{ fov: 75, near: 0.1, far: 1000, position: [1, 3, 6] }}
        // camera={{ position: [0, 20, 5], fov: 60 }} // for scroll controls
      >
        {/* <DreiScene /> */}
        {/* <DreiCameraScene /> */}
        {/* <DreiControlsScene /> */}
        {/* <DreiOrbitControlsScene /> */}
        {/* <DreiPresentationControlsScene /> */}
        {/* <DreiScrollControlsScene /> */}
        {/* <DreiTransformControl /> */}
        <PivotControlScene />
      </Canvas>
    </section>
  );
}
