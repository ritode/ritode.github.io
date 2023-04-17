import { Html } from "@react-three/drei";
import { useState } from "react";
import { PLANETS } from "../constants/objects";
import "./pageStyle.css";
import Accordion from "./Accordion";
import { accordionData } from "../constants/objects";

export default function Tech() {
  const path = "Tech";
  const [active, setActive] = useState(false);
  return (
    <Html position={PLANETS[path].position} className="html-ob">
      <h1 className="planet-heading">Tech Blogs</h1>
      <div className="overlay-tech">
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </Html>
  );
}
