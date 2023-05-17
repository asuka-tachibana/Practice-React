import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // Here, you would typically send the message to your server.
    // For this example, we'll just add it to the local state.

    setMessages([
      ...messages,
      {
        text: message,
        sender: 'You', // Replace 'You' with the actual user's name
      },
    ]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
