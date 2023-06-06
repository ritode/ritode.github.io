import { useFrame } from "react-three-fiber";
import { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import img from "./me.png";
export default function MeOb() {
  const meRef = useRef(null);
  const me = useLoader(TextureLoader, img);
  useFrame(({ clock }) => {
    if (meRef.current) {
      const a = clock.getElapsedTime();
      const rotationRange = 5; // Desired range of motion in degrees
      const rotationAmount = (Math.sin(a) / 50) * rotationRange;
      meRef.current.rotation.z = rotationAmount + 0.5;
      // meRef.current.rotation.x = rotationAmount + 0.5;
    }
  });
  return (
    <mesh position={[-1, 0.88, 0.35]} rotation={[0.5, -1, 0.5]} ref={meRef}>
      <planeBufferGeometry attach="geometry" args={[0.2, 0.55]} />
      <meshBasicMaterial
        attach="material"
        map={me}
        toneMapped={false}
        transparent={true}
        side={2}
      />
    </mesh>
  );
}
