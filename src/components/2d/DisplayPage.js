import Tech from "../2d/Tech";
import AboutMe from "../2d/AboutMe";
import WIP from "../2d/WIP";
import { useEffect } from "react";

export default function DisplayPage() {
  const path = window.location.href.split("?")[1];
  useEffect(() => {
    console.log(path);
  }, [path]);

  switch (path) {
    case "planet1":
      return <AboutMe />;
      break;
    case "planet2":
      return <Tech />;
      break;
    case "planet3":
      return <WIP />;
      break;
    case "planet4":
      return <WIP />;
      break;
    case "planet5":
      return <WIP />;
      break;
    default:
      return null;
  }
}
