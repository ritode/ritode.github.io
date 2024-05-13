export default function Projects({ scroll }) {
  const Planet = {
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
  };
}
