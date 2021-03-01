import { useState } from "react";

const ChatRoom = (props) => {
    console.log("Chat Room Props:", props.match.params);
    // Room Id from url
    const { roomId } = props.match.params;
    console.log("Room ID:", roomId);
    // State to update new message from input
    const [ newMessage, setNewMessage ] = useState("");
    // Handle message input and setState
    const handleNewMessages = (event) => {
        console.log("New Message Handler");
        setNewMessage(event.target.value);
    }
    console.log("Handle New Message", newMessage);
    // Chat Room Render, displays chat from room Id as well as inputs for sending messages to room
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
                onChange={handleNewMessages}
                value={newMessage}
                placeholder="New Message..."
            />
            <button className="chatRoomMessageSubmit">
                Send
            </button>
        </div>
    )
}

export default ChatRoom;