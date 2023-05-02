import { Sparkles, Cloud, Sky } from "@react-three/drei";
import { isDesktop } from "react-device-detect";

export default function MyEnvironment({ dayMode }) {
  return (
    <>
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <color attach="background" args={dayMode ? ["#cfead9"] : ["#202030"]} />
      <fog attach="fog" args={["#202030", 10, 25]} />
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
      {/* <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} /> */}
      {isDesktop && !dayMode && (
        <Sparkles count={100} scale={[20, 20, 10]} size={6} speed={2} />
      )}
      {dayMode && (
        <Sky
          azimuth={0.1}
          turbidity={1}
          rayleigh={0.3}
          inclination={1}
          distance={1000}
        />
      )}
    </>
  );
}
