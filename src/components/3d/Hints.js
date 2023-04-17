import { Html } from "@react-three/drei";
import { isDesktop } from "react-device-detect";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import { HINTS, CAMERA_PROPS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";

export default function Hint({ type, position = new Vector3(0, 0, 0) }) {
  let cameraControlRef;
  useEffect(() => {
    cameraControlRef = useSceneStore.getState().cameraControl;
  }, [useSceneStore.getState().cameraControl]);

  const [transition, settransition] = useState(false);
  let intervalId;

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
    settransition(false);
  }
  const [showHint, setShowHint] = useState(true);

  function handleClick() {
    if (showHint) setShowHint(false);
  }
  useEffect(() => {
    window.addEventListener("click", () => handleClick());
    return () => {
      window.removeEventListener("click", () => handleClick());
    };
  });
  if (showHint) {
    return (
      <Html position={position} className="html-ob">
        <div className="hint">
          {isDesktop ? (
            <p>{HINTS[type].Desktop}</p>
          ) : (
            <p>{HINTS[type].Mobile}</p>
          )}
          <p>- click to continue -</p>
        </div>
      </Html>
    );
  } else return null;
}
