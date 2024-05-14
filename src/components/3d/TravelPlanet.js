import WIP from "../2d/WIP";
import Planet from "./Planet";
import { Vector3, Euler } from "three";

export default function TravelPlanet({ scroll }) {
  const p = {
    title: "Travel",
    model: "models/astplan.glb",
    position: new Vector3(-5, 1, -1),
    rotation: new Euler(0, 0, 0),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2.1),
      desktop: new Vector3(1, 1, 1).multiplyScalar(2.3),
    },
  };

  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
            pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          }
        }
      }}
    >
      <WIP />
    </Planet>
  );
}
