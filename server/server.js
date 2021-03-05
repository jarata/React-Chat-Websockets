const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

const PORT = 4000;
const NEW_CHAT_EVENT = "newChatEvent";

io.on("connection", (socket) => {
    // Join
    const { roomId } = socket.handshake.query;
    socket.join(roomId);
    // Listen
    socket.on(NEW_CHAT_EVENT, (data) => {
        io.on(roomId).emit(NEW_CHAT_EVENT, data);
    });
    // Leave
    socket.on("Disconnect", () => {
        socket.leave(roomId);
    })
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});