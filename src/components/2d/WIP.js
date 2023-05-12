import { Html } from "@react-three/drei";
import { PLANETS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function WIP() {
  const path = "WIP";
  useEffect(() => {
    const catGhost = useSceneStore.getState().catGhost;
  }, [useSceneStore.getState().catGhost]);

  const ref = useRef(null);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.position.y = Math.tan(a) / 6 + 2;
  });

  return (
    <>
      <Html position={PLANETS[path].position} className="html-ob">
        {/* <h1 className="planet-heading">W I P</h1> */}
      </Html>
      <Text3D
        font="./fonts/Inter_Bold.json"
        curveSegments={32}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0}
        height={0.5}
        lineHeight={0.7}
        letterSpacing={0.03}
        size={0.15}
        scale={[1, 1, 0.5]}
        position={[-1, 1.7, 4]}
        rotation={[0, 3.14, 0]}
        ref={ref}
      >
        {`Coming\n  Soon`}
        <meshNormalMaterial />
      </Text3D>
    </>
  );
}
