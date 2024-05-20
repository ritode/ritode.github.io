import { Euler, MathUtils, Vector3 } from "three";

const useScrollAnimation = (scroll, positions, rotations, increment = 500) => {
  const calculateAnimation = (scroll, ref) => {
    const index = Math.max(
      0,
      Math.min(Math.floor(scroll / increment), positions.length - 1)
    );

    const nextIndex = Math.max(0, Math.min(index + 1, positions.length - 1));

    const lerpAmount = (scroll % increment) / increment;
    if (ref.current && index !== nextIndex) {
      if (rotations) {
        const currentRotation = new Euler().fromArray(rotations[index], "XYZ");
        const nextRotation = new Euler().fromArray(rotations[nextIndex], "XYZ");
        const newRotation = new Euler(
          MathUtils.lerp(currentRotation.x, nextRotation.x, lerpAmount),
          MathUtils.lerp(currentRotation.y, nextRotation.y, lerpAmount),
          MathUtils.lerp(currentRotation.z, nextRotation.z, lerpAmount),
          currentRotation.order
        );
        ref.current.rotation.copy(newRotation);
      }
      if (positions) {
        const currentPosition = new Vector3().fromArray(positions[index]);
        const nextPosition = new Vector3().fromArray(positions[nextIndex]);

        const newPosition = new Vector3().lerpVectors(
          currentPosition,
          nextPosition,
          lerpAmount
        );

        ref.current.position.copy(newPosition);
      }
    }
  };

  return { scroll, calculateAnimation };
};

export default useScrollAnimation;
