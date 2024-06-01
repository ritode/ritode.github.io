import WIP from "../2d/WIP";
import Planet from "./Planet";
import { Vector3, Euler, MathUtils } from "three";

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
  const scrollAnimation = (pref, delta, scroll) => {
    const r = scroll.range(0.55, 0.56);
    const p = -20 + (6 - -20) * r;
    pref.current.position.z = MathUtils.damp(
      pref.current.position.z,
      p,
      2,
      delta
    );

    const py = -5 + (3 - -5) * r;
    pref.current.position.y = MathUtils.damp(
      pref.current.position.y,
      py,
      2,
      delta
    );
    const px = 5 + (-3 - 5) * r;
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
            pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
            pref.current.children[0].children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          }
        }
      }}
      scrollAnimation={scrollAnimation}
    >
      <WIP />
    </Planet>
  );
}
