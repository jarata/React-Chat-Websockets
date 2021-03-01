import { useState } from "react";

const ChatRoom = (props) => {
    console.log("Chat Room Props:", props.match.params);
    const { roomId } = props.match.params;
    console.log("Room ID:", roomId);
    return (
        <div className="chatRoomContainer">
            <h1>Room: {roomId}</h1>
            <div className="chatRoomMessagesContainer">
                <ol className="chatRoomMessages">
                    messages
                </ol>
            </div>
            <textarea
                className="chatRoomNewMessage"
            />
            <button className="chatRoomMessageSubmit">
                Send
            </button>
        </div>
    )
}

export default ChatRoom;