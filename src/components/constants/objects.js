import { Vector3 } from "three";
export const OBJECTS = {
  cat: {
    key: "cat",
    position: new Vector3(0, -1, 0),
  },
};

export const CAMERA_PROPS = {
  makeDefault: true,
  autoRotate: true,
  autoRotateSpeed: 0.2,
  minPolarAngle: Math.PI / 2 - 0.1,
  maxPolarAngle: Math.PI / 2 + 0.4,
  maxDistance: 6,
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
    Desktop: "./images/IntructionMessage.svg",
    Mobile: "./images/swipeInstruction.png",
  },
  Zoom: {
    Desktop: "./images/Backmessage.svg",
    Mobile: "./images/Backmessage.svg",
  },
};
export const accordionData = [
  {
    title: "Javascript",
    content: [
      {
        title: "What are Arrow Functions in Javascript?",
        url: "https://medium.com/@deritobrita/what-are-arrow-functions-in-javascript-4a14bc16ae4c",
      },
      {
        title: "What are Generator Functions in JavaScript?",
        url: "https://medium.com/@deritobrita/what-are-generator-functions-in-javascript-40eb32f5aec2",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
    ],
  },
  {
    title: "HTML/CSS",
    content: [
      {
        id: "card_1",
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
      {
        id: "card_2",
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
    ],
  },
  {
    title: "ReactJS",
    content: [
      {
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
      {
        title: "Lorem ipsum, dolor sit amet",
        url: "https://medium.com/@deritobrita",
      },
    ],
  },
];

export const PLANETS = {
  Me: {
    title: "Me",
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
  Tech: {
    title: "Tech",
    key: "p2",
    model: "models/purple_planet.glb",
    text: "Tech",
    textPositionOffset: new Vector3(-1.4, -0.25, -0.45),
    textRotationOffset: [0, -1.3, 0],
    position: new Vector3(5.5, 1, -2),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.3),
    },
  },
  Projects: {
    title: "Projects",
    key: "p3",
    text: "Projects",
    textPositionOffset: new Vector3(-1, -0.25, -2.8),
    textRotationOffset: [0, -2.2, 0],
    model: "models/stylized_planet.glb",
    position: new Vector3(5, 1.5, 5),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.5),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1.8),
    },
  },
  Art: {
    title: "Art",
    key: "p4",
    text: "Art",
    textPositionOffset: new Vector3(1, 0, -1.5),
    textRotationOffset: [0, 3.14, 0],
    position: new Vector3(-2, 1.5, 5),
    model: "models/waterworld.glb",
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  },
  Travel: {
    title: "Travel",
    key: "p5",
    text: "Travel",
    textPositionOffset: new Vector3(0.4, 0, 1.3),
    textRotationOffset: [0, 1.5, 0],
    model: "models/astplan.glb",
    position: new Vector3(-5, 1, -1),
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(2.1),
      desktop: new Vector3(1, 1, 1).multiplyScalar(2.3),
    },
  },
};
