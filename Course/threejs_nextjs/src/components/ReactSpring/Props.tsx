import { useSpring, animated } from "@react-spring/three";

// Resources:
// https://react-spring.dev/
// https://react-spring-visualizer.com/

export function PropsPlayground() {
  let loopTime = 0;

  const { x, y, color } = useSpring({
    from: { color: "hotpink", y: -2, x: -2 },
    to: [
      { color: "yellow", x: 2 },
      { color: "cyan", y: 2 },
      { color: "greenyellow", x: -2 },
      { color: "hotpink", y: -2 },
    ],
    // loop: true,
    loop: () => 3 > loopTime++,
  });

  return (
    <>
      <animated.mesh position-x={x} position-y={y}>
        <boxGeometry />
        <animated.meshBasicMaterial color={color} />
      </animated.mesh>
    </>
  );
}
