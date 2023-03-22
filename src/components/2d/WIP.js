import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";

export default function WIP() {
  const path = window.location.href.split("/")[3];
  return (
    <Html position={OBJECTS[path].position}>
      <div className="screen">
        <div className="overlay">
          <h1>W I P</h1>
        </div>
      </div>
    </Html>
  );
}
