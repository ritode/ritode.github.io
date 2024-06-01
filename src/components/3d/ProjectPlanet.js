import Planet from "./Planet";
import { Vector3, Euler } from "three";
import WIP from "../2d/WIP.js";
import { MathUtils } from "three";
export default function ProjectPlanet({ scroll }) {
  const p = {
    title: "Projects",
    textPositionOffset: new Vector3(0, 2, -3.5),
    textRotationOffset: [0.2, 0, 0],
    model: "models/stylized_planet.glb",
    position: new Vector3(-2, 1.5, 5),
    rotation: new Euler(0, 0, 0),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.5),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.8),
    },
  };
  const scrollAnimation = (pref, delta, scroll) => {
    const r = scroll.range(0.3, 0.32);
    const p = -20 + (6 - -20) * r;
    pref.current.position.z = MathUtils.damp(
      pref.current.position.z,
      p,
      2,
      delta
    );

    const py = 2 + (-3 - 2) * r;
    pref.current.position.y = MathUtils.damp(
      pref.current.position.y,
      py,
      2,
      delta
    );
  };
  return (
    <Planet
      config={p}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.children[0].children[0].children[0].children[0].children[0].rotation.y += 0.001;
            pref.current.children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          }
        }
      }}
      scrollAnimation={scrollAnimation}
    >
      <WIP />
    </Planet>
  );
}
