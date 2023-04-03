import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
export default function MyCameraControls({ props, setRef }) {
  const ref = useRef(null);
  useEffect(() => {
    setRef(ref);
    ref.current.mouseButtons.wheel = 0;
  });

  return (
    <CameraControls
      makeDefault
      autoRotate
      autoRotateSpeed={1}
      minPolarAngle={props.minPolarAngle}
      maxPolarAngle={props.maxPolarAngle}
      maxDistance={props.maxDistance}
      minDistance={props.minDistance}
      target={[0, 1, 0]}
      distance={props.distance}
      draggingSmoothTime={0.5}
      boundaryEnclosesCamera
      azimuthRotateSpeed={props.azimuthRotateSpeed}
      polarRotateSpeed={props.polarRotateSpeed}
      smoothTime={1}
      restThreshold={0.12}
      ref={ref}
    />
  );
}
