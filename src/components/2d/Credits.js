import { Html } from "@react-three/drei";
import { Vector3 } from "three";
import "./Credits.css";

export default function Credits() {
  const credits = [
    `"Octopus" (https://skfb.ly/6UIKE) by yobealexx is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
  ];
  return (
    <Html className="html-ob" position={new Vector3(0, 4, 0)}>
      <div className="credits">
        {credits.map((i) => (
          <span>{i}</span>
        ))}
      </div>
    </Html>
  );
}
