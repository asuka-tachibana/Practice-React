import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => (
  <div>
    {messages.map((message, i) => (
      <Message key={i} text={message.text} sender={message.sender} />
    ))}
  </div>
);

export default MessageList;
