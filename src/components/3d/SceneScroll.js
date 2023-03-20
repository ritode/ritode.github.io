import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import { Text3D, Center, useGLTF, useScroll, Html } from "@react-three/drei";
import { useRef, useState } from "react";

// import { useLoader } from '@react-three/f .iber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function SceneScroll() {
  const group = useRef(null);
  const hintRef = useRef(null);
  // const scroll = useScroll();
  const [showHint, setShowHint] = useState(true);
  const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
    (a / Math.atan(1 / delta)) *
    Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

  // useFrame(({ mouse, camera }) => {
  //     camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
  //     camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
  //     camera.position.z = MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
  //     camera.rotation.y = MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  // })
  useFrame((state, delta) => {
    // if (scroll.offset > 0) setShowHint(false);
    // const r1 = scroll.range(0 / 4, 1 / 4);
    // const r2 = scroll.range(1 / 4, 1 / 4);
    // const r3 = scroll.visible(4 / 5, 1 / 5);
    // cat.scene.rotation.y = (Math.PI / 2) * rsqw(r1) + r2;
    // group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, (-Math.PI / 1.45) * r2, 4, delta)
    // group.current.position.x = THREE.MathUtils.damp(group.current.position.x, (-width / 7) * r2, 4, delta)
    // group.current.scale.x = group.current.scale.y = group.current.scale.z = THREE.MathUtils.damp(group.current.scale.z, 1 + 0.24 * (1 - rsqw(r1)), 4, delta)
    // keyLight.current.position.set(0.25 + -15 * (1 - r1), 4 + 11 * (1 - r1), 3 + 2 * (1 - r1))
    // left.current?.classList.toggle('show', r3)
    // right.current?.classList.toggle('show', r3)
  });
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 10) / 6,
      0.1
    );
    group.current.rotation.y = MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 10) / 4,
      0.1
    );
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 10) / 10,
      0.1
    );
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      Math.sin(t) / 6,
      0.1
    );
  });

  return (
    <>
      <Center rotation={[0, 0, 0]} position={[0, 0.5, 0]}>
        <Text3D
          font="./Inter_Bold.json"
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={0.03}
          size={0.5}
          ref={group}
        >
          Hi!
          <meshNormalMaterial />
        </Text3D>
        {showHint && (
          <Html>
            <p>- scroll to continue -</p>
          </Html>
        )}
      </Center>
    </>
  );
}
