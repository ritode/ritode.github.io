import Planet from "./Planet";
import { Vector3, Euler } from "three";
import Credits from "../2d/Credits.js";

export default function CreditsPlanet({ scroll }) {
  const p = {
    title: "Credits",
    model: "models/octopus.glb",
    position: new Vector3(-5, 1, -1),
    rotation: new Euler(0, 0, 3),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.01),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.01),
    },
  };
  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          // if (!selected) {
          //   pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
          //   pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          // }
        }
      }}
    >
      <Credits />
    </Planet>
  );
}
