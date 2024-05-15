import Planet from "./Planet";
import { Vector3, Euler } from "three";
import WIP from "../2d/WIP.js";

export default function ProjectPlanet({ scroll }) {
  const p = {
    title: "Projects",
    textPositionOffset: new Vector3(0, 2, -3.5),
    textRotationOffset: [0.2, 0, 0],
    model: "models/stylized_planet.glb",
    position: new Vector3(5, 1.5, 5),
    rotation: new Euler(0, 0, 0),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.5),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.8),
    },
  };

  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.children[0].children[0].children[0].children[0].children[0].rotation.y += 0.001;
            pref.current.children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          }
        }
      }}
      scrollAnimation={[
        [-4, 1.5, -20],
        [0, 1.5, -5],
        [0, 0, 0],
        [0, 0, 2],
        [2, -2, 5],
      ]}
    >
      <WIP />
    </Planet>
  );
}
