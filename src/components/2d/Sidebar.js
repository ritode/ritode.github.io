import { useEffect, useState } from "react";
import "./sidebar.css";

const sections = [
  { name: "About Me", scrollStart: 15, scrollEnd: 25, clickIndex: 17 },
  { name: "Projects", scrollStart: 25, scrollEnd: 35, clickIndex: 27 },
  { name: "Tech", scrollStart: 35, scrollEnd: 45, clickIndex: 37 },
  { name: "Art", scrollStart: 45, scrollEnd: 55, clickIndex: 47 },
  { name: "Travel", scrollStart: 55, scrollEnd: 65, clickIndex: 57 },
  { name: "Credits", scrollStart: 65, scrollEnd: 75, clickIndex: 67 },
];

export default function Sidebar({ scroll }) {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    if (scroll > 60) setVisited(true);
  }, [scroll]);

  const onClick = (index) => {
    window.scrollTo({
      top: index * 290,
      behavior: "smooth",
    });
  };

  return (
    <div className="sidebar">
      {sections.map(
        ({ name, scrollStart, scrollEnd, clickIndex }) =>
          (scroll > scrollStart || visited) && (
            <div
              key={name}
              className="heading"
              onClick={() => onClick(clickIndex)}
            >
              {scroll > scrollStart && scroll < scrollEnd && (
                <div>--> &nbsp;</div>
              )}
              <div>{name}</div>
            </div>
          )
      )}
    </div>
  );
}
