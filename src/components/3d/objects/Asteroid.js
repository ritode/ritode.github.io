import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "react-three-fiber";
export default function Asteroid({ positions, rotations, scale }) {
  const ob = useGLTF("models/GLTF/asteroid.glb");
  const obRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (obRef.current) {
      obRef.current.rotation.x = MathUtils.lerp(
        obRef.current.rotation.x,
        Math.cos(t / 10) / 20,
        0.1
      );
      obRef.current.rotation.z = MathUtils.lerp(
        obRef.current.rotation.z,
        Math.sin(t / 10) / 10,
        0.1
      );
      obRef.current.position.y = MathUtils.lerp(
        obRef.current.position.y,
        obRef.current.position.y + Math.sin(t) * 0.02, // Wobble range of 0.5 around the current y position
        0.1
      );
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
