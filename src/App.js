import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/3d/Scene";
import MyEnvironment from "./components/3d/MyEnvironment";
import LoadingPage from "./components/3d/LandingPage";
import { Suspense, useState } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
import { Stats } from "@react-three/drei";

function App() {
  const [dayMode, setDayMode] = useState(false);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <MyEnvironment dayMode={dayMode} />
        <Suspense fallback={<LoadingPage />}>
          <Scene />
        </Suspense>
        {/* <Stats className="stats" /> */}
      </Canvas>
    </div>
  );
}

export default App;
