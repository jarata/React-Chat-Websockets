// useChat React Hook
import { useState, useRef, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const SOCKET_SERVER = "http://localhost:4000";
const NEW_CHAT_EVENT = "newChatMessage";

const useChat = (roomId) => {
    console.log("useChat Hook");
    const [ messages, setMessages ] = useState([]);
    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER, {
            query: { roomId }
        })
        socketRef.current.on(NEW_CHAT_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);
    const submitMessage = (messageBody) => {
        socketRef.current.emit(NEW_CHAT_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
        })
    }
    return { messages, submitMessage };
}

export default useChat;