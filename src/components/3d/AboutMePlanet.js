import { Html } from "@react-three/drei";
import { useState } from "react";
import { Euler, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import { MathUtils } from "three";
import RoboModel from "./RoboModel";
import Arrow from "./objects/Arrow";
import Rock from "./objects/Rock";
import Ps5 from "./objects/Ps5";
import Penguin from "./objects/Penguin";
import MeOb from "./objects/MeOb";
import "../2d/pageStyle.css";
import Planet from "./Planet";

export default function AboutMePlanet({ scroll }) {
  const { camera } = useThree();
  function quaternionTonormalizedAzimuthAngle(quaternion) {
    const azimuthAngle = Math.atan2(
      2 * (quaternion._y * quaternion._w - quaternion._x * quaternion._z),
      1 - 2 * (quaternion._y * quaternion._y + quaternion._z * quaternion._z)
    );
    return MathUtils.euclideanModulo(azimuthAngle, Math.PI * 2);
  }
  const [dialog, setDialog] = useState(`Hi again! <br />
  I like to call myself a
  <b>
    <i>Creative Developer</i>
  </b>
  .`);

  useFrame(() => {
    const quaternion = camera.quaternion;
    const normalizedAzimuthAngle =
      quaternionTonormalizedAzimuthAngle(quaternion);
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
        setDialog(`Hi again! <br />
        I like to call myself a
        <b>
          <i>Creative Developer</i>
        </b>
        .`);
      }
    }
  });

  const Me = {
    title: "Me",
    model: "models/about-me.glb",
    position: new Vector3(0, 1.5, -5),
    rotation: new Euler(-0.45, 0, 0.65),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.023),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.025),
    },
  };

  return (
    <Planet
      config={Me}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.rotation.y += 0.005;
            pref.current.rotation.z += 0.001;
          }
        }
      }}
    >
      <Html className="aboutme-dialogs">
        <p dangerouslySetInnerHTML={{ __html: dialog }} />
      </Html>
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
    </Planet>
  );
}
