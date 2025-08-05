import { CameraControls, Grid } from "@react-three/drei";
import { button, buttonGroup, useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";

export function DreiControlsScene() {
  const cameraControlsRef = useRef<CameraControls>(null);

  const { DEG2RAD } = THREE.MathUtils;

  const cameraControls = useControls("Camera Controls", {
    horizontalRotation: buttonGroup({
      label: "Horizontal R",
      opts: {
        "45deg": () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
        "-90deg": () =>
          cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
        "360deg": () =>
          cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true),
      },
    }),
    verticalRotation: buttonGroup({
      label: "Vertical R",
      opts: {
        "20deg": () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
        "-40deg": () =>
          cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true),
      },
    }),
    truckRotation: buttonGroup({
      label: "Truck R",
      opts: {
        "(1,0)": () => cameraControlsRef.current?.truck(1, 0, true),
        "(0,+1)": () => cameraControlsRef.current?.truck(0, 1, true),
        "(-1,-1)": () => cameraControlsRef.current?.truck(-1, -1, true),
      },
    }),
    zoomGroup: buttonGroup({
      label: "zoom",
      opts: {
        "(0.25)": () => cameraControlsRef.current?.zoom(0.25, true),
        "(-0.25)": () => cameraControlsRef.current?.zoom(-0.25, true),
      },
    }),
    lookAtBox: button(() => {
      cameraControlsRef.current?.setLookAt(0, 1, 3, 0, 0, 0, true);
    }),
  });

  return (
    <>
      <CameraControls ref={cameraControlsRef} smoothTime={0.25} />

      <Grid
        args={[30, 30]}
        cellSize={0.25}
        cellColor="#6f6f6f"
        sectionSize={1}
        sectionThickness={1.5}
        fadeDistance={20}
        sectionColor={"#6364A6"}
      />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}
