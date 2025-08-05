import { Environment, OrbitControls } from "@react-three/drei";
import { DistortMaterial, ReflectorMaterial, WobbleMaterial } from "./shaders";

export function DreiShadersScene() {
  return (
    <>
      <OrbitControls />
      <ambientLight />

      <Environment background files="/assets/env/table_mountain_1_4k.hdr" />

      {/* <ReflectorMaterial /> */}
      {/* <WobbleMaterial /> */}
      <DistortMaterial />
    </>
  );
}
