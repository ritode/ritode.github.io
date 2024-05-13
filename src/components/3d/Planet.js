import { useRef, useState, useEffect } from "react";
import { useGLTF, Text3D, CameraControls, Center } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import { Vector3 } from "three";
import { useSpring, animated, config } from "@react-spring/three";
import useScrollAnimation from "../../utils/useScrollAnimation";
import Hint from "./Hints";
import { useFrame } from "react-three-fiber";
export default function Planet({ config, scroll, idleAnimation, children }) {
  const [isSelected, setSelected] = useState();
  const [showZoomHint, setShowZoomHint] = useState(false);
  const [hovered, setHovered] = useState(false);
  const pref = useRef();
  const cameraControlRef = useRef();

  const p = useGLTF(config.model);

  function handlePlanetClick() {
    if (typeof isSelected === "undefined") setShowZoomHint(true);
    if (!isSelected) {
      console.log("Planet Selected");
      setSelected(true);
      cameraControlRef?.current?.setTarget(
        pref.current.position.x,
        isMobile
          ? pref.current.position.y + 0.75
          : pref.current.position.y + 0.5,
        pref.current.position.z,
        true
      );
      if (isMobile) cameraControlRef?.current?.dollyTo(4, true);
      else cameraControlRef?.current?.dollyTo(4.5, true);
      // window.history.replaceState(null, null, `?${name}`);
      cameraControlRef?.current?.rotatePolarTo(1.6, true);
      // ob.maxDistance = isMobile ? 4 : 3.5;
      cameraControlRef.current.minDistance = 3;
      cameraControlRef.current.maxDistance = 5;
      cameraControlRef.current.polarRotateSpeed = 0;
      cameraControlRef.current.azimuthRotateSpeed = 0.4;
      pref.current.rotation.setFromVector3(new Vector3(0, 1.3, 0));
    }
  }
  function handlePlanetUnclick() {
    cameraControlRef.current.reset();
    setSelected(false);
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
  const { calculateAnimation } = useScrollAnimation(
    scroll,
    [
      [0, 1.5, -20],
      [0, 1.5, -5],
      [0, 0, 0],
      [0, 0, 2],
      [0, -2, 5],
    ],
    null,
    250
  );

  useEffect(() => {
    calculateAnimation(scroll, pref);
  }, [scroll, calculateAnimation]);
  const { scale } = useSpring({
    scale: hovered && !isSelected ? 1.1 : 1,
    config: config.wobbly,
  });
  useFrame(() => {
    idleAnimation(pref, isSelected);
  });

  return (
    <>
      {!isSelected && (
        <Center
          position={config.textPositionOffset}
          rotation={config.textRotationOffset}
        >
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
          >
            {config.title}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      )}
      <animated.mesh
        position={config.position}
        ref={pref}
        castShadow
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        scale={scale}
      >
        <primitive
          object={p.scene}
          rotation={config.rotation}
          scale={isMobile ? config.scale.mobile : config.scale.desktop}
          onClick={() => handlePlanetClick()}
        />
        {isSelected && children}
      </animated.mesh>
      <CameraControls
        ref={cameraControlRef}
        enabled={typeof isSelected === "undefined" ? false : isSelected}
        dollySpeed={0}
      />

      {showZoomHint && (
        <Hint type="Zoom" active={showZoomHint} position={[0, 1, 0]} />
      )}
    </>
  );
}
