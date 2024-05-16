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
import ProjectPlanet from "./components/3d/ProjectPlanet";
import TechPlanet from "./components/3d/TechPlanet";
import ArtPlanet from "./components/3d/ArtPlanet";
import TravelPlanet from "./components/3d/TravelPlanet";
import CreditsPlanet from "./components/3d/CreditsPlanet";
import Scene from "./components/3d/Scene";
import Sidebar from "./components/2d/Sidebar";
import { isMobile } from "react-device-detect";

function App() {
  const [dayMode, setDayMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [sections, setSections] = useState([
    { name: "player", start: 0, end: 15, scroll: 0 },
    { name: "aboutMe", start: 15, end: 25, scroll: 0 },
    { name: "projects", start: 25, end: 35, scroll: 0 },
    { name: "tech", start: 35, end: 45, scroll: 0 },
    { name: "art", start: 45, end: 55, scroll: 0 },
    { name: "travel", start: 55, end: 65, scroll: 0 },
    { name: "credits", start: 65, end: 75, scroll: 0 },
  ]);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(parseFloat((window.scrollY / 290).toFixed(2)));
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
        <Canvas shadows camera={{ fov: 45 }} fog={new Fog("#000", 5, 1000)}>
          <MyEnvironment dayMode={dayMode} />
          <Suspense fallback={<LoadingPage />}>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
          </Suspense>
          <Suspense fallback={<LoadingPage />}>
            <CatModel
              scroll={sections.find((s) => s.name === "player")?.scroll}
            />
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
          <Suspense>
            {scroll > 15 && scroll <= 25 && (
              <AboutMePlanet
                scroll={sections.find((s) => s.name === "aboutMe")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 25 && scroll <= 35 && (
              <ProjectPlanet
                scroll={sections.find((s) => s.name === "projects")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 35 && scroll <= 45 && (
              <TechPlanet
                scroll={sections.find((s) => s.name === "tech")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 45 && scroll <= 55 && (
              <ArtPlanet
                scroll={sections.find((s) => s.name === "art")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 55 && scroll <= 65 && (
              <TravelPlanet
                scroll={sections.find((s) => s.name === "travel")?.scroll}
              />
            )}
          </Suspense>
          <Suspense>
            {scroll > 65 && scroll <= 75 && (
              <CreditsPlanet
                scroll={sections.find((s) => s.name === "credits")?.scroll}
              />
            )}
          </Suspense>
          {scroll < 15 && <Scene scroll={scroll} />}
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
