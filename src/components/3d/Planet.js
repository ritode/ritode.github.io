import { OBJECTS } from "../constants/objects";
import { isMobile } from "react-device-detect";
import { useGLTF, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

export default function Planet({ name, cameraControlRef, setPlanet }) {
  const p = useGLTF(OBJECTS[name].model);
  const pref = useRef(null);
  const [selected, setSelected] = useState(false);
  const [textPosition, setTextPosition] = useState(null);

  useEffect(() => {
    window.addEventListener("dblclick", () => {
      setPlanet("");
      setSelected(false);
    });
    return () => {
      window.removeEventListener("dblclick", () => {
        setPlanet("");
        setSelected(false);
      });
    };
  });

  function handlePlanetClick() {
    setPlanet(name);
    setSelected(true);
    cameraControlRef?.current?.setTarget(...OBJECTS[name].position, true);
    cameraControlRef?.current?.dollyTo(4, true);
    window.history.replaceState(null, null, `?${name}`);
  }
  useFrame(() => {
    if (pref) {
      // if (!selected) {
      switch (name) {
        case "planet1":
          pref.current.rotation.y += 0.005;
          pref.current.rotation.z += 0.001;
          break;
        case "planet2":
          pref.current.children[0].children[0].children[0].rotation.x -= 0.002;
          pref.current.children[0].children[0].children[1].rotation.z += 0.005;
          break;
        case "planet3":
          pref.current.children[0].children[0].children[0].children[0].rotation.y += 0.001;
          pref.current.children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          break;
        case "planet4":
          pref.current.rotation.y += 0.005;
          break;
        case "planet5":
          pref.current.children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
          pref.current.children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
          break;
      }
    }
    // }
  });

  return (
    <mesh key={OBJECTS[name].key} position={OBJECTS[name].position} castShadow>
      <primitive
        object={p.scene}
        ref={pref}
        scale={
          isMobile ? OBJECTS[name].scale.mobile : OBJECTS[name].scale.desktop
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
          position={OBJECTS[name].textPositionOffset}
          rotation={OBJECTS[name].textRotationOffset}
        >
          {OBJECTS[name].text}
          <meshNormalMaterial />
        </Text3D>
      )}
    </mesh>
  );
}
