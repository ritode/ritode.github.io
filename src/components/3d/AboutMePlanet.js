import { Html, useGLTF, Text3D } from "@react-three/drei";
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

export default function AboutMePlanet() {
  const Me = {
    title: "Me",
    key: "p1",
    model: "models/about-me.glb",
    text: "Me",
    textPositionOffset: new Vector3(-0.5, 1, -3.5),
    textRotationOffset: [0, 0, 0],
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
  const cameraControlRef = useSceneStore((state) => state.cameraControl);
  const cameraControlProps = useSceneStore((s) => s.cameraControlProps);
  const setCameraControlProps = useSceneStore((s) => s.setCameraControlProps);
  const [selected, setSelected] = useState(false);
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
    // if (typeof selected === "undefined") setShowZoomHint(true);
    if (!selected) {
      console.log("Planet Selected");
      setSelected(true);
      cameraControlRef?.current?.setTarget(
        Me.position.x,
        Me.position.y + 1,
        Me.position.z,
        true
      );
      if (isMobile) cameraControlRef?.current?.dollyTo(5, true);
      else cameraControlRef?.current?.dollyTo(3.5, true);
      // window.history.replaceState(null, null, `?${name}`);
      cameraControlRef?.current?.rotatePolarTo(Math.PI / 2 + 1, true);
      //   cameraControlRef?.current?.polarRotateSpeed = 0;
      const ob = { ...cameraControlProps };
      //   ob.minPolarAngle = Math.PI / 2 + 1;
      //   ob.maxPolarAngle = Math.PI / 2 + 1;
      // console.log(Math.PI / 2 + 1);
      ob.azimuthRotateSpeed = 0.3;
      ob.polarRotateSpeed = 0;
      ob.maxDistance = 6;
      setCameraControlProps(ob);
      pref.current.rotation.setFromVector3(new Vector3(0, 1.3, 0));
    }
  }
  function handlePlanetUnclick() {
    console.log("Planet UNSelected");
    setSelected(false);
    // window.history.replaceState(null, null, `?${name}`);
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
    // window.history.replaceState(null, null, "/");
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
          </>
        )}
        {showZoomHint && <Hint type="Zoom" active={showZoomHint} />}
      </animated.mesh>
      {selected && (
        <>
          <Html
            position={
              new Vector3(Me.position.x, Me.position.y + 1, Me.position.z)
            }
            className="html-ob"
          >
            <h1 className="planet-heading">About Me</h1>
          </Html>
        </>
      )}
    </>
  );
}
