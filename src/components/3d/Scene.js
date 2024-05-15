import React, { Suspense, useRef } from "react";
import FloaterAnimals from "./objects/FloaterAnimals";
import { MathUtils } from "three";
import useScrollAnimation from "../../utils/useScrollAnimation";
import { useEffect } from "react";
import Asteroid from "./objects/Asteroid";

export default function Scene({ scroll }) {
  const ref = useRef(null);
  const { calculateAnimation } = useScrollAnimation(
    scroll,
    [
      [0, 0, -10],
      [0, 0, -8],
      [0, 0, -6],
      [0, 0, -5],
      [0, 0, -4],
      [0, 0, -2],
      [0, 0, 1],
      [0, 0, 6],
    ],
    null,
    1
  );
  useEffect(() => {
    calculateAnimation(scroll, ref);
  }, [scroll, calculateAnimation]);

  return (
    <Suspense fallback={<></>}>
      <mesh position={[0, 0, -10]} ref={ref}>
        <FloaterAnimals
          obj={"Colobus_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[1.5, -1.2, 12]]}
          rotations={[[0, -1, 0]]}
        />
        <FloaterAnimals
          obj={"Sparrow_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[-1.8, 0.7, 12]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Inkfish_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[-1.8, -1, 6]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Herring_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[-2, -1.3, 6]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Gecko_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[2, 0, 0]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Muskrat_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[1.5, 1, 0]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Pudu_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[-1.3, 0, -6]]}
          rotations={[[0.5, 1, 0]]}
        />
        <FloaterAnimals
          obj={"Taipan_Animations.glb"}
          animation={"Swim"}
          scale={0.35}
          positions={[[1.3, 1, -6]]}
          rotations={[[0.5, 1, 0]]}
        />
        <Asteroid
          scale={0.1}
          positions={[
            [-1.3, 1, 10],
            [-1.8, 0.7, 8],
          ]}
          rotations={[
            [0.5, 1, 0],
            [0.5, 1, 0],
          ]}
        />
      </mesh>
    </Suspense>
  );
}
