import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import { isDesktop } from "react-device-detect";
import { useSceneStore } from "../store/sceneStore";

export default function MyEnvironment() {
  const cameraControlRef = useRef(null);
  const { setCameraController } = useSceneStore();
  useEffect(() => {
    setCameraController(cameraControlRef);
  }, [cameraControlRef]);
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <color attach="background" args={["#202030"]} />
      <fog attach="fog" args={["#202030", 10, 25]} />
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
      {/* <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} /> */}
      {isDesktop && (
        <Sparkles count={200} scale={[20, 20, 10]} size={1} speed={2} />
      )}
    </>
  );
}
