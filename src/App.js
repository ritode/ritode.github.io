import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/3d/Scene";
import MyEnvironment from "./components/3d/MyEnvironment";

import { Environment, Text3D } from "@react-three/drei";
import LoadingPage from "./components/3d/LandingPage";
import { Suspense, useState, useEffect } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
import { Stats } from "@react-three/drei";
import AboutMePlanet from "./components/3d/AboutMePlanet";
import CatModel from "./components/3d/CatModel";
import AnimatedText from "./components/3d/AnimatedText";

function App() {
  const [dayMode, setDayMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [playerScroll, setPlayerScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scroll <= 1500) setPlayerScroll(scroll);
  }, [scroll]);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <div className="canvas">
        <Canvas shadows camera={{ fov: 45 }}>
          <MyEnvironment dayMode={dayMode} />
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
          <Suspense fallback={null}>
            <CatModel scroll={scroll <= 1500 ? scroll : playerScroll} />
          </Suspense>
          {scroll <= 2000 && (
            <AnimatedText
              scroll={scroll}
              texts={[
                ["Hello,", "Fellow digital adventurers and code connoisseurs!"],
                ["I'm Rito,", "A web wizard with a flair for the creative."],
                [
                  "Step into my digital playground,",
                  "Where pixels play and websites come to life!",
                ],
              ]}
            />
          )}
          <Suspense>
            {scroll > 2000 && <AboutMePlanet scroll={scroll} />}
          </Suspense>
        </Canvas>
      </div>
      <div className="scroll-element" />
    </div>
  );
}

export default App;
