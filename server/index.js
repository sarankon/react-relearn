const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
})

io.listen(3000)

const characters = [];

const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * 3)
    const y = 0
    const z = Math.floor(Math.random() * 3)
    return [x, y, z]
}

const generateRandomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

io.on("connection", (socket) => {
    console.log("user connected")
    socket.emit("hello")

    characters.push({
        id: socket.id,
        position: generateRandomPosition(),
        hairColor: generateRandomHexColor(),
        topColor: generateRandomHexColor(),
        bottomColor: generateRandomHexColor()
    })

    io.emit("characters", characters);

    socket.on("move", (position) => {
        const character = characters.find((character) => character.id === socket.id)
        character.position = position
        io.emit("characters", characters)
    })
    
    socket.on("disconnect", () => {
        console.log("user disconnected")
        characters.splice(characters.findIndex((character) => character.id === socket.id), 1)
        io.emit("characters", characters)
    })
})