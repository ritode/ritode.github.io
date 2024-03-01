import { useProgress, Html, Center } from "@react-three/drei";
import { useState, useEffect } from "react";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import CatModel from "./CatModel";

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
              <h3
                style={{
                  marginLeft: "-56px",
                  fontWeight: 100,
                  fontSize: "32px",
                }}
              >
                Loading...
              </h3>
            </Html>
          </Center>
          <CatModel />
        </>
      )}
    </>
  );
}
