import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
export default function Rock() {
  const rockRef = useRef(null);
  const ob = useGLTF("models/rock.glb");
  useFrame(({ clock }) => {
    if (rockRef.current) {
      const a = clock.getElapsedTime();
      rockRef.current.position.y = 0.2 + Math.abs(0.25 * Math.sin(a));
    }
  });
  return (
    <primitive
      object={ob.scene}
      position={[-0.1, 0.3, 1.2]}
      rotation={[0, -0.1, 0]}
      ref={rockRef}
    />
  );
}
