import { useState } from "react"
import { Environment, OrbitControls, useCursor } from "@react-three/drei"
import { useAtom } from "jotai"
import * as THREE from "three"

import { AnimatedWoman } from "./AnimatedWoman"
import { AnimatedWomanClone } from "./AnimatedWomanClone"
import { charactersAtom, mapAtom, socket } from "./SocketManager"
import { Item } from "./Item"

export function Experience() {

    const [characters] = useAtom(charactersAtom)
    const [map] = useAtom(mapAtom)
    const [onFloor, setOnFloor] = useState(false)
    useCursor(onFloor)

    return(
        <>
            <Environment preset="sunset"/>
            <OrbitControls/>
            {/* <Item name={"Shelf_Small"} /> */}
            {/* <Item name={"Couch_Small"} /> */}
            {/* <Item name={"Couch_Medium"} /> */}
            {
                map.items.map((item, idx) => (
                    <Item key={`${item.name}-${idx}`} item={item} />
                ))
            }
            <mesh rotation-x={-Math.PI / 2} position-y={-0.001} 
                onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
                onPointerEnter={(e) => setOnFloor(true)}
                onPointerLeave={(e) => setOnFloor(false)}
                position-x={map.size[0] / 2}
                position-z={map.size[1] / 2}
            >
                <planeGeometry args={map.size} />
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>
            {
                characters.map((character) => (
                    <AnimatedWomanClone 
                        key={character.id} 
                        // position={character.position}
                        position={new THREE.Vector3(character.position[0], 0, character.position[2])}
                        hairColor={character.hairColor}
                        topColor={character.topColor}
                        bottomColor={character.bottomColor} 
                    />
                ))
            }
            {/* <AnimatedWomanClone/> */}
            {/* <AnimatedWomanClone position-x={1} hairColor="red" topColor="blue"/> */}
            <ambientLight/>
        </>
    )
}