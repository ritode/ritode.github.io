import Planet from "./Planet";
import { Vector3, Euler } from "three";

export default function TechPlanet({ scroll }) {
  const p = {
    title: "Tech",
    model: "models/purple_planet.glb",
    textPositionOffset: new Vector3(-1.4, -0.25, -0.45),
    textRotationOffset: [0, -1.3, 0],
    position: new Vector3(5.5, 1, -2),
    rotation: new Euler(0, 0, 0),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.3),
    },
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
    ></Planet>
  );
}
