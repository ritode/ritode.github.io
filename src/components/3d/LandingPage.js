import CatPlayer from "./CatPlayer";
import { useProgress, Html, Center } from "@react-three/drei";
import { useState, useEffect } from "react";
import { EffectComposer, Glitch } from "@react-three/postprocessing";

export default function LandingPage() {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress == 100) setLoading(false);
  }, [progress]);

  return (
    <>
      {loading && (
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
