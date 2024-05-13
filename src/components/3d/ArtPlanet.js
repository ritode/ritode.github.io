import Planet from "./Planet";
import { Vector3, Euler } from "three";

export default function ArtPlanet({ scroll }) {
  const p = {
    title: "Art",
    textPositionOffset: new Vector3(1, 0, -1.5),
    textRotationOffset: [0, 3.14, 0],
    position: new Vector3(-2, 1.5, 5),
    rotation: new Euler(0, 0, 0),
    model: "models/waterworld.glb",
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  };

  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.rotation.y += 0.005;
          }
        }
      }}
    ></Planet>
  );
}
