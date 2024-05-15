import { useEffect, useState } from "react";
import "./sidebar.css";
export default function Sidebar({ scroll }) {
  const [visited, setVisited] = useState(false);
  useEffect(() => {
    if (scroll > 60) setVisited(true);
  }, [scroll]);
  const onClick = (s) => {
    window.scrollTo({
      top: s * 290,
      behavior: "smooth", // You can also use 'auto' for instant scrolling
    });
  };
  return (
    <div className="sidebar">
      {(scroll > 15 || visited) && (
        <div className="heading" onClick={() => onClick(17)}>
          About Me
        </div>
      )}
      {(scroll > 25 || visited) && (
        <div className="heading" onClick={() => onClick(27)}>
          Projects
        </div>
      )}
      {(scroll > 35 || visited) && (
        <div className="heading" onClick={() => onClick(37)}>
          Tech
        </div>
      )}
      {(scroll > 45 || visited) && (
        <div className="heading" onClick={() => onClick(47)}>
          Art
        </div>
      )}
      {(scroll > 55 || visited) && (
        <div className="heading" onClick={() => onClick(57)}>
          Travel
        </div>
      )}
      {(scroll > 65 || visited) && (
        <div className="heading" onClick={() => onClick(67)}>
          Credits
        </div>
      )}
    </div>
  );
}
