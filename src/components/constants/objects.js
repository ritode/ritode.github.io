import { Vector3 } from "three";
export const OBJECTS = {
  cat: {
    key: "cat",
    position: new Vector3(0, -1.5, 1),
  },
};

export const CAMERA_PROPS = {
  makeDefault: true,
  autoRotate: true,
  autoRotateSpeed: 0.2,
  minPolarAngle: Math.PI / 2 - 0.1,
  maxPolarAngle: Math.PI,
  maxDistance: 6,
  minDistance: 2.3,
  target: [0, 1, 0],
  distance: 4.5,
  draggingSmoothTime: 0.5,
  boundaryEnclosesCamera: true,
  azimuthRotateSpeed: -1,
  polarRotateSpeed: -1,
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
