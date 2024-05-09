import MyCameraControls from "./myCameraControls";
import LandingPage from "./LandingPage";
import { Environment } from "@react-three/drei";
import Planet from "./Planet";
import { PLANETS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import Hint from "./Hints";
import DisplayPage from "../2d/DisplayPage";
import AboutMePlanet from "../3d/AboutMePlanet";
import { useState } from "react";
import CatModel from "./CatModel";
import { useFrame } from "react-three-fiber";

export default function Scene({ scroll }) {
  const planetSelected = useSceneStore((state) => state.planetSelected);

  const cameraControlProps = useSceneStore((s) => s.cameraControlProps);
  const cameraControl = useSceneStore((s) => s.cameraControl);
  const [showCat, setShowCat] = useState(true);

  useFrame(() => {
    if (cameraControl?.current?.polarAngle > Math.PI - 0.1) {
      setShowCat(false);
    } else setShowCat(true);
  });

  return (
    <>
      {/* <MyCameraControls props={cameraControlProps} /> */}
      <LandingPage />
      <Hint type="Drag" />
      <DisplayPage planet={planetSelected} />
      {Object.keys(PLANETS).map((key) => (
        <Planet name={key} />
      ))}
      {/* {showCat && <CatModel />} */}
    </>
  );
}
