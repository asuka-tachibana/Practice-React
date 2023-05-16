import React, { useState } from 'react';

// Chat component
const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    // TODO: Send message to server
    // For now, just add it to local state
    setMessages([...messages, { text: message, sender: 'you' }]);
  };

  return (
    <div>
      <h1>Chat</h1>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

// Message list component
const MessageList = ({ messages }) => (
  <div>
    {messages.map((message, i) => (
      <Message key={i} {...message} />
    ))}
  </div>
);

// Message component
const Message = ({ text, sender }) => (
  <div>
    <strong>{sender}</strong>: {text}
  </div>
);

// Message input component
const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
