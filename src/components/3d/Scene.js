import { useEffect, useRef, useState } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Text3D, Center } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import { useSceneStore } from "../store/sceneStore";
import MyCameraControls from "./myCameraControls";
import LandingPage from "./LandingPage";
import { OBJECTS } from "../constants/objects";
import { Environment } from "@react-three/drei";

export default function Scene() {
  const { cameraController } = useSceneStore();

  const p1 = useGLTF("models/about-me.glb");
  const p2 = useGLTF("models/purple_planet.glb");
  const p3 = useGLTF("models/stylized_planet.glb");
  const p4 = useGLTF("models/waterworld.glb");
  const p5 = useGLTF("models/astplan.glb");

  const p1ref = useRef(null);
  const p2ref = useRef(null);
  const p3ref = useRef(null);
  const p4ref = useRef(null);
  const p5ref = useRef(null);

  const [cameraControlRef, setCameraControlRef] = useState(null);
  const [cameraProps, setCameraProps] = useState({
    makeDefault: true,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    minPolarAngle: Math.PI / 2 - 0.1,
    maxPolarAngle: Math.PI / 2 + 0.4,
    maxDistance: 5,
    minDistance: 1,
    target: [0, 1, 0],
    distance: 4,
    draggingSmoothTime: 0.5,
    boundaryEnclosesCamera: true,
    azimuthRotateSpeed: -1.3,
    polarRotateSpeed: -1.3,
  });
  const [zoomOut, setZoomOut] = useState(false);

  const [p1Loaded, setP1Loaded] = useState(false);
  const [p2Loaded, setP2Loaded] = useState(false);
  const [p3Loaded, setP3Loaded] = useState(false);
  const [p4Loaded, setP4Loaded] = useState(false);
  const [p5Loaded, setP5Loaded] = useState(false);

  useFrame((state) => {
    if (p1Loaded) {
      p1ref.current.rotation.y += 0.005;
      p1ref.current.rotation.z += 0.001;
    }
    if (p2Loaded) {
      p2ref.current.children[0].children[0].children[0].rotation.x -= 0.002;
      p2ref.current.children[0].children[0].children[1].rotation.z += 0.005;
    }
    if (p3Loaded) {
      p3ref.current.children[0].children[0].children[0].children[0].rotation.y += 0.001;
      p3ref.current.children[0].children[0].children[0].children[1].rotation.y -= 0.005;
    }
    if (p4Loaded) p4ref.current.rotation.y += 0.005;
    if (p5Loaded) {
      p5ref.current.children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
      p5ref.current.children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
    }
  });

  useEffect(() => {
    if (p1ref.current) setP1Loaded(true);
    if (p2ref.current) setP2Loaded(true);
    if (p3ref.current) setP3Loaded(true);
    if (p4ref.current) setP4Loaded(true);
    if (p5ref.current) setP5Loaded(true);
  }, [
    p1ref.current,
    p2ref.current,
    p3ref.current,
    p4ref.current,
    p5ref.current,
  ]);
  function handlePlanetClick(planet) {
    cameraControlRef.current?.setTarget(...OBJECTS[planet].position, true);
    cameraControlRef.current?.dollyTo(4, true);
    const ob = { ...cameraProps };
    ob.minPolarAngle = 0;
    ob.maxPolarAngle = 2 * Math.PI;
    ob.azimuthRotateSpeed = 1.3;
    ob.polarRotateSpeed = 1.3;
    setCameraProps(ob);
  }
  useFrame(() => {
    if (cameraControlRef?.current?.distance > 4.5) setZoomOut(true);
    else setZoomOut(false);
  });
  useEffect(() => {
    if (zoomOut) {
      cameraControlRef.current?.setTarget(0, 1, 0, true);
      cameraControlRef.current?.moveTo(0, 0, 0, true);
      const ob = { ...cameraProps };
      ob.minPolarAngle = Math.PI / 2 - 0.1;
      ob.maxPolarAngle = Math.PI / 2 + 0.4;
      ob.azimuthRotateSpeed = -1.3;
      ob.polarRotateSpeed = -1.3;
      setCameraProps(ob);
      cameraControlRef.current?.rotateTo(
        cameraControlRef.current.azimuthAngle,
        1.5,
        true
      );
    }
  }, [zoomOut]);
  return (
    <>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <MyCameraControls setRef={setCameraControlRef} props={cameraProps} />
      <LandingPage />
      <primitive
        key={OBJECTS.planet1.key}
        object={p1.scene}
        position={OBJECTS.planet1.position}
        scale={
          isMobile
            ? OBJECTS.planet1.scale.mobile
            : OBJECTS.planet1.scale.desktop
        }
        castShadow
        ref={p1ref}
        onClick={() => handlePlanetClick("planet1")}
      />
      {p1Loaded && (
        <Text3D
          font="./fonts/Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.3}
          scale={[1, 1, 0.5]}
          position={
            isMobile
              ? [
                  p1ref?.current?.position.x - 0.5,
                  p1ref?.current?.position.y + 1.2,
                  p1ref?.current?.position.z,
                ]
              : [
                  p1ref?.current?.position.x + 1,
                  p1ref?.current?.position.y + 0.5,
                  p1ref?.current?.position.z,
                ]
          }
        >
          Home
          <meshNormalMaterial />
        </Text3D>
      )}
      <primitive
        key={OBJECTS.planet2.key}
        object={p2.scene}
        position={OBJECTS.planet2.position}
        scale={
          isMobile
            ? OBJECTS.planet2.scale.mobile
            : OBJECTS.planet2.scale.desktop
        }
        castShadow
        ref={p2ref}
        onClick={() => handlePlanetClick("planet2")}
      />
      {p2Loaded && (
        <Text3D
          font="./fonts/Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.3}
          scale={[1, 1, 0.5]}
          position={[
            p2ref?.current?.position.x,
            p2ref?.current?.position.y - 1.5,
            p2ref?.current?.position.z,
          ]}
          rotation={[0, -1.3, 0]}
        >
          Tech
          <meshNormalMaterial />
        </Text3D>
      )}
      <primitive
        key={"p3"}
        object={p3.scene}
        position={OBJECTS.planet3.position}
        castShadow
        scale={
          isMobile
            ? OBJECTS.planet3.scale.mobile
            : OBJECTS.planet3.scale.desktop
        }
        ref={p3ref}
        onClick={() => handlePlanetClick("planet3")}
      />
      {p3Loaded && (
        <Text3D
          font="./fonts/Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.3}
          scale={[1, 1, 0.5]}
          position={[
            p3ref?.current?.position.x,
            p3ref?.current?.position.y - 1.7,
            p3ref?.current?.position.z,
          ]}
          rotation={[0, -2.2, 0]}
        >
          Projects
          <meshNormalMaterial />
        </Text3D>
      )}
      <primitive
        key={"p4"}
        object={p4.scene}
        position={OBJECTS.planet4.position}
        scale={
          isMobile
            ? OBJECTS.planet4.scale.mobile
            : OBJECTS.planet4.scale.desktop
        }
        castShadow
        ref={p4ref}
        onClick={() => handlePlanetClick("planet4")}
      />
      <primitive
        key={"p5"}
        object={p5.scene}
        position={OBJECTS.planet5.position}
        scale={
          isMobile
            ? OBJECTS.planet5.scale.mobile
            : OBJECTS.planet5.scale.desktop
        }
        castShadow
        ref={p5ref}
        onClick={() => handlePlanetClick("planet5")}
      />
      {p5Loaded && (
        <Text3D
          font="./fonts/Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.3}
          scale={[1, 1, 0.5]}
          position={[
            p5ref?.current?.position.x,
            p5ref?.current?.position.y - 2,
            p5ref?.current?.position.z,
          ]}
          rotation={[0, 1.5, 0]}
        >
          Travel
          <meshNormalMaterial />
        </Text3D>
      )}
    </>
  );
}
