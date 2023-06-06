import Tech from "../2d/Tech";
import Travel from "./Travel";
import Projects from "./Projects";
import WIP from "./WIP";
import Art from "./Art";

export default function DisplayPage({ planet }) {
  switch (planet) {
    case "Tech":
      return <Tech />;
      break;
    case "Projects":
      return <Projects />;
      break;
    case "WIP":
      return <WIP />;
      break;
    case "Art":
      return <Art />;
      break;
    case "Travel":
      return <Travel />;
      break;
    default:
      return null;
  }
}
