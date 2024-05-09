import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef, useEffect, useState } from "react";
import { Euler, MathUtils } from "three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";
import { Vector3 } from "three";
export default function CatModel({ scroll }) {
  const { nodes, materials } = useGLTF("models/cat-ghost.glb");
  const positions = [
    [0, 0, 1],
    [0, 0, 3],
    [0, -1.5, 1],
  ];
  const rotations = [
    [0, 0, 0],
    [0, 0, 0],
    [0, Math.PI, 0],
  ];
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
    const incrementSize = 500;
    const index = Math.min(
      Math.floor(scroll / incrementSize),
      positions.length - 1
    );
    const nextIndex = Math.min(index + 1, positions.length - 1);
    // Calculate the lerp amount based on the scrollValue and increment size
    const lerpAmount = (scroll % incrementSize) / incrementSize;

    if (catRef.current && index !== nextIndex) {
      const currentPosition = new Vector3().fromArray(positions[index]);
      const nextPosition = new Vector3().fromArray(positions[nextIndex]);

      const currentRotation = new Euler().fromArray(rotations[index], "XYZ");
      const nextRotation = new Euler().fromArray(rotations[nextIndex], "XYZ");

      // Interpolate between the current and next positions
      const newPosition = new Vector3().lerpVectors(
        currentPosition,
        nextPosition,
        lerpAmount
      );
      const newRotation = new Euler(
        MathUtils.lerp(currentRotation.x, nextRotation.x, lerpAmount),
        MathUtils.lerp(currentRotation.y, nextRotation.y, lerpAmount),
        MathUtils.lerp(currentRotation.z, nextRotation.z, lerpAmount),
        currentRotation.order
      );

      // Update the mesh position
      catRef.current.position.copy(newPosition);
      catRef.current.rotation.copy(newRotation);
    }
  }, [scroll]);
  useFrame((state) => {
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
    }
  });
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
