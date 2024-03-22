import { Environment, OrbitControls } from "@react-three/drei";
import { AnimatedWoman } from "./AnimatedWoman";
import { AnimatedWomanClone } from "./AnimatedWomanClone";

export function Experience() {
    return(
        <>
            <Environment preset="sunset"/>
            <OrbitControls/>
            <AnimatedWomanClone/>
            <AnimatedWomanClone position-x={1} hairColor="red" topColor="blue"/>
            <ambientLight/>
        </>
    )
}