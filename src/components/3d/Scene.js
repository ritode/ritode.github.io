import { useEffect, useState } from "react";
import MyCameraControls from "./myCameraControls";
import LandingPage from "./LandingPage";
import { Environment } from "@react-three/drei";
import Planet from "./Planet";
import { PLANETS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import Hint from "./Hints";
import DisplayPage from "../2d/DisplayPage";

export default function Scene() {
  const planetSelected = useSceneStore((state) => state.planetSelected);

  const cameraControlProps = useSceneStore((s) => s.cameraControlProps);

  return (
    <>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <MyCameraControls props={cameraControlProps} />
      <LandingPage />
      <Hint type="Drag" />
      <DisplayPage planet={planetSelected} />
      {Object.keys(PLANETS).map((key) => (
        <Planet name={key} />
      ))}
    </>
  );
}
