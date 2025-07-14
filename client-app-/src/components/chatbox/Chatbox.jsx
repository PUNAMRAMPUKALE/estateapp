import React from 'react'
import { useState } from "react";
import "./chatbox.scss";

const Chatbox = () => {

    const [isChatOpen, setIsChatOpen] = useState(true);

    const messages = Array(6).fill({
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet...",
    });

    const chatContent = Array(10).fill(null).map((_, i) => ({
        text: "Lorem ipsum dolor sit amet",
        time: "1 hour ago",
        isOwn: i % 2 !== 0,
    }));

    return (
        <div className="main-chat">
            <section className="messages-container">
                <h1>Messages</h1>
                {messages.map((msg, index) => (
                    <div className="message-container" key={index}>
                        <img src={msg.img} alt={msg.name} />
                        <span>{msg.name}</span>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </section>

            {isChatOpen && (
                <section className="chatBox-section">
                    <header className="top">
                        <div className="user-container">
                            <img src={messages[0].img} alt="User Avatar" />
                            {messages[0].name}
                        </div>
                        <span className="close" onClick={() => setIsChatOpen(false)}>×</span>
                    </header>

                    <main className="center">
                        {chatContent.map((msg, i) => (
                            <div
                                key={i}
                                className={`chatMessage-container ${msg.isOwn ? "own" : ""}`}
                            >
                                <p>{msg.text}</p>
                                <span>{msg.time}</span>
                            </div>
                        ))}
                    </main>

                    <footer className="bottom-section">
                        <textarea placeholder="Type your message..."></textarea>
                        <button>Send</button>
                    </footer>
                </section>
            )}
        </div>
    );
}
export default Chatbox;