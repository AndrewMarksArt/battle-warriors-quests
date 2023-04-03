import "../css/main.css"
import React, { useState } from "react";

export default function Hero() {
    // State for email input
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

    };

    return (
        <>
        <div className="main">
            <img src="./img/title.png" className="title"></img>
            <h2 className="subhead">
                Embark on a legendary quest for glory and honor! 
                Let the sagas sing of your triumph against the fearsome foes that threaten the realm!
            </h2>
            <div className="container">
                <img src="./img/stone_gateway.png" className="main-img"></img>
                <div className="content">
                    <form onSubmit={handleSubmit} className="content">
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            className="input-text"
                        />
                        <button type="submit" className="button-primary">
                                Get Early Access!
                        </button>
                        <button 
                            type="button" 
                            className="button-secondary"
                            onClick={() => window.open('http://discord.gg/battle_warriors', '_blank')}
                        >
                            And Join Discord
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}