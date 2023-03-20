import { useEffect, useRef, useState, version } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Text3D } from "@react-three/drei";
import { isMobile } from "react-device-detect";

const objects = {
  cat: {
    key: "cat",
    position: new Vector3(0, -1, 0),
  },
  planet1: {
    key: "p1",
    position: new Vector3(0, 1.5, -5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.023),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.02),
    },
  },
  planet2: {
    key: "p2",
    position: new Vector3(5.5, 2, -2),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
  planet3: {
    key: "p3",
    position: new Vector3(5, 2, 3.5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.5),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.3),
    },
  },
  planet4: {
    key: "p4",
    position: new Vector3(-2, 1.5, 5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
  planet5: {
    key: "p5",
    position: new Vector3(-5, -3, -1),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2.1),
      desktop: new Vector3(1, 1, 1).multiplyScalar(2),
    },
  },
};
export default function Scene() {
  const cat = useGLTF("models/cat-ghost.glb");

  const p1 = useGLTF("models/about-me.glb");
  const p2 = useGLTF("models/purple_planet.glb");
  const p3 = useGLTF("models/stylized_planet.glb");
  const p4 = useGLTF("models/waterworld.glb");
  const p5 = useGLTF("models/lowilds_planet.glb");

  const catRef = useRef(null);
  const p1ref = useRef(null);
  const p2ref = useRef(null);
  const p3ref = useRef(null);
  const p4ref = useRef(null);
  const p5ref = useRef(null);

  const [p1Loaded, setP1Loaded] = useState(false);
  const [p2Loaded, setP2Loaded] = useState(false);
  const [p3Loaded, setP3Loaded] = useState(false);
  const [p4Loaded, setP4Loaded] = useState(false);
  const [p5Loaded, setP5Loaded] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    catRef.current.rotation.x = MathUtils.lerp(
      catRef.current.rotation.x,
      Math.cos(t / 10) / 20,
      0.1
    );
    catRef.current.rotation.y = MathUtils.lerp(
      catRef.current.rotation.y,
      Math.sin(t / 10) / 4,
      0.1
    );
    catRef.current.rotation.z = MathUtils.lerp(
      catRef.current.rotation.z,
      Math.sin(t / 10) / 10,
      0.1
    );
    catRef.current.position.y = MathUtils.lerp(
      catRef.current.position.y,
      -Math.sin(t / 4) / 5 - 1,
      0.1
    );
  });

  useFrame((state) => {
    p1ref.current.rotation.y += 0.005;
    p1ref.current.rotation.z += 0.001;
    p2ref.current.children[0].children[0].children[0].rotation.x -= 0.002;
    p2ref.current.children[0].children[0].children[1].rotation.z += 0.005;
    p3ref.current.children[0].children[0].children[0].children[0].rotation.y += 0.001;
    p3ref.current.children[0].children[0].children[0].children[1].rotation.y -= 0.005;
    p4ref.current.rotation.y += 0.005;
    p5ref.current.children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
    p5ref.current.children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
  });

  useEffect(() => {
    if (p1ref.current) setP1Loaded(true);
    if (p2ref.current) setP2Loaded(true);
    if (p3ref.current) setP3Loaded(true);
    if (p4ref.current) setP4Loaded(true);
    if (p5ref.current) setP5Loaded(true);
    console.log("rito");
  }, [
    p1ref.current,
    p2ref.current,
    p3ref.current,
    p4ref.current,
    p5ref.current,
  ]);
  return (
    <>
      <primitive
        key={objects.cat.key}
        object={cat.scene}
        position={objects.cat.position}
        ref={catRef}
        castShadow
      />
      <primitive
        key={objects.planet1.key}
        object={p1.scene}
        position={objects.planet1.position}
        scale={
          isMobile
            ? objects.planet1.scale.mobile
            : objects.planet1.scale.desktop
        }
        castShadow
        ref={p1ref}
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
                  p1ref.current.position.x - 0.5,
                  p1ref.current.position.y + 1.2,
                  p1ref.current.position.z,
                ]
              : [
                  p1ref.current.position.x + 1,
                  p1ref.current.position.y + 0.5,
                  p1ref.current.position.z,
                ]
          }
        >
          Home
          <meshNormalMaterial />
        </Text3D>
      )}
      <primitive
        key={objects.planet2.key}
        object={p2.scene}
        position={objects.planet2.position}
        scale={
          isMobile
            ? objects.planet2.scale.mobile
            : objects.planet2.scale.desktop
        }
        castShadow
        ref={p2ref}
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
            p2ref.current.position.x,
            p2ref.current.position.y - 1.5,
            p2ref.current.position.z,
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
        position={objects.planet3.position}
        castShadow
        scale={
          isMobile
            ? objects.planet3.scale.mobile
            : objects.planet3.scale.desktop
        }
        ref={p3ref}
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
            p3ref.current.position.x,
            p3ref.current.position.y - 1.7,
            p3ref.current.position.z,
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
        position={objects.planet4.position}
        scale={
          isMobile
            ? objects.planet4.scale.mobile
            : objects.planet4.scale.desktop
        }
        castShadow
        ref={p4ref}
      />
      <primitive
        key={"p5"}
        object={p5.scene}
        position={objects.planet5.position}
        scale={
          isMobile
            ? objects.planet5.scale.mobile
            : objects.planet5.scale.desktop
        }
        castShadow
        ref={p5ref}
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
            p5ref.current.position.x,
            p5ref.current.position.y + 3.8,
            p5ref.current.position.z,
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
