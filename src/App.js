import "./App.css";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/3d/Scene";
import SceneScroll from "./components/3d/SceneScroll";
import MyEnvironment from "./components/3d/MyEnvironment";
import LoadingPage from "./components/3d/LandingPage";
import { Suspense, useState } from "react";
import DayNightToggle from "./components/2d/DayNightToggle";
function App() {
  const [dayMode, setDayMode] = useState(false);
  return (
    <div className="App">
      <DayNightToggle dayMode={dayMode} setDayMode={setDayMode} />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <MyEnvironment dayMode={dayMode} />
        {/* <SceneScroll /> */}
        <Suspense fallback={<LoadingPage />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
