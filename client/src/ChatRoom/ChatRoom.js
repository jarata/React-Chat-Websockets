import { useState } from 'react';
import useChat from '../lib/useChat';

const ChatRoom = (props) => {
    console.log("Chat Room Props:", props.match.params);
    // Room Id from url
    const { roomId } = props.match.params;
    // State to update new message from input
    const [ newMessage, setNewMessage ] = useState("");
    // State that connects to server and handles messages
    const { messages, submitMessage } = useChat(roomId);
    // Handle message input and setState
    const handleNewMessages = (event) => {
        setNewMessage(event.target.value);
    }
    // Handles submitted message and resets message input
    const handleSubmitMessage = () => {
        submitMessage(newMessage);
        setNewMessage("");
    }
    // Chat Room Render, displays chat from room Id as well as inputs for sending messages to room
    return (
        <div className="chatRoomContainer">
            <h1>Room: {roomId}</h1>
            <div className="chatRoomMessagesContainer">
                <ol className="chatRoomMessages">
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={`chatRoomMessage ${message.ownedByCurrentUser ? "myMessage" : "receivedMessage"}`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <textarea
                className="chatRoomNewMessage"
                onChange={handleNewMessages}
                value={newMessage}
                placeholder="New Message..."
            />
            <button className="chatRoomMessageSubmit" onClick={handleSubmitMessage}>
                Send
            </button>
        </div>
    )
}

export default ChatRoom;