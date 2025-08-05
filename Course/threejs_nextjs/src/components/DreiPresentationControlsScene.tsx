import React from "react";
import { PresentationControls } from "@react-three/drei";

export const DreiPresentationControlsScene = () => {
  return (
    <PresentationControls
      global
      snap={true}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </PresentationControls>
  );
};
