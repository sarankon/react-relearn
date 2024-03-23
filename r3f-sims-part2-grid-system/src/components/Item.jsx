import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAtom } from "jotai"
import { SkeletonUtils } from 'three-stdlib'

import { mapAtom } from './SocketManager' 

export function Item({ item }) {
    const { name, gridPosition, size, rotation } = item
    const [map] = useAtom(mapAtom)
    const { scene } = useGLTF(`/models/${name}.glb`)
    // Skinned meshed cannot be re-used in threejs without cloning them
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

    return <primitive 
        object={clone} 
        position={[
            size[0] / map.gridDivision / 2 + gridPosition[0] / map.gridDivision, 
            0, 
            size[1] / map.gridDivision / 2 + gridPosition[1] / map.gridDivision
        ]} 
        rotation-y={(rotation || 0) * Math.PI /2}/>    
}