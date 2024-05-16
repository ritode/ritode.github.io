import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
export default function FloaterAnimals({
  positions,
  animation,
  obj,
  scale,
  rotations,
}) {
  const obRef = useRef(null);
  const ob = useGLTF(`models/GLTF/${obj}`);
  const { actions } = useAnimations(ob.animations, obRef);
  useEffect(() => {
    if (animation) {
      actions?.[animation].setEffectiveTimeScale(0.2);
      actions?.[animation].play();
    }
  });

  return (
    <>
      {positions.map((pos, i) => (
        <primitive
          key={i}
          object={ob.scene}
          scale={Array(3).fill(scale)}
          ref={obRef}
          position={positions[i]}
          rotation={rotations[i]}
        />
      ))}
    </>
  );
}

// Attack
// Bounce
// Clicked
// Death
// Eat
// Fear
// Fly
// Hit
// Idle_A
// Idle_B
// Idle_C
// Jump
// Roll
// Run
// Sit
// Spin
// Swim
// Walk
