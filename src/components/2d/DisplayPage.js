import Tech from "../2d/Tech";
import AboutMe from "../2d/AboutMe";
import Travel from "./Travel";
import Projects from "./Projects";
import WIP from "./WIP";
import { useEffect } from "react";

export default function DisplayPage({ planet }) {
  switch (planet) {
    case "Me":
      return <AboutMe />;
      break;
    case "Tech":
      return <Tech />;
      break;
    case "Projects":
      return <Projects />;
      break;
    case "WIP":
      return <WIP />;
      break;
    case "Travel":
      return <Travel />;
      break;
    default:
      return null;
  }
}
