import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import { useRef } from "react";
export default function Penguin() {
  const obRef = useRef(null);
  const ob = useGLTF("models/penguin.glb");
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
      position={[-0.3, 0.25, -1.2]}
      rotation={[0, 1.8, 0]}
      scale={[0.1, 0.1, 0.1]}
      ref={obRef}
    />
  );
}
