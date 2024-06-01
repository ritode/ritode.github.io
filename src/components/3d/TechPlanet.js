import Planet from "./Planet";
import { Vector3, Euler } from "three";
import Accordion from "../2d/Accordion";
import { Html } from "@react-three/drei";
import { accordionData } from "../constants/objects";
import { MathUtils } from "three";

export default function TechPlanet({ scroll }) {
  const p = {
    title: "Tech",
    model: "models/purple_planet.glb",
    position: new Vector3(5.5, 1, -2),
    rotation: new Euler(0, 0, 0),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.3),
    },
  };
  const scrollAnimation = (pref, delta, scroll) => {
    const r = scroll.range(0.4, 0.43);
    const pz = -20 + (6 - -20) * r;
    pref.current.position.z = MathUtils.damp(
      pref.current.position.z,
      pz,
      2,
      delta
    );
    const py = -2 + (4 - -2) * r;
    pref.current.position.y = MathUtils.damp(
      pref.current.position.y,
      py,
      2,
      delta
    );
    const px = 5.5 + (-2 - 5.5) * r;
    pref.current.position.x = MathUtils.damp(
      pref.current.position.x,
      px,
      2,
      delta
    );
  };
  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.children[0].children[0].children[0].children[0].rotation.x -= 0.002;
            pref.current.children[0].children[0].children[0].children[1].rotation.z += 0.005;
          }
        }
      }}
      scrollAnimation={scrollAnimation}
    >
      <Html position={[0, 0.5, 0]} className="html-ob">
        <h1 className="planet-heading">Tech Blogs</h1>
        <div className="overlay-tech">
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} key={title} />
            ))}
          </div>
        </div>
      </Html>
    </Planet>
  );
}
