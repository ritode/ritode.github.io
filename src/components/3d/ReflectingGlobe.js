import { Caustics, MeshTransmissionMaterial } from "@react-three/drei";
export default function ReflectingGlobe() {
  return (
    <Caustics
      color="#FF8F20"
      position={[0, -1.5, 0]}
      lightSource={[5, 5, -10]}
      worldRadius={0.003}
      ior={1.16}
      intensity={0.004}
    >
      <mesh castShadow receiveShadow position={[-2, 0.3, -1]} scale={0.3}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          resolution={1024}
          distortion={0.25}
          color="#FF8F20"
          thickness={1}
          anisotropy={1}
        />
      </mesh>
    </Caustics>
  );
}
