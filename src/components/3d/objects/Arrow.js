import { useGLTF } from "@react-three/drei";
import { useSpring, config } from "@react-spring/three";
import { animated } from "@react-spring/three";
export default function Arrow() {
  const arrow = useGLTF("models/arrow.glb");
  const [springProps] = useSpring(() => ({
    scale: 0.8,
    config: { ...config.wobbly, duration: 1200 },
    from: { scale: 0.05, rotation: [1, 0, 1] },
    to: { scale: 0.07, rotation: [1.2, 0, 1.2] },
    loop: { reverse: true },
  }));
  return (
    <animated.primitive
      object={arrow.scene}
      position={[-0.9, 0.1, 0.8]}
      rotation={springProps.rotation}
      scale={springProps.scale}
    />
  );
}
