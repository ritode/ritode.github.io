import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import { useRef } from "react";
export default function Ps5() {
  const obRef = useRef(null);
  const ob = useGLTF("models/ps5.glb");
  useFrame(({ clock }) => {
    if (obRef.current) {
      const a = clock.getElapsedTime();
      obRef.current.rotation.z = MathUtils.lerp(
        obRef.current.rotation.z,
        Math.sin(a) / 5,
        0.1
      );
    }
  });
  return (
    <primitive
      object={ob.scene}
      position={[1.2, 0.3, 0.6]}
      rotation={[0, -2, 0]}
      ref={obRef}
    />
  );
}
