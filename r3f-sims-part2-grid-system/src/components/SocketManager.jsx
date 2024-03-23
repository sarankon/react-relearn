import { useEffect } from "react"
import { io } from "socket.io-client"
import { atom, useAtom } from "jotai"

export const socket = io("http://localhost:3000")
export const mapAtom = atom(null)
export const charactersAtom = atom([])
export const userAtom = atom(null)

export function SocketManager() {
    const [_characters, setCharacters] = useAtom(charactersAtom)
    const [_map, setMap] = useAtom(mapAtom)
    const [_user, setUser] = useAtom(userAtom)

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

        function onMap(value) {
            console.log("Map", value)
            setMap(value.map)
            setUser(value.id)
            setCharacters(value)
        }

        function onCharacters(value) {
            console.log("characters", value)
            setCharacters(value)
        }

        socket.on("connected", onConnected)
        socket.on("disconnected", onDisconnect)
        socket.on("hello", onHello)
        socket.on("map", onMap)
        socket.on("characters", onCharacters)
        return () => {
            socket.on("connected", onConnected)
            socket.on("disconnected", onDisconnect)
            socket.on("hello", onHello)
            socket.on("map", onMap)
            socket.on("characters", onCharacters)
        }

    }, [])

}