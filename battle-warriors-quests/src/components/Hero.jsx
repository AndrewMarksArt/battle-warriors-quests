import "../css/main.css"
import React, { useState } from "react";

export default function Hero() {
    // State for email input
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // need to save emails and not just log them

        console.log('Email: ', email); // print email to the console
        setEmail(''); // clear the text input

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
                            onChange={handleChange}
                            placeholder="Enter your email address" 
                            className="input-text"
                        />
                        <button type="submit" className="button-primary">
                                Get Early Access!
                        </button>
                        <button 
                            type="button" 
                            className="button-secondary"
                            onClick={() => window.open('https://discord.gg/battle-warriors', '_blank')}
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