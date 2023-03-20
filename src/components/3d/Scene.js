import { useRef, useState, version } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
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
    position: new Vector3(6.5, -2, -2.5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.7),
    },
  },
  planet3: {
    key: "p3",
    position: new Vector3(-6, 2, -1),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
  planet4: {
    key: "p4",
    position: new Vector3(-2, 1.5, 5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.4),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.2),
    },
  },
  planet5: {
    key: "p5",
    position: new Vector3(5, 2, 3.5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
};
export default function Scene() {
  const cat = useGLTF("models/cat-ghost.glb");
  // const asteroid = useGLTF("models/asterioid.glb");
  const p1 = useGLTF("models/about-me.glb");
  const p2 = useGLTF("models/lowilds_planet.glb");
  const p3 = useGLTF("models/purple_planet.glb");
  const p4 = useGLTF("models/stylized_planet.glb");
  const p5 = useGLTF("models/waterworld.glb");
  const s = useGLTF("models/sun.glb");
  const asteroid = useGLTF("models/asteroid.glb");
  const catRef = useRef(null);
  const p1ref = useRef(null);
  const p2ref = useRef(null);
  const p3ref = useRef(null);
  const p4ref = useRef(null);
  const p5ref = useRef(null);

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
    p2ref.current.children[0].children[0].children[0].children[0].children[0].children[0].rotation.y += 0.005;
    p2ref.current.children[0].children[0].children[0].children[0].children[0].children[1].rotation.y -= 0.005;
    p3ref.current.children[0].children[0].children[0].rotation.x -= 0.002;
    p3ref.current.children[0].children[0].children[1].rotation.z += 0.005;
    p4ref.current.children[0].children[0].children[0].children[0].rotation.y += 0.001;
    p4ref.current.children[0].children[0].children[0].children[1].rotation.y -= 0.005;
    p5ref.current.rotation.y += 0.005;
  });
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
    </>
  );
}
