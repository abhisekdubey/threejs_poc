import { OrbitControls, PositionalAudio } from "@react-three/drei";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { useState } from "react";

export function DreiPositionalAudioHelperScene() {
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandler = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      // Stop audio logic here
    } else {
      // Play audio logic here
    }
  };

  return (
    <>
      <OrbitControls />

      {isPlaying && (
        <PositionalAudio
          url="/assets/audio/zapsplat_icecream.mp3"
          autoplay
          loop
          distance={5}
        />
      )}

      <mesh onClick={clickHandler}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}
