import { useEffect } from "react"
import { useCharacterAnimations } from "../contexts/CharacterAnimations"

function Interfaces() {

    const { animations, animationsIndex, setAnimationIndex } = useCharacterAnimations() 

    useEffect(() => {
        console.log(animations)
    }, [])

    return(
        <>
            {

                animations.map((animation, index) => (
                    <button key={index} onClick={() => setAnimationIndex(index)}>
                        {animation}
                    </button>
                ))
            }
        </>
    )
}

export default Interfaces
