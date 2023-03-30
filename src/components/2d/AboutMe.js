import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";
import "./pageStyle.css";

export default function AboutMe() {
  const path = window.location.href.split("/")[3];

  return (
    <Html position={OBJECTS[path].position} className="html-ob">
      <div className="overlay">
        <h1>About Me</h1> <h1>About Me</h1> <h1>About Me</h1> <h1>About Me</h1>{" "}
        <h1>About Me</h1>
      </div>
    </Html>
  );
}
