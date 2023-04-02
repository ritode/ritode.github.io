import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";

export default function WIP() {
  const path = window.location.href.split("/")[3];
  return (
    <Html position={OBJECTS[path].position} className="html-ob">
      <h1 className="planet-heading">W I P</h1>
    </Html>
  );
}
