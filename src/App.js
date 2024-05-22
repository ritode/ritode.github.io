import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyEnvironment from "./components/3d/MyEnvironment";

import { Environment } from "@react-three/drei";
import LandingPage from "./components/3d/LandingPage";
import { Suspense, useState, useEffect } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
import AnimatedText from "./components/3d/AnimatedText";
import { Fog } from "three";
import FloaterScene from "./components/3d/FLoaterScene";
import Sidebar from "./components/2d/Sidebar";
import { isMobile } from "react-device-detect";
import PlanetScene from "./components/3d/PlanetScene";

function App() {
  const [dayMode, setDayMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(parseFloat((window.scrollY / 290).toFixed(2)));
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <div className="canvas">
        <Canvas shadows camera={{ fov: 45 }} fog={new Fog("#000", 5, 1000)}>
          <MyEnvironment dayMode={dayMode} />
          <Suspense fallback={<LandingPage />}>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
          </Suspense>
          {scroll <= 5 && (
            <AnimatedText
              scroll={scroll}
              scrollAnimation={[
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 2],
                [0, 1, 3.5],
              ]}
              text={
                isMobile
                  ? [
                      "Hello!",
                      "Fellow digital adventurers and ",
                      "Code connoisseurs!",
                      "--Scroll below--",
                    ]
                  : [
                      "Hello!",
                      "Fellow digital adventurers and code connoisseurs!",
                      "--Scroll below--",
                    ]
              }
            />
          )}
          {scroll > 4 && scroll <= 10 && (
            <AnimatedText
              scroll={scroll - 4}
              text={
                isMobile
                  ? [
                      "I'm Rito,",
                      "A web wizard with a ",
                      "flair for the creative.",
                    ]
                  : ["I'm Rito,", "A web wizard with a flair for the creative."]
              }
            />
          )}
          {scroll > 9 && scroll <= 15 && (
            <AnimatedText
              scroll={scroll - 9}
              text={[
                "Step into my digital playground,",
                "Where pixels play and websites come to life!",
              ]}
            />
          )}
          <PlanetScene scroll={scroll} />
          {scroll < 15 && <FloaterScene scroll={scroll} />}
          {/* <Asteroid position={[, 0, 0]} rotation={[0, 0, 0]} scale={0.5} />
          <Asteroids
            position={[-2, 2, -3]}
            rotation={[0.5, -1, -0.2]}
            scale={0.05}
          /> */}
        </Canvas>
      </div>
      <Sidebar scroll={scroll} />
      <div className="scroll-element" />
    </div>
  );
}

export default App;
