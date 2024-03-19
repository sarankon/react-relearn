import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"


import * as THREE from "three"
import { DissolveMaterial } from "./DissolveMaterial"

const boxMartial = new THREE.MeshStandardMaterial({color:"white"});

function Experience() {

    

    return(
        <>
            <Environment preset="sunset" />
            <ContactShadows position-y={-1}/>
            <ambientLight />
            <OrbitControls />

            <mesh>
                <boxGeometry/>
                <DissolveMaterial baseMaterial={boxMartial}/>
            </mesh>
        </>
    )
}

export default Experience