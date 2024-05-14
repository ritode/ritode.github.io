import { useFrame } from "react-three-fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import { useRef, useEffect } from "react";
import useScrollAnimation from "../../../utils/useScrollAnimation";
export default function FloaterAnimals({
  scroll,
  scrollAnimation,
  animation,
  obj,
}) {
  const obRef = useRef(null);
  const ob = useGLTF(`models/GLTF/${obj}`);
  const { actions } = useAnimations(ob.animations, obRef);
  useEffect(() => {
    actions?.[animation].setEffectiveTimeScale(0.1);
    actions?.[animation].play();
  });
  const { calculateAnimation } = useScrollAnimation(scroll, scrollAnimation, 2);

  useEffect(() => {
    console.log(scroll, obRef);
    calculateAnimation(scroll, obRef);
  }, [scroll, calculateAnimation]);

  useFrame(({ clock }) => {
    if (obRef.current) {
      const a = clock.getElapsedTime();
      obRef.current.rotation.z = MathUtils.lerp(
        obRef.current.rotation.z,
        Math.sin(a * 2) / 5,
        0.1
      );
    }
  });
  return (
    <primitive
      object={ob.scene}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[0.1, 0.1, 0.1]}
      ref={obRef}
    />
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
