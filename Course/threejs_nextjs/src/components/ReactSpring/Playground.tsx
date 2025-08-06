import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export function Playground() {
  // const [isClicked, setClick] = useState(false);

  // const { scale, color } = useSpring({
  //   from: { scale: isClicked ? 1 : 2, color: isClicked ? "red" : "yellow" },
  //   scale: isClicked ? 2 : 1,
  //   color: isClicked ? "red" : "yellow",
  // });

  // const onClickHandler = () => {
  //   setClick((prev) => !prev);
  // };

  // For Preventing Re-render we are using Imperative API

  const [spring, api] = useSpring(() => ({
    from: {
      x: 0,
    },
  }));

  const onClickHandler = () => {
    api.start({
      to: {
        x: spring.x.get() === 1 ? 0 : 1,
      },
    });
  };

  return (
    <>
      <animated.mesh onClick={onClickHandler} position-x={spring.x}>
        <boxGeometry />
        <animated.meshBasicMaterial />
      </animated.mesh>
    </>
  );
}
