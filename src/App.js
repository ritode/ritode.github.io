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
import ProjectPlanet from "./components/3d/ProjectPlanet";
import TechPlanet from "./components/3d/TechPlanet";
import ArtPlanet from "./components/3d/ArtPlanet";
import TravelPlanet from "./components/3d/TravelPlanet";
import CreditsPlanet from "./components/3d/CreditsPlanet";

function App() {
  const [dayMode, setDayMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [sections, setSections] = useState([
    { name: "player", start: 0, end: 1500, scroll: 0 },
    { name: "aboutMe", start: 1500, end: 2500, scroll: 0 },
    { name: "projects", start: 2500, end: 3500, scroll: 0 },
    { name: "tech", start: 3500, end: 4500, scroll: 0 },
    { name: "art", start: 4500, end: 5500, scroll: 0 },
    { name: "travel", start: 5500, end: 6500, scroll: 0 },
    { name: "credits", start: 6500, end: 7500, scroll: 0 },
  ]);
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
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        scroll: scroll - section.start,
      }))
    );
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
            <CatModel
              scroll={sections.find((s) => s.name === "player")?.scroll}
            />
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
                scroll={sections.find((s) => s.name === "aboutMe")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 2500 && scroll <= 3500 && (
              <ProjectPlanet
                scroll={sections.find((s) => s.name === "projects")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 3500 && scroll <= 4500 && (
              <TechPlanet
                scroll={sections.find((s) => s.name === "tech")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 4500 && scroll <= 5500 && (
              <ArtPlanet
                scroll={sections.find((s) => s.name === "art")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 5500 && scroll <= 6500 && (
              <TravelPlanet
                scroll={sections.find((s) => s.name === "travel")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 6500 && scroll <= 7500 && (
              <CreditsPlanet
                scroll={sections.find((s) => s.name === "credits")?.scroll}
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
