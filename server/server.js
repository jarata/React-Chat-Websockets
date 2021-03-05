const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

const PORT = 4000;
const NEW_CHAT_EVENT = "newChatEvent";

io.on("connection", (socket) => {

})

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})