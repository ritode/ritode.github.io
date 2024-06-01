import { Center, Text3D, useScroll } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import { MathUtils } from "three";
export function AnimatedText({
  text,
  range,
  position = [0, 0.5, 0],
  scrollFunc = (ref, r, delta) => {
    ref.current.position.z = MathUtils.damp(
      ref.current.position.z,
      4 * r,
      2,
      delta
    );
    ref.current.position.y = MathUtils.damp(
      ref.current.position.y,
      2 * r,
      2,
      delta
    );
    ref.current.scale.set(
      Math.min(r * 3, 1),
      Math.min(r * 3, 1),
      Math.min(r * 3, 1)
    );
  },
}) {
  const scroll = useScroll();
  const ref = useRef(null);
  useFrame((state, delta) => {
    const r = scroll.range(...range);
    scrollFunc(ref, r, delta);
  });

  return (
    <Center ref={ref} position={position}>
      <mesh>
        {text.map((t, i) => (
          <Center key={i} position={[0, -0.25 * i, 0]}>
            <Text3D
              key={i}
              font="./fonts/Inter_Bold.json"
              curveSegments={32}
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0}
              height={0.5}
              lineHeight={isMobile ? 0.5 : 0.7}
              letterSpacing={0.03}
              size={isMobile ? 0.35 : 0.5}
              scale={[0.2, 0.2, 0.05]}
            >
              {t}
              <meshNormalMaterial />
            </Text3D>
          </Center>
        ))}
      </mesh>
    </Center>
  );
}

// Usage of AnimatedText component
const animatedTextData = [
  {
    range: [0, 0.05],
    position: [0, 4, 0],
    scrollFunc: (ref, r, delta) => {
      ref.current.position.z = MathUtils.damp(
        ref.current.position.z,
        4 * r,
        2,
        delta
      );
      const py = 0.5 + (4 - 0.5) * r;
      ref.current.position.y = MathUtils.damp(
        ref.current.position.y,
        py,
        2,
        delta
      );
      const s = 1 + (1 - 1) * r;
      ref.current.scale.set(s, s, s);
    },
    text: isMobile
      ? [
          "Hello!",
          "Fellow digital adventurers and",
          "Code connoisseurs!",
          "--Scroll below--",
        ]
      : [
          "Hello!",
          "Fellow digital adventurers and code connoisseurs!",
          "--Scroll below--",
        ],
  },
  {
    range: [0.05, 0.1],
    text: isMobile
      ? ["I'm Rito,", "A web wizard with a", "flair for the creative."]
      : ["I'm Rito,", "A web wizard with a flair for the creative."],
  },
  {
    range: [0.1, 0.15],
    text: [
      "Step into my digital playground,",
      "Where pixels play and websites come to life!",
    ],
  },
];

export default function AnimatedTextContainer() {
  return (
    <>
      {animatedTextData.map(({ range, text, scrollFunc, position }, index) => (
        <AnimatedText
          key={index}
          range={range}
          text={text}
          scrollFunc={scrollFunc}
          position={position}
        />
      ))}
    </>
  );
}
