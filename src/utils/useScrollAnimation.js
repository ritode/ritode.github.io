import { useEffect, useRef, useState } from "react";
import { Euler, MathUtils, Vector3 } from "three";

const useScrollAnimation = (positions, rotations, increment = 500) => {
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(scroll);

  useEffect(() => {
    const handleScroll = () => {
      const newScroll = window.scrollY;
      scrollRef.current = newScroll;
      setScroll(newScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateAnimation = (ref) => {
    const index = Math.min(
      Math.floor(scrollRef.current / increment),
      positions.length - 1
    );
    const nextIndex = Math.min(index + 1, positions.length - 1);
    const lerpAmount = (scrollRef.current % increment) / increment;

    if (ref.current && index !== nextIndex) {
      const currentPosition = new Vector3().fromArray(positions[index]);
      const nextPosition = new Vector3().fromArray(positions[nextIndex]);

      const currentRotation = new Euler().fromArray(rotations[index], "XYZ");
      const nextRotation = new Euler().fromArray(rotations[nextIndex], "XYZ");

      const newPosition = new Vector3().lerpVectors(
        currentPosition,
        nextPosition,
        lerpAmount
      );
      const newRotation = new Euler(
        MathUtils.lerp(currentRotation.x, nextRotation.x, lerpAmount),
        MathUtils.lerp(currentRotation.y, nextRotation.y, lerpAmount),
        MathUtils.lerp(currentRotation.z, nextRotation.z, lerpAmount),
        currentRotation.order
      );

      ref.current.position.copy(newPosition);
      ref.current.rotation.copy(newRotation);
    }
  };

  return { scroll, calculateAnimation };
};

export default useScrollAnimation;
