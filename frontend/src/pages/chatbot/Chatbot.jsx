import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([{ text: "Hello! How can I help you today?", isBot: true }]);
    const [userInput, setUserInput] = useState("");

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = () => {
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, isBot: false };
        setMessages([...messages, userMessage]);
        let botMessage = { text: "I'm here to help!", isBot: true };

        if (userInput.toLowerCase().includes("course")) {
            botMessage.text = "You can find your enrolled courses under the 'Courses' tab!";
        } else if (userInput.toLowerCase().includes("support")) {
            botMessage.text = "Please contact our support team at support@elearning.com.";
        } else if (userInput.toLowerCase().includes("progress")) {
            botMessage.text = "You can track your progress in the Lecture page under 'Lecture completed'.";
        }else if (userInput.toLowerCase().includes("reset password")) {
            botMessage.text = "You can reset your password by visiting the 'Forgot Password' link on the login page.";
        }else if (userInput.toLowerCase().includes("deadline")) {
            botMessage.text = "Each course has a suggested completion time, but there is no strict deadline. Learn at your own pace!";
        }else if (userInput.toLowerCase().includes("payment")) {
            botMessage.text = "Go to course page then click on get started then you will redirect to payment page!";
        }
        else if (userInput.toLowerCase().includes("lecture")) {
            botMessage.text = "Go to course page click on study then you will be redirect to course study page then you will redirect to Lecture page!";
        }

        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 1000);

        setUserInput("");
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.isBot ? "bot-message" : "user-message"}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={handleUserInput}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}><IoSend /></button>
            </div>
        </div>
    );
};

export default Chatbot;