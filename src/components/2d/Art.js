import { Html } from "@react-three/drei";
import { PLANETS } from "../constants/objects";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./Art.css";
import { useState } from "react";

export default function Art() {
  const path = "Art";
  const [slideNumber, setSlideNumber] = useState(0);

  const slides = [
    {
      key: 1,
      content: <img src="/images/alien-bong.jpg" alt="1" />,
      link: "https://www.instagram.com/p/CHLA8_2h5Ce/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      key: 2,
      content: <img src="/images/cat-grass.jpg" alt="2" />,
      link: "https://unsplash.com/@ritode",
    },
    {
      key: 3,
      content: (
        <img
          src="https://images.unsplash.com/photo-1683897916152-a6cd31a6f8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
          alt="3"
        />
      ),
      link: "https://unsplash.com/@ritode",
    },
    {
      key: 4,
      content: (
        <img
          src="https://images.unsplash.com/photo-1683897916147-38dc099e5425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80"
          alt="4"
        />
      ),
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

  return (
    <Html position={PLANETS[path].position} className="html-ob">
      <Carousel
        slides={slides}
        showNavigation={true}
        enableSwipe={true}
        offsetRadius={10}
        goToSlide={slideNumber}
      />
    </Html>
  );
}
