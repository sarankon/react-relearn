import { useEffect } from "react"
import { io } from "socket.io-client"
import { atom, useAtom } from "jotai"

export const socket = io("http://localhost:3000")
export const charactersAtom = atom([])

export function SocketManager() {
    const [_characters, setCharacters] = useAtom(charactersAtom)

    useEffect(() => {
        function onConnected() {
            console.log("Connected")
        }

        function onDisconnect() {
            console.log("Disconnected")
        }

        function onHello() {
            console.log("Hello")
        }

        function onCharacters(value) {
            console.log("characters", value)
            setCharacters(value)
        }

        socket.on("connected", onConnected)
        socket.on("disconnected", onDisconnect)
        socket.on("hello", onHello)
        socket.on("characters", onCharacters)
        return () => {
            socket.on("connected", onConnected)
            socket.on("disconnected", onDisconnect)
            socket.on("hello", onHello)
            socket.on("characters", onCharacters)
        }

    }, [])

}