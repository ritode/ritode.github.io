// CameraControlContext.js
import React, { createContext, useContext, useRef } from "react";

const CameraControlContext = createContext(null);

export const useCameraControl = () => useContext(CameraControlContext);

export const CameraControlProvider = ({ children }) => {
  const cameraControlRef = useRef();

  return (
    <CameraControlContext.Provider value={cameraControlRef}>
      {children}
    </CameraControlContext.Provider>
  );
};
