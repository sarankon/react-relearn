/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Dragon_Evolved.gltf -o src/components/DragonEvolved.jsx -r public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function DragonEvolved({hovered, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Dragon_Evolved.gltf')
  const { actions } = useAnimations(animations, group)

  console.log(actions)
  useEffect(() => {
    const anim = hovered ? "Fast_Flying": "Flying_Idle"
    actions[anim].reset().fadeIn(0.5).play()
    return () => actions[anim].fadeOut(0.5)
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <skinnedMesh name="Dragon" geometry={nodes.Dragon.geometry} material={materials.Atlas} skeleton={nodes.Dragon.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Dragon_Evolved.gltf')
