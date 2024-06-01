import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function CatModel() {
  const { nodes, materials } = useGLTF("models/cat-ghost.glb");
  const catRef = useRef(null);
  const catColors = [
    "skyblue",
    "indigo",
    "pink",
    "hotpink",
    "salmon",
    "brown",
    "aquamarine",
    "seagreen",
  ];
  const [hovered, setHovered] = useState(false);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const scroll = useScroll();
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (catRef.current) {
      catRef.current.rotation.x = MathUtils.lerp(
        catRef.current.rotation.x,
        Math.cos(t / 10) / 20,
        0.1
      );
      catRef.current.rotation.z = MathUtils.lerp(
        catRef.current.rotation.z,
        Math.sin(t / 10) / 10,
        0.1
      );
      catRef.current.position.y = MathUtils.lerp(
        catRef.current.position.y,
        catRef.current.position.y + Math.sin(t) * 0.02, // Wobble range of 0.5 around the current y position
        0.1
      );
      const r1 = scroll.range(0, 0.05);
      const r2 = scroll.range(0.051, 0.0515);
      const r3 = scroll.range(0.14, 0.15);
      const p1 = -2 + (0 - -2) * r1;
      catRef.current.position.y = MathUtils.damp(
        catRef.current.position.y,
        p1,
        1,
        delta
      );
      const s = 2.5 + (1 - 2.5) * r1;
      catRef.current.scale.set(s, s, s);
      const p2 = 0 + (-4 - 0) * r3;
      catRef.current.position.y = MathUtils.damp(
        catRef.current.position.y,
        p2,
        1,
        delta
      );
      const rotation360 = 2 * Math.PI * r2;
      const rotation180 = Math.PI * r3;

      catRef.current.rotation.y = rotation360 + rotation180;
    }
  });
  return (
    <group
      position={[0, -2, 0]}
      dispose={null}
      ref={catRef}
      onPointerOver={(e) => setHovered(true)}
      onClick={(e) => setHovered(!hovered)}
      onPointerOut={(e) => setHovered(false)}
    >
      <group rotation={[-1.46, -0.08, 1.5]} scale={0.18}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
          >
            <MeshWobbleMaterial
              color={hovered && catColors[getRandomInt(catColors.length - 1)]}
              // map={materials["Material.001"]}
              factor={hovered && 0.3}
              speed={hovered && 5}
            />
          </mesh>
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.eyes}
            position={[-0.49, 0.66, 0.36]}
            scale={0.33}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.nose}
            position={[-0.87, 0.67, 0.05]}
            rotation={[0.02, 0.19, -0.4]}
            scale={[0.08, 0.07, 0.11]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.eyes}
            position={[-0.6, 0.67, -0.35]}
            scale={0.33}
          />
        </group>
      </group>
    </group>
  );
}
