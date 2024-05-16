import { Html } from "@react-three/drei";
import { isDesktop } from "react-device-detect";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import { HINTS } from "../constants/objects";
// import { useFrame } from "@react-three/fiber";

export default function Hint({ type, position = new Vector3(0, 0, 0) }) {
  const [showHint, setShowHint] = useState(true);

  // useFrame(() => {
  //   if (showHint && type === "Drag") {
  //     if (!cameraControlRef.current.active) dragCameraAnimation();
  //   }
  // });

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
          alt="hint-img"
        />
      </Html>
    );
  } else return null;
}
