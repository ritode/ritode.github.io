import { Html } from "@react-three/drei";
import { isDesktop } from "react-device-detect";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import { HINTS } from "../constants/objects";

export default function Hint({
  cameraControlRef,
  type,
  position = new Vector3(0, 0, 0),
}) {
  const [active, setactive] = useState(true);
  const [transition, settransition] = useState(false);
  let intervalId;

  useEffect(() => {
    window.addEventListener("click", () => setactive(false));
    return () => {
      window.removeEventListener("click", () => setactive(false));
    };
  });

  async function dragCameraAnimation() {
    if (type === "Drag") {
      await cameraControlRef?.current.rotateTo(
        cameraControlRef?.current.azimuthAngle - 0.8,
        cameraControlRef?.current.polarAngle,
        true
      );
    } else if (type === "Zoom") {
      {
        await cameraControlRef?.current.dollyTo(
          2,
          cameraControlRef?.current.polarAngle
        );
        await cameraControlRef?.current.dollyTo(
          4.3,
          cameraControlRef?.current.polarAngle,
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
      if (type == "Drag") cameraControlRef.current.rotateTo(0, 1, true);
      else if (type == "Zoom") cameraControlRef.current.dollyTo(4.4, true);
    }
  }, [active, cameraControlRef]);

  useEffect(() => {
    if (transition && active) {
      dragCameraAnimation();
      console.log("rito", transition, active);
    }
  }, [transition, active]);

  return (
    <Html position={position}>
      <div className="screen">
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
      </div>
    </Html>
  );
}
