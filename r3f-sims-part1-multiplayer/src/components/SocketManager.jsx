import { useEffect } from "react"
import { io } from "socket.io-client"

export const socket = io("http://localhost:3000")

export function SocketManager() {

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

        socket.on("connected", onConnected)
        socket.on("disconnected", onDisconnect)
        socket.on("hello", onHello)

        return () => {
            socket.on("connected", onConnected)
            socket.on("disconnected", onDisconnect)
            socket.on("hello", onHello)
        }

    }, [])

}