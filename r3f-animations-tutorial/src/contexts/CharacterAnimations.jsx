import { createContext, useContext, useState } from "react"

const CharacterAnimationsContext = createContext({});

export function CharacterAnimationsProvider(prop) {

    const [animationsIndex, setAnimationIndex] = useState(0)
    const [animations, setAnimations] = useState([])

    return(
        <CharacterAnimationsContext.Provider value={{
            animationsIndex, setAnimationIndex,
            animations, setAnimations           
        }}>
            {prop.children}
        </CharacterAnimationsContext.Provider>
    )
}

export function useCharacterAnimations() {
    return useContext(CharacterAnimationsContext)
}