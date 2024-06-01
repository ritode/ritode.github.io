import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyEnvironment from "./components/3d/MyEnvironment";

import { Environment, ScrollControls } from "@react-three/drei";
import LandingPage from "./components/3d/LandingPage";
import { Suspense, useState } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
import AnimatedTextContainer from "./components/3d/AnimatedText";
import { Fog } from "three";
// import FloaterScene from "./components/3d/FLoaterScene";
import Sidebar from "./components/2d/Sidebar";
// import { isMobile } from "react-device-detect";
import PlanetScene from "./components/3d/PlanetScene";
import CatModel from "./components/3d/CatModel";

function App() {
  const [dayMode, setDayMode] = useState(false);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <div className="canvas">
        <Canvas shadows camera={{ fov: 45 }} fog={new Fog("#000", 5, 1000)}>
          <MyEnvironment dayMode={dayMode} />
          <ScrollControls pages={8}>
            <Suspense fallback={<LandingPage />}>
              <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />

              <CatModel />
            </Suspense>
            <AnimatedTextContainer />
            <PlanetScene />
            {/* {scroll > 15 && <PlanetScene scroll={scroll} />}
          {scroll < 15 && <FloaterScene scroll={scroll} />} */}
            {/* <Asteroid position={[, 0, 0]} rotation={[0, 0, 0]} scale={0.5} />
          <Asteroids
            position={[-2, 2, -3]}
            rotation={[0.5, -1, -0.2]}
            scale={0.05}
          /> */}
          </ScrollControls>
          <Sidebar />
        </Canvas>
      </div>
      {/* <div className="scroll-element" /> */}
    </div>
  );
}

export default App;
