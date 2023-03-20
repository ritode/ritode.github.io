import "./App.css";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/3d/Scene";
import SceneScroll from "./components/3d/SceneScroll";
import MyEnvironment from "./components/3d/MyEnvironment";

function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <MyEnvironment />
        {/* <SceneScroll /> */}
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
