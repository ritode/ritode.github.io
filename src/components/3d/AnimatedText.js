import { Center, Text3D } from "@react-three/drei";
import { useRef, useState } from "react";
import { useEffect } from "react";
import useScrollAnimation from "../../utils/useScrollAnimation";
export default function AnimatedText({ scroll, texts }) {
  const [text, setText] = useState(texts[0]);
  const ref = useRef(null);

  useEffect(() => {
    const index = Math.min(Math.floor(scroll / 500), texts.length - 1);
    setText(texts[index]);
  }, [scroll, texts]);
  const { calculateAnimation } = useScrollAnimation(
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 4],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    250
  );
  useEffect(() => {
    calculateAnimation(ref);
  }, [scroll, calculateAnimation]);

  return (
    <Center position={[0, 1, 0]} ref={ref}>
      <mesh>
        {text.map((t, i) => (
          <Center position={[0, -0.25 * i, 0]}>
            <Text3D
              key={i}
              font="./fonts/Inter_Bold.json"
              curveSegments={32}
              bevelEnabled
              bevelSize={0.01}
              bevelThickness={0}
              height={0.5}
              lineHeight={0.7}
              letterSpacing={0.03}
              size={0.5}
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
