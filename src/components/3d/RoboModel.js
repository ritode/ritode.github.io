import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function RoboModel(props) {
  const group = useRef();
  const robo = useGLTF("models/robo.glb");
  const { actions } = useAnimations(robo.animations, group);
  useEffect(() => {
    actions?.["Take 001"].play();
  });
  return (
    <primitive
      object={robo.scene}
      ref={group}
      position={[1.1, 0.1, -0.7]}
      rotation={[0, 2, 0]}
    />
  );
}
