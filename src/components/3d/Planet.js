import { isMobile } from "react-device-detect";

import { useGLTF, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef, useState, useEffect } from "react";

import { PLANETS, CAMERA_PROPS } from "../constants/objects";
import { useSceneStore } from "../store/sceneStore";
import Hint from "./Hints";

export default function Planet({ name }) {
  const cameraControlRef = useSceneStore((state) => state.cameraControl);

  const cameraControlProps = useSceneStore((s) => s.cameraControlProps);
  const setCameraControlProps = useSceneStore((s) => s.setCameraControlProps);
  const setPlanetSelected = useSceneStore((state) => state.setPlanetSelected);

  const [showZoomHint, setShowZoomHint] = useState(false);
  const [hovered, setHovered] = useState(false);

  const p = useGLTF(PLANETS[name].model);
  const pref = useRef(null);

  const [selected, setSelected] = useState();

  useFrame(() => {
    if (pref) {
      // if (!selected) {
      switch (name) {
        case PLANETS.Me.title:
          pref.current.rotation.y += 0.005;
          pref.current.rotation.z += 0.001;
          break;
        case PLANETS.Tech.title:
          pref.current.children[0].children[0].children[0].rotation.x -= 0.002;
          pref.current.children[0].children[0].children[1].rotation.z += 0.005;
          break;
        case PLANETS.Projects.title:
          pref.current.children[0].children[0].children[0].children[0].rotation.y += 0.001;
          pref.current.children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          break;
        case PLANETS.Art.title:
          pref.current.rotation.y += 0.005;
          break;
        case PLANETS.Travel.title:
          pref.current.children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
          pref.current.children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          break;
      }
    }
    // }
  });

  function handlePlanetClick() {
    if (typeof selected === "undefined") setShowZoomHint(true);
    if (!selected) {
      setPlanetSelected(name);
      setSelected(true);
      cameraControlRef?.current?.setTarget(...PLANETS[name].position, true);
      if (isMobile) cameraControlRef?.current?.dollyTo(6, true);
      else cameraControlRef?.current?.dollyTo(4.5, true);
      window.history.replaceState(null, null, `?${name}`);
    }
    const ob = { ...cameraControlProps };
    ob.minPolarAngle = 0;
    ob.maxPolarAngle = 2 * Math.PI;
    ob.azimuthRotateSpeed = -1 * CAMERA_PROPS.azimuthRotateSpeed;
    ob.polarRotateSpeed = -1 * CAMERA_PROPS.polarRotateSpeed;
    ob.maxDistance = 6;
    setCameraControlProps(ob);
  }

  function handlePlanetUnclick() {
    setPlanetSelected("");
    setSelected(false);
    window.history.replaceState(null, null, `?${name}`);
    cameraControlRef?.current?.setTarget(0, 1, 0, true);
    cameraControlRef?.current?.moveTo(0, 0, 0, true);
    const ob = { ...cameraControlProps };
    ob.minPolarAngle = CAMERA_PROPS.minPolarAngle;
    ob.maxPolarAngle = CAMERA_PROPS.maxPolarAngle;
    ob.azimuthRotateSpeed = CAMERA_PROPS.azimuthRotateSpeed;
    ob.polarRotateSpeed = CAMERA_PROPS.polarRotateSpeed;
    ob.maxDistance = CAMERA_PROPS.maxDistance;
    setCameraControlProps(ob);
    cameraControlRef?.current?.rotateTo(
      cameraControlRef?.current.azimuthAngle,
      1.5,
      true
    );
    cameraControlRef?.current?.dollyTo(4.5, true);
    window.history.replaceState(null, null, "/");
  }

  useEffect(() => {
    window.addEventListener("dblclick", () => {
      handlePlanetUnclick();
    });
    return () => {
      window.removeEventListener("dblclick", () => {
        handlePlanetUnclick();
      });
    };
  });

  return (
    <mesh
      key={PLANETS[name].key}
      position={PLANETS[name].position}
      castShadow
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      scale={hovered && !selected ? 1.1 : 1}
    >
      <primitive
        object={p.scene}
        ref={pref}
        scale={
          isMobile ? PLANETS[name].scale.mobile : PLANETS[name].scale.desktop
        }
        onClick={() => handlePlanetClick()}
      />
      {!selected && (
        <Text3D
          font="./fonts/Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.5}
          scale={[1, 1, 0.5]}
          position={PLANETS[name].textPositionOffset}
          rotation={PLANETS[name].textRotationOffset}
        >
          {PLANETS[name].text}
          <meshNormalMaterial />
        </Text3D>
      )}
      {showZoomHint && <Hint type="Zoom" active={showZoomHint} />}
    </mesh>
  );
}
