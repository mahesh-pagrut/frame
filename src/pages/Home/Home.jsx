import React, { useState } from 'react';
import './Home.css';
import AuroraBackground from '../../components/AuroraBackground';
import { useNavigate } from 'react-router-dom';
import frameImg from '../../assets/frame.png';

const Home = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleJoin() {
        if (!input.trim()) {
            alert("Please enter a valid Room ID");
            return;
        }
        navigate(`/room/${input}`);
    }

    return (
        <div className="home-container">
            <div className="aurora-wrapper">
                <AuroraBackground />
            </div>

            <header className="header">
                <img src={frameImg} alt="Frame Logo" className="logo" />
                <h1 className="app-title">
                    <span className="highlight">Frame</span><span style={{
                        color: '#a7a7a7ff',
                        fontWeight: 700,
                    }}>.VidChat</span>

                </h1>
                <p className="app-subtitle">
                    Effortless video calls & chat, just one click away.
                </p>
            </header>

            <div className="form-container">
                <input
                    type="text"
                    placeholder="Enter Room ID"
                    className="input-field"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="submit-button" onClick={handleJoin}>
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default Home;
