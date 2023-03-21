import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";

export default function AboutMe() {
  const path = window.location.href.split("/")[3];

  return (
    <Html position={OBJECTS[path].position}>
      <h1>AboutMe</h1>
    </Html>
  );
}
