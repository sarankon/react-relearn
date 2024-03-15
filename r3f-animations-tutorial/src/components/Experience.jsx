import { OrbitControls } from "@react-three/drei"
import Character from "../models/animated_character_v1.2"

function Experience() {

    return (
      <>
        <OrbitControls />
        <ambientLight/>
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

        <group position={[-0, -1, 0]}>
            <Character />
        </group>
        
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[10, 10, 1, 1]}/>
            <shadowMaterial transparent opacity={0.2} />
            {/* <planeBufferGeometry args={[10, 10, 1, 1]}/> */}
        </mesh>
        <mesh>
            
            {/* <boxGeometry /> */}
            {/* <boxBufferGeometry /> */}
            {/* <meshNormalMaterial /> */}
        </mesh>       
      </>
         
    )
}


export default Experience