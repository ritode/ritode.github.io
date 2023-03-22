import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";
import "./pageStyle.css";

export default function AboutMe() {
  const path = window.location.href.split("/")[3];

  return (
    <Html position={OBJECTS[path].position}>
      <div className="screen">
        <div className="overlay">
          <h1>About Me</h1>
          <p>
            Hi, I am Ritobrita De. <br />
            Currently I am working as a front end developer.
          </p>
        </div>
      </div>
    </Html>
  );
}
