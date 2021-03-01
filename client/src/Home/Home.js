import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Room State, default is none
    const [roomName, setRoomName] = useState("");
    // Room Change handler, sets room name to input when submitted
    const handleRoomChanges = (event) => {
        setRoomName(event.target.value)
    }
    // Home Component Render, input field for room name and join link for updated roomName
    return (
        <div className="homeContainer">
            <input
                className="homeContainerInput"
                type="text"
                value={roomName}
                placeholder="Room ID"
                onChange={handleRoomChanges}
            />
            <Link to={`/${roomName}`} className="homeContainerLink">
                Join Room
            </Link>
        </div>
    )
}

export default Home;