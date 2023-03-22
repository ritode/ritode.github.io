import { useEffect, useRef, useState } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Text3D, Center } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import { useSceneStore } from "../store/sceneStore";
import MyCameraControls from "./myCameraControls";
import LandingPage from "./LandingPage";
import { OBJECTS, CAMERA_PROPS } from "../constants/objects";
import { Environment } from "@react-three/drei";
import DisplayPage from "../2d/DisplayPage";
import Planet from "./Planet";
import Hint from "./Hints";

export default function Scene() {
  const { cameraController } = useSceneStore();

  const [cameraControlRef, setCameraControlRef] = useState(null);
  const [cameraProps, setCameraProps] = useState(CAMERA_PROPS);
  const [planetSelected, setPlanetSelected] = useState("");

  useEffect(() => {
    if (!planetSelected) {
      cameraControlRef?.current?.setTarget(0, 1, 0, true);
      cameraControlRef?.current?.moveTo(0, 0, 0, true);
      const ob = { ...cameraProps };
      ob.minPolarAngle = Math.PI / 2 - 0.1;
      ob.maxPolarAngle = Math.PI / 2 + 0.4;
      ob.azimuthRotateSpeed = -1.3;
      ob.polarRotateSpeed = -1.3;
      ob.maxDistance = 4.5;
      setCameraProps(ob);
      cameraControlRef?.current?.rotateTo(
        cameraControlRef?.current.azimuthAngle,
        1.5,
        true
      );
      cameraControlRef?.current?.dollyTo(4.5, true);
      window.history.replaceState(null, null, "/");
    } else {
      const ob = { ...CAMERA_PROPS };
      ob.minPolarAngle = 0;
      ob.maxPolarAngle = 2 * Math.PI;
      ob.azimuthRotateSpeed = 1.3;
      ob.polarRotateSpeed = 1.3;
      ob.maxDistance = 4.6;
      setCameraProps(ob);
    }
  }, [planetSelected]);

  return (
    <>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <MyCameraControls setRef={setCameraControlRef} props={cameraProps} />
      <LandingPage />
      <DisplayPage />
      <Hint cameraControlRef={cameraControlRef} type="Drag" />
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
