import { useEffect, useState } from "react";
import "./sidebar.css";
import { isMobile } from "react-device-detect";
import { useSceneStore } from "../store/sceneStore";
import { Html } from "@react-three/drei";

const sections = [
  { name: "About Me", scrollStart: 15, scrollEnd: 25, clickIndex: 17 },
  { name: "Projects", scrollStart: 25, scrollEnd: 35, clickIndex: 27 },
  { name: "Tech", scrollStart: 35, scrollEnd: 45, clickIndex: 37 },
  { name: "Art", scrollStart: 45, scrollEnd: 55, clickIndex: 47 },
  { name: "Travel", scrollStart: 55, scrollEnd: 65, clickIndex: 57 },
  { name: "Credits", scrollStart: 65, scrollEnd: 75, clickIndex: 67 },
];

export default function Sidebar({}) {
  const planetSelected = useSceneStore((s) => s.planetSelected);
  const [visited, setVisited] = useState(
    sections.reduce((acc, section) => {
      acc[section.name] = false;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  // useEffect(() => {
  //   sections.forEach((section) => {
  //     if (scroll > section.scrollStart) {
  //       setVisited((prevVisited) => ({
  //         ...prevVisited,
  //         [section.name]: true,
  //       }));
  //     }
  //   });
  // }, [scroll]);

  const onClick = (index) => {
    window.scrollTo({
      top: index * 290,
      behavior: "smooth",
    });
  };
  if (!planetSelected) {
    return (
      <Html>
        <div
          className="sidebar"
          style={isMobile ? { left: "0.75rem" } : { left: "1.5rem" }}
        >
          {/* {sections.map(
            ({ name, scrollStart, scrollEnd, clickIndex }) =>
              (scroll > scrollStart || visited[name]) && (
                <div
                  key={name}
                  className="heading"
                  style={
                    isMobile ? { fontSize: "0.75rem" } : { fontSize: "1.5rem" }
                  }
                  onClick={() => onClick(clickIndex)}
                >
                  {scroll > scrollStart && scroll < scrollEnd && (
                    <span>--{">"} &nbsp;</span>
                  )}
                  <span>{name}</span>
                </div>
              )
          )} */}
        </div>
      </Html>
    );
  } else return null;
}
