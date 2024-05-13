import { Html, useGLTF, Text3D, CameraControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { Euler, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import { useSceneStore } from "../store/sceneStore";
import { CAMERA_PROPS } from "../constants/objects";
import { MathUtils } from "three";
import { useSpring, animated, config } from "@react-spring/three";
import RoboModel from "./RoboModel";
import GameboyModel from "./GameboyModel";
import Arrow from "./objects/Arrow";
import Rock from "./objects/Rock";
import Ps5 from "./objects/Ps5";
import Penguin from "./objects/Penguin";
import MeOb from "./objects/MeOb";
import Hint from "./Hints";
import "../2d/pageStyle.css";
import useScrollAnimation from "../../utils/useScrollAnimation";

export default function AboutMePlanet({ scroll }) {
  const cameraControlRef = useRef(null);
  const Me = {
    title: "Me",
    key: "p1",
    model: "models/about-me.glb",
    text: "Me",
    textPositionOffset: new Vector3(-0.5, 2, -3.5),
    textRotationOffset: [0.2, 0, 0],
    position: new Vector3(0, 1.5, -5),
    rotation: new Euler(-0.45, 0, 0.65),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.023),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.025),
    },
  };
  const TAU = Math.PI * 2;

  function normalizeAngle(angle) {
    return MathUtils.euclideanModulo(angle, TAU);
  }

  const [showZoomHint, setShowZoomHint] = useState(false);
  const [selected, setSelected] = useState();
  const [dialog, setDialog] = useState(`Hi, I am Ritobrita De and I am a <br />
  <b>
    <i>Creative Developer</i>
  </b>
  .`);
  const p = useGLTF(Me.model);
  const pref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (pref) {
      if (!selected) {
        pref.current.rotation.y += 0.005;
        pref.current.rotation.z += 0.001;
      }
    }
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

  useFrame(() => {
    if (selected) {
      const normalizedAzimuthAngle = normalizeAngle(
        cameraControlRef?.current?.azimuthAngle
      );
      if (normalizedAzimuthAngle > 0 && normalizedAzimuthAngle <= 5.8) {
        if (normalizedAzimuthAngle > 4) {
          setDialog(`Currently I am focusing on Front End development.`);
        } else if (normalizedAzimuthAngle > 3) {
          setDialog(`and <b>Robotics</b>`);
        } else if (normalizedAzimuthAngle > 2) {
          setDialog(`I have had experience in <b>Game Development</b>`);
        } else if (normalizedAzimuthAngle > 1) {
          if (isMobile)
            setDialog(
              `I love taking a concept and <br/> transforming it into a
            tangible creation<br/> that can be experienced and enjoyed.`
            );
          else
            setDialog(
              `I love taking a concept or an idea and transforming it into a <br/>
            tangible creation that can be experienced and enjoyed.`
            );
        } else {
          setDialog(`Hi, I am Ritobrita De and I am a <br />
            <b>
              <i>Creative Developer</i>
            </b>
            .`);
        }
      }
    }
  });

  function handlePlanetClick() {
    if (typeof selected === "undefined") setShowZoomHint(true);
    if (!selected) {
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
  const { scale } = useSpring({
    scale: hovered && !selected ? 1.1 : 1,
    config: config.wobbly,
  });

  return (
    <>
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
          position={Me.textPositionOffset}
          rotation={Me.textRotationOffset}
        >
          Me
          <meshNormalMaterial />
        </Text3D>
      )}
      <animated.mesh
        key={Me.text}
        position={Me.position}
        ref={pref}
        castShadow
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        scale={scale}
      >
        <primitive
          object={p.scene}
          rotation={Me.rotation}
          scale={isMobile ? Me.scale.mobile : Me.scale.desktop}
          onClick={() => handlePlanetClick()}
        >
          {selected && (
            <>
              <Html className="aboutme-dialogs">
                <p>
                  <div dangerouslySetInnerHTML={{ __html: dialog }} />
                </p>
              </Html>
            </>
          )}
        </primitive>
        {selected && (
          <>
            <MeOb />
            <Arrow />
            <Rock />
            <Ps5 />
            <RoboModel />
            <Penguin />
            <Html
              position={
                new Vector3(
                  Me.position.x,
                  isMobile ? Me.position.y + 0.7 : Me.position.y + 1,
                  Me.position.z
                )
              }
              className="html-ob"
            >
              <h1 className="planet-heading">About Me</h1>
            </Html>
          </>
        )}
        {showZoomHint && (
          <Hint type="Zoom" active={showZoomHint} position={[0, 1, 0]} />
        )}
      </animated.mesh>
      <CameraControls
        ref={cameraControlRef}
        enabled={typeof selected === "undefined" ? false : selected}
        dollySpeed={0}
      />
    </>
  );
}
