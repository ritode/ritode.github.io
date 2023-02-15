import './App.css';

import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { MathUtils } from 'three';
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  Text3D,
  Sparkles,
  Center
} from '@react-three/drei'
import Scene from './components/3d/Scene';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'

function App() {

  return (
    <div className="App">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <color attach="background" args={['#202030']} />
        <fog attach="fog" args={['#202030', 10, 25]} />
        <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
        <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} />
        <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} />
        <Scene />
        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.8}
          opacity={1}
          scale={12}
          position={[0, -1.5, 0]}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        {/* <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={13} maxDistance={17} /> */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={0.3} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
