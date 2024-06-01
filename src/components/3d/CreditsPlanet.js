import Planet from "./Planet";
import { Vector3, Euler } from "three";
import Credits from "../2d/Credits.js";
import { MathUtils } from "three";

export default function CreditsPlanet({ scroll }) {
  const p = {
    title: "Credits",
    model: "models/octopus.glb",
    position: new Vector3(0, 0, 0),
    rotation: new Euler(0, 0, 3),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.01),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.01),
    },
  };
  const scrollAnimation = (pref, delta, scroll) => {
    const r = scroll.range(0.6, 0.63);
    const p = -20 + (0 - -20) * r;
    pref.current.position.z = MathUtils.damp(
      pref.current.position.z,
      p,
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
          // if (!selected) {
          //   pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
          //   pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          // }
        }
      }}
      scrollAnimation={scrollAnimation}
    >
      <Credits />
    </Planet>
  );
}
