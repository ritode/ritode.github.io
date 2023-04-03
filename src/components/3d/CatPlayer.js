import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useRef } from "react";
import { OBJECTS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import { useEffect } from "react";
export default function CatPlayer() {
  const cat = useGLTF("models/cat-ghost.glb");
  const catRef = useRef(null);
  useEffect(() => {
    useSceneStore.setState({ catGhost: catRef });
  }, [catRef]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (catRef.current) {
      catRef.current.rotation.x = MathUtils.lerp(
        catRef.current.rotation.x,
        Math.cos(t / 10) / 20,
        0.1
      );
      catRef.current.rotation.y = MathUtils.lerp(
        catRef.current.rotation.y,
        Math.sin(t / 10) / 4,
        0.1
      );
      catRef.current.rotation.z = MathUtils.lerp(
        catRef.current.rotation.z,
        Math.sin(t / 10) / 10,
        0.1
      );
      catRef.current.position.y = MathUtils.lerp(
        catRef.current.position.y,
        -Math.sin(t) / 7 - 1,
        0.1
      );
    }
  });
  return (
    <primitive
      key={OBJECTS.cat.key}
      object={cat.scene}
      position={OBJECTS.cat.position}
      ref={catRef}
      castShadow
    />
  );
}
