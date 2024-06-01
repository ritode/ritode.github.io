import Planet from "./Planet";
import { Vector3, Euler, MathUtils } from "three";
import { useState } from "react";
import { Html } from "@react-three/drei";
import Carousel from "react-spring-3d-carousel";
import "../2d/Art.css";

export default function ArtPlanet({ scroll }) {
  const p = {
    title: "Art",
    position: new Vector3(-2, 1.5, 5),
    rotation: new Euler(0, 0, 0),
    model: "models/waterworld.glb",
    scale: {
      mobile: new Vector3(1, 1, 1).multiplyScalar(1.2),
      desktop: new Vector3(1, 1, 1).multiplyScalar(1),
    },
  };

  const [slideNumber, setSlideNumber] = useState(0);

  const slides = [
    {
      key: 1,
      content: <img src="/images/cat-grass.jpg" alt="1" />,
      link: "https://unsplash.com/@ritode",
    },
    {
      key: 2,
      content: <img src="/images/alien-bong.jpg" alt="2" />,
      link: "https://www.instagram.com/p/CHLA8_2h5Ce/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      key: 3,
      content: <img src="https://source.unsplash.com/HbIoSJg5X3E" alt="3" />,
      link: "https://unsplash.com/@ritode",
    },
    {
      key: 4,
      content: <img src="https://source.unsplash.com/yUQAAwDHgzY" alt="4" />,
      link: "https://unsplash.com/@ritode",
    },
    {
      key: 5,
      content: <img src="/images/skull-time.jpg" alt="5" />,
      link: "https://www.instagram.com/p/B-ZkGy1F4S-b4RzeQNAfbrs1wkUOm1bN_MtiSg0/?igshid=NTc4MTIwNjQ2YQ==",
    },
    {
      key: 6,
      content: <img src="/images/flowers.png" alt="6" />,
      link: "https://www.instagram.com/p/CA7Y3Bmh1z-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      key: 7,
      content: <img src="/images/nebula.png" alt="7" />,
      link: "https://www.instagram.com/p/CBFMePmh7ut/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      key: 8,
      content: (
        <img
          src="https://images.unsplash.com/photo-1683901151760-f0cfc256624a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="8"
          link="https://www.instagram.com/p/B_jyO_HHH7H/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        />
      ),
    },
    {
      key: 9,
      content: (
        <img
          src="https://images.unsplash.com/photo-1683901381775-b5c4dd1a3ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="7"
        />
      ),
      link: "https://www.instagram.com/p/Cr2UYJ3Nocr/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setSlideNumber(index);
        console.log(index, slideNumber);
        if (index === slideNumber) window.open(slide.link, "_blank");
      },
    };
  });
  const scrollAnimation = (pref, delta, scroll) => {
    const r = scroll.range(0.5, 0.53);
    const p = -20 + (6 - -20) * r;
    pref.current.position.z = MathUtils.damp(
      pref.current.position.z,
      p,
      2,
      delta
    );

    const py = 5 + (-3 - 5) * r;
    pref.current.position.y = MathUtils.damp(
      pref.current.position.y,
      py,
      2,
      delta
    );
    const px = -5 + (3 - -5) * r;
    pref.current.position.x = MathUtils.damp(
      pref.current.position.x,
      px,
      2,
      delta
    );
  };
  return (
    <Planet
      config={p}
      scroll={scroll}
      idleAnimation={(pref, selected) => {
        if (pref) {
          if (!selected) {
            pref.current.rotation.y += 0.005;
          }
        }
      }}
      scrollAnimation={scrollAnimation}
    >
      <Html position={[0, 0, 0]} className="html-ob">
        <Carousel
          slides={slides}
          showNavigation={true}
          enableSwipe={true}
          offsetRadius={10}
          goToSlide={slideNumber}
        />
      </Html>
    </Planet>
  );
}
