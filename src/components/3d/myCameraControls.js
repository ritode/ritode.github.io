import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
export default function MyCameraControls({ props, setRef }) {
  const ref = useRef(null);
  useEffect(() => {
    setRef(ref);
  });

  return (
    <CameraControls
      makeDefault
      autoRotate
      autoRotateSpeed={0.2}
      minPolarAngle={props.minPolarAngle}
      maxPolarAngle={props.maxPolarAngle}
      maxDistance={5}
      minDistance={1}
      target={[0, 1, 0]}
      distance={4}
      draggingSmoothTime={0.5}
      boundaryEnclosesCamera
      azimuthRotateSpeed={props.azimuthRotateSpeed}
      polarRotateSpeed={props.polarRotateSpeed}
      ref={ref}
    />
  );
}
