import React, { useState } from 'react';
import './Chat.css';

const Chat = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="chat-header" onClick={toggleChat}>
        Team Chat
      </div>
      {isOpen && (
        <div className="chat-content">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender === 'You' ? 'chat-message-sent' : 'chat-message-received'}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
