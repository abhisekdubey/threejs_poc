import { ReactDreiPlayground } from "@/components/ReactDreiPlayground";
import { ReactFiberPlayground } from "@/components/ReactFiberPlayground";
import { ReactSpringPlayground } from "@/components/ReactSpring/ReactSpringPlayground";
import { ReactThreeRapierPlayground } from "@/components/ReactThreeRapier/ReactThreeRapierPlayground";

export default function Home() {
  return (
    <>
      {/* <ReactFiberPlayground /> */}
      {/* <ReactDreiPlayground /> */}
      {/* <ReactSpringPlayground /> */}
      <ReactThreeRapierPlayground />
    </>
  );
}
