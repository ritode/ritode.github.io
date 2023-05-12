import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useRef } from "react";
import { OBJECTS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import { useEffect } from "react";
import CatModel from "./CatModel";
export default function CatPlayer() {
  const cat = useGLTF("models/cat-ghost.glb");
  return (
    <>
      <CatModel position={OBJECTS.cat.position} />
      {/* <primitive
        key={OBJECTS.cat.key}
        object={cat.scene}
        position={OBJECTS.cat.position}
        ref={catRef}
        castShadow
      /> */}
    </>
  );
}
