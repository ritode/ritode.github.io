import { Environment, Sparkles, CameraControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function MyEnvironment() {
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <color attach="background" args={["#202030"]} />
      <fog attach="fog" args={["#202030", 10, 25]} />
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
      {/* <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} /> */}
      {/* <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} /> */}
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <CameraControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.2}
        // minPolarAngle={Math.PI / 2 - 0.1}
        maxPolarAngle={Math.PI / 2 + 0.3}
        // maxDistance={4.5}
        // minDistance={0.2}
        target={[0, 1, 0]}
        distance={4}
        dampingFactor={0.5}
      />
    </>
  );
}
