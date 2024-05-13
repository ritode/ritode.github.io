import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyEnvironment from "./components/3d/MyEnvironment";

import { Environment } from "@react-three/drei";
import LoadingPage from "./components/3d/LandingPage";
import { Suspense, useState, useEffect } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
import AboutMePlanet from "./components/3d/AboutMePlanet";
import CatModel from "./components/3d/CatModel";
import AnimatedText from "./components/3d/AnimatedText";
import { Fog } from "three";
import FloaterAnimals from "./components/3d/objects/FloaterAnimals";

function App() {
  const [dayMode, setDayMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [playerScroll, setPlayerScroll] = useState(0);
  const [AboutMeScroll, setAboutMeScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scroll <= 1500) setPlayerScroll(scroll);
    if (scroll <= 2500) setAboutMeScroll(scroll - 1500);
  }, [scroll]);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <div className="canvas">
        <Canvas shadows camera={{ fov: 45 }} fog={new Fog("#000", -10, 1000)}>
          <MyEnvironment dayMode={dayMode} />
          <Suspense fallback={<LoadingPage />}>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
          </Suspense>
          <Suspense fallback={<LoadingPage />}>
            <CatModel scroll={scroll <= 1500 ? scroll : playerScroll} />
          </Suspense>
          {scroll <= 500 && (
            <AnimatedText
              scroll={scroll}
              text={[
                "Hello,",
                "Fellow digital adventurers and code connoisseurs!",
              ]}
            />
          )}
          {scroll > 400 && scroll <= 1000 && (
            <AnimatedText
              scroll={scroll - 400}
              text={[
                "I'm Rito,",
                "A web wizard with a flair for the creative.",
              ]}
            />
          )}
          {scroll > 900 && scroll <= 1500 && (
            <AnimatedText
              scroll={scroll - 900}
              text={[
                "Step into my digital playground,",
                "Where pixels play and websites come to life!",
              ]}
            />
          )}
          <Suspense>
            {scroll > 1500 && scroll <= 2500 && (
              <AboutMePlanet
                scroll={scroll <= 2500 ? scroll - 1500 : AboutMeScroll}
              />
            )}
          </Suspense>
          <Suspense>
            {/* {scroll > 1500 && scroll <= 2000 && ( */}
            <FloaterAnimals
              obj={"Colobus_Animations.glb"}
              position={[0.3, 0, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Gecko_Animations.glb"}
              position={[-0.4, 0.5, 3.5]}
              rotation={[0, 0.5, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Herring_Animations.glb"}
              position={[-0.3, 0, 3.5]}
              rotation={[0, -0.4, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Inkfish_Animations.glb"}
              position={[0.3, -0.2, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Muskrat_Animations.glb"}
              position={[0.4, 0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Pudu_Animations.glb"}
              position={[-0.4, 0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Sparrow_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            <FloaterAnimals
              obj={"Taipan_Animations.glb"}
              position={[-0.4, -0.3, 3.5]}
              rotation={[0, 0.2, 0]}
              // scroll={scroll <= 4000 ? scroll - 2000 : AboutMeScroll}
            />
            {/* )} */}
          </Suspense>
        </Canvas>
      </div>
      <div className="scroll-element" />
    </div>
  );
}

export default App;
