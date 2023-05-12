import { Html } from "@react-three/drei";
import { isDesktop } from "react-device-detect";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import { HINTS, CAMERA_PROPS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import { useFrame } from "@react-three/fiber";

export default function Hint({ type, position = new Vector3(0, 0, 0) }) {
  let cameraControlRef;
  useEffect(() => {
    cameraControlRef = useSceneStore.getState().cameraControl;
  }, [useSceneStore.getState().cameraControl]);

  const [showHint, setShowHint] = useState(true);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  async function dragCameraAnimation() {
    await cameraControlRef?.current.rotateTo(
      getRandomArbitrary(0, 2 * Math.PI),
      getRandomArbitrary(
        CAMERA_PROPS.minPolarAngle,
        CAMERA_PROPS.maxPolarAngle
      ),
      true
    );
  }

  useFrame(() => {
    if (showHint && type === "Drag") {
      if (!cameraControlRef.current.active) dragCameraAnimation();
    }
  });

  function handleClick() {
    if (showHint) setShowHint(false);
  }
  useEffect(() => {
    window.addEventListener("click", () => handleClick());
    return () => {
      window.removeEventListener("click", () => handleClick());
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setShowHint(false);
    }, 6000);
  });

  if (showHint) {
    return (
      <Html position={position} className="html-ob">
        <img
          src={isDesktop ? HINTS[type].Desktop : HINTS[type].Mobile}
          className="hint-img"
        />
      </Html>
    );
  } else return null;
}
