// import { useState } from 'react'

import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useCursor, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import * as THREE from 'three'

import { DragonEvolved } from './components/DragonEvolved'
import { Fish } from './components/Fish'
import { Monkroose } from './components/Monkroose'

function Monster() {

  const [active, setActive] = useState(null)
  const [hovered, setHover] = useState(null)
  useCursor(hovered)
  const controlsRef = useRef()
  const scene = useThree((state) => state.scene)

  useEffect(() => {
    if(active) {
      const targetPosition = new THREE.Vector3()
      scene.getObjectByName(active).getWorldPosition(targetPosition)
      controlsRef.current.setLookAt(0, 0, 5, targetPosition.x, targetPosition.y, targetPosition.z, true)
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true)
    }
  }, [active])

  return (
    <>
        <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6}/>
        <Environment preset='sunset' />
        <ambientLight intensity={0.5} />

        <MonsterStage 
          texture={"textures/anime_art_style_lava_world.jpg"} name={"Dragon"} color={"#a3552f"} 
          active={active} setActive={setActive}
          hovered={hovered} setHover={setHover}
          position-x={-2.5} rotation-y={Math.PI / 8}>
          <DragonEvolved scale={0.6} position-y={-1} hovered={hovered === "Dragon"}/>
        </MonsterStage>

        <MonsterStage texture={"textures/anime_art_style_cactus_forest.jpg"} name={"Monkroose"} color={"#739d3c"}
          active={active} setActive={setActive}
          hovered={hovered} setHover={setHover}>
          <Monkroose scale={0.6} position-y={-1} hovered={hovered === "Monkroose"}/>
        </MonsterStage>

        <MonsterStage 
          texture={"textures/anime_art_style_a_water.jpg"} name={"Fish"} color={"#38adcf"} 
          active={active} setActive={setActive}
          hovered={hovered} setHover={setHover}
          position-x={2.5} rotation-y={-Math.PI / 8}>
          <Fish scale={0.6} position-y={-1} hovered={hovered === "Fish"}/>
        </MonsterStage>
    </>
  )
}

export default Monster

const MonsterStage = ({children, texture, name, color, active, setActive, hovered, setHover, ...props}) => {

  const map = useTexture(texture)
  const portalMaterial = useRef() 

  useFrame((_state, delta) => {
    const worldOpen = active === name
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
  })

  return(
    <group {...props}>
      <Text font='fonts/Blaka-Regular.ttf' fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
        {name}
        <meshBasicMaterial color={color} toneMapped={false}/>
      </Text>
      <RoundedBox 
        name={name}
        args={[2, 3, 0.1]} 
        onDoubleClick={() => setActive(active === name ? null : name)}
        onPointerEnter={() => setHover(name)} onPointerLeave={() => setHover(null)}>
          {/* <planeGeometry args={[2, 3]} /> */}
          <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          {/* <MeshPortalMaterial> */}
            <Environment preset='sunset' />
            <ambientLight intensity={0.6}/>
            {children}
            {/* <Ninja scale={0.6} position-y={-1}/> */}
            <mesh>
              <sphereGeometry args={[5, 64, 64]} />
              <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>
          </MeshPortalMaterial>
        </RoundedBox>
    </group>
  )
}