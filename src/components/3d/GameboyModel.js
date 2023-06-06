import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function GameboyModel(props) {
  const group = useRef();
  const gb = useGLTF("models/gameboy.glb");
  const { actions } = useAnimations(gb.animations, group);
  useEffect(() => {
    console.log("gb", actions, gb.scene);
    actions?.Idle.play();
  });
  return (
    <primitive
      object={gb.scene}
      ref={group}
      position={[1.2, 0.3, 0.6]}
      rotation={[0, -2, 0]}
    />
  );
}
