import { Html } from "@react-three/drei";
import { isDesktop } from "react-device-detect";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import { HINTS, CAMERA_PROPS } from "../constants/objects";

export default function Hint({
  cameraControlRef,
  type,
  position = new Vector3(0, 0, 0),
  setActive,
}) {
  const [active, setactive] = useState(true);
  const [transition, settransition] = useState(false);
  let intervalId;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    setActive(active);
  }, [active]);

  useEffect(() => {
    window.addEventListener("click", () => setactive(false));
    return () => {
      window.removeEventListener("click", () => setactive(false));
    };
  });

  async function dragCameraAnimation() {
    if (type === "Drag") {
      await cameraControlRef?.current.rotateTo(
        getRandomArbitrary(0, 2 * Math.PI),
        getRandomArbitrary(
          CAMERA_PROPS.minPolarAngle,
          CAMERA_PROPS.maxPolarAngle
        ),
        true
      );
    } else if (type === "Zoom") {
      {
        await cameraControlRef?.current.dollyTo(
          getRandomArbitrary(
            CAMERA_PROPS.minDistance,
            CAMERA_PROPS.maxDistance
          ),
          true
        );
      }
    }
    settransition(false);
  }

  useEffect(() => {
    if (active) {
      console.info("active");
      intervalId = setInterval(() => {
        if (cameraControlRef) settransition(true);
      }, 2000);
    } else {
      console.log("inactive");
      clearInterval(intervalId);
      settransition(false);
    }
  }, [active, cameraControlRef]);

  useEffect(() => {
    if (transition && active) {
      dragCameraAnimation();
      console.log("rito", transition, active);
    }
  }, [transition, active]);

  return (
    <Html position={position} className="html-ob">
      {active && (
        <div className="overlay hint">
          {isDesktop ? (
            <p>{HINTS[type].Desktop}</p>
          ) : (
            <p>{HINTS[type].Mobile}</p>
          )}
          <p>- click to continue -</p>
        </div>
      )}
    </Html>
  );
}
