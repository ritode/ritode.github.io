import { Vector3 } from "three";
export const OBJECTS = {
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
    position: new Vector3(-5, 2, -1),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2.1),
      desktop: new Vector3(1, 1, 1).multiplyScalar(2),
    },
  },
};
