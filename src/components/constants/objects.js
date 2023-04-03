import { Vector3 } from "three";
export const OBJECTS = {
  cat: {
    key: "cat",
    position: new Vector3(0, -1, 0),
  },
  planet1: {
    key: "p1",
    model: "models/about-me.glb",
    text: "Me",
    textPositionOffset: new Vector3(-0.5, 0, 1.5),
    textRotationOffset: [0, 0, 0],
    position: new Vector3(0, 1.5, -5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(0.023),
      desktop: new Vector3(1, 1, 1).multiplyScalar(0.025),
    },
  },
  planet2: {
    key: "p2",
    model: "models/purple_planet.glb",
    text: "Tech",
    textPositionOffset: new Vector3(-1.4, -0.25, -0.45),
    textRotationOffset: [0, -1.3, 0],
    position: new Vector3(5.5, 2, -2),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.3),
    },
  },
  planet3: {
    key: "p3",
    text: "Projects",
    textPositionOffset: new Vector3(-1, -0.25, -2.8),
    textRotationOffset: [0, -2.2, 0],
    model: "models/stylized_planet.glb",
    position: new Vector3(5, 2, 5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.5),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.8),
    },
  },
  planet4: {
    key: "p4",
    text: "",
    textPositionOffset: new Vector3(0, 0, 0),
    textRotationOffset: [0, 0, 0],
    position: new Vector3(-2, 1.5, 5),
    model: "models/waterworld.glb",
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
  planet5: {
    key: "p5",
    text: "Travel",
    textPositionOffset: new Vector3(0.4, 0, 1.3),
    textRotationOffset: [0, 1.5, 0],
    model: "models/astplan.glb",
    position: new Vector3(-5, 2, -1),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2.1),
      desktop: new Vector3(1, 1, 1).multiplyScalar(2.3),
    },
  },
};

export const CAMERA_PROPS = {
  makeDefault: true,
  autoRotate: true,
  autoRotateSpeed: 0.2,
  minPolarAngle: Math.PI / 2 - 0.1,
  maxPolarAngle: Math.PI / 2 + 0.4,
  maxDistance: 4.5,
  minDistance: 2.3,
  target: [0, 1, 0],
  distance: 4.5,
  draggingSmoothTime: 0.5,
  boundaryEnclosesCamera: true,
  azimuthRotateSpeed: -1.3,
  polarRotateSpeed: -1.3,
};
export const HINTS = {
  Drag: {
    Desktop: "Click and drag to interact",
    Mobile: "Swipe to interact",
  },
  Zoom: {
    Desktop: "Double Click to go back",
    Mobile: "Double Click to go back",
  },
};
export const accordionData = [
  {
    title: "Javascript",
    content: [
      {
        title: "What are Arrow Functions in Javascript?",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
    ],
  },
  {
    title: "HTML/CSS",
    content: [
      {
        id: "card_1",
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        id: "card_2",
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        id: "card_3",
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        id: "card_4",
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
    ],
  },
  {
    title: "ReactJS",
    content: [
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        content: "Lorem ipsum, dolor sit amet lorem ipsum, dolor sit amet.",
      },
    ],
  },
];
