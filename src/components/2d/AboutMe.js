import { Html } from "@react-three/drei";
import { OBJECTS } from "../constants/objects";
import "./pageStyle.css";

export default function AboutMe() {
  const path = window.location.href.split("/")[3];

  return (
    <Html position={OBJECTS[path].position} className="html-ob">
      <h1 className="planet-heading">About Me</h1>
      <div className="overlay">
        <img src="/images/me.png" />
        <div className="text-cards">
          <p>
            Hi, I am Ritobrita De and I am a{" "}
            <b>
              <i>Creative Developer</i>
            </b>
            .
          </p>
          <p>
            I love taking a concept or an idea and transforming it into a
            tangible creation that can be experienced and enjoyed by others.
          </p>
          <p>
            I have had experience in <b>Game Development</b> and <b>Robotics</b>{" "}
            and currently I am focusing on Front End development.
          </p>
          <p>
            I am passionate about using technology to tell stories, connect
            people, and make the world a more interesting and enjoyable place.
          </p>
        </div>
      </div>
    </Html>
  );
}
