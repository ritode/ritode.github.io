import CatPlayer from "./CatPlayer";
import { useProgress, Html, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, Glitch } from "@react-three/postprocessing";

export default function LandingPage() {
  const { progress } = useProgress();
  const mesh = useRef(null);
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      {!(progress == 100) && (
        <>
          <EffectComposer>
            <Glitch
              delay={[0.5, 1.5]}
              duration={[0.6, 1.0]}
              strength={[0.5, 0.2]}
              mode={1} // try CONSTANT_MILD
              active // toggle on/off
              ratio={0.4}
            />
          </EffectComposer>
          <Center>
            <Html>
              <h1 style={{ marginLeft: "-60px", fontWeight: "1" }}>
                Loading...
              </h1>
            </Html>
          </Center>
        </>
      )}
      <CatPlayer />
    </>
  );
}