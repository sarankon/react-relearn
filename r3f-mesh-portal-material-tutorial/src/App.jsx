import { Canvas } from "@react-three/fiber"
import Monster from "./Monster"

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <Monster />
    </Canvas>
  )
}

export default App
