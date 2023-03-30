import { useEffect, useState } from "react";
import MyCameraControls from "./myCameraControls";
import LandingPage from "./LandingPage";
import { CAMERA_PROPS } from "../constants/objects";
import { Environment } from "@react-three/drei";
import DisplayPage from "../2d/DisplayPage";
import Planet from "./Planet";
import Hint from "./Hints";
import { OBJECTS } from "../constants/objects";

export default function Scene() {
  const [cameraControlRef, setCameraControlRef] = useState(null);
  const [cameraProps, setCameraProps] = useState(CAMERA_PROPS);
  const [planetSelected, setPlanetSelected] = useState("");
  const [showDragHint, setShowDragHint] = useState(true);
  const [showZoomHint, setShowZoomHint] = useState(false);
  useEffect(() => {
    if (!showDragHint) setShowZoomHint(true);
  }, [showDragHint]);

  useEffect(() => {
    if (!planetSelected) {
      cameraControlRef?.current?.setTarget(0, 1, 0, true);
      cameraControlRef?.current?.moveTo(0, 0, 0, true);
      const ob = { ...cameraProps };
      ob.minPolarAngle = CAMERA_PROPS.minPolarAngle;
      ob.maxPolarAngle = CAMERA_PROPS.maxPolarAngle;
      ob.azimuthRotateSpeed = CAMERA_PROPS.azimuthRotateSpeed;
      ob.polarRotateSpeed = CAMERA_PROPS.polarRotateSpeed;
      ob.maxDistance = CAMERA_PROPS.maxDistance;
      setCameraProps(ob);
      // cameraControlRef?.current?.rotateTo(
      //   cameraControlRef?.current.azimuthAngle,
      //   1.5,
      //   true
      // );
      cameraControlRef?.current?.dollyTo(4.5, true);
      window.history.replaceState(null, null, "/");
    } else {
      console.log(planetSelected);
      const ob = { ...cameraProps };
      ob.minPolarAngle = 0;
      ob.maxPolarAngle = 2 * Math.PI;
      ob.azimuthRotateSpeed = -1 * CAMERA_PROPS.azimuthRotateSpeed;
      ob.polarRotateSpeed = -1 * CAMERA_PROPS.polarRotateSpeed;
      ob.maxDistance = 4.6;
      setCameraProps(ob);
    }
  }, [planetSelected]);

  return (
    <>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <MyCameraControls setRef={setCameraControlRef} props={cameraProps} />
      <LandingPage />
      {!showZoomHint && <DisplayPage />}
      {showDragHint && (
        <Hint
          cameraControlRef={cameraControlRef}
          type="Drag"
          setActive={setShowDragHint}
        />
      )}
      {showZoomHint && planetSelected && (
        <Hint
          cameraControlRef={cameraControlRef}
          type="Zoom"
          position={OBJECTS[planetSelected].position}
          setActive={setShowZoomHint}
        />
      )}
      <Planet
        name="planet1"
        cameraControlRef={cameraControlRef}
        setPlanet={setPlanetSelected}
      />
      <Planet
        name="planet2"
        cameraControlRef={cameraControlRef}
        setPlanet={setPlanetSelected}
      />
      <Planet
        name="planet3"
        cameraControlRef={cameraControlRef}
        setPlanet={setPlanetSelected}
      />
      <Planet
        name="planet4"
        cameraControlRef={cameraControlRef}
        setPlanet={setPlanetSelected}
      />
      <Planet
        name="planet5"
        cameraControlRef={cameraControlRef}
        setPlanet={setPlanetSelected}
      />
    </>
  );
}
