import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { MathUtils } from "three";
import { useSceneStore } from "../store/sceneStore";
import { MeshWobbleMaterial } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";
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
  useEffect(() => {
    useSceneStore.setState({ catGhost: catRef });
  }, [catRef]);
  return (
    <group
      position={OBJECTS.cat.position}
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
