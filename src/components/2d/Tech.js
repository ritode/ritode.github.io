import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";

export default function Tech() {
  const path = window.location.href.split("/")[3];
  return (
    <Html position={OBJECTS[path].position} className="html-ob">
      <div className="overlay">
        <h1>Tech</h1>
      </div>
    </Html>
  );
}
