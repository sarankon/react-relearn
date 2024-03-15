import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience.jsx"
import Interfaces from "./components/Interfaces.jsx"

function App() {

  return (
    <>
      <Interfaces />
      <Canvas camera={{position: [1, 1.5, 2.5], fov: 50}} shadows>
        <Experience />
      </Canvas>
    </>
    
  )
}

export default App
