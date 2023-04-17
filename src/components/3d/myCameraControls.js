import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useSceneStore } from "../store/sceneStore";
import { CAMERA_PROPS } from "../constants/objects";
export default function MyCameraControls({ props }) {
  const ref = useRef(null);
  const setCameraControlRef = useSceneStore((state) => state.setCameraControl);
  const cameraSettings = props ?? CAMERA_PROPS;

  useEffect(() => {
    setCameraControlRef(ref);
    ref.current.mouseButtons.wheel = 0;
  });

  return (
    <CameraControls
      makeDefault
      autoRotate={cameraSettings.autoRotate}
      autoRotateSpeed={cameraSettings.autoRotateSpeed}
      minPolarAngle={cameraSettings.minPolarAngle}
      maxPolarAngle={cameraSettings.maxPolarAngle}
      maxDistance={cameraSettings.maxDistance}
      minDistance={cameraSettings.minDistance}
      target={[0, 1, 0]}
      distance={cameraSettings.distance}
      draggingSmoothTime={0.5}
      boundaryEnclosesCamera
      azimuthRotateSpeed={cameraSettings.azimuthRotateSpeed}
      polarRotateSpeed={cameraSettings.polarRotateSpeed}
      smoothTime={1}
      restThreshold={0.12}
      ref={ref}
    />
  );
}
