import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function WIP() {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = (Math.sin(a) + 0.5) / 2;
    }
  });

  return (
    <>
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
        position={[-1, 0, 0]}
        rotation={[0, -1.57, 0]}
        ref={ref}
      >
        {`Coming\n  Soon`}
        <meshNormalMaterial />
      </Text3D>
    </>
  );
}
