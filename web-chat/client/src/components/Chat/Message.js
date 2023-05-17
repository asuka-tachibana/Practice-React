import React from 'react';

const Message = ({ text, sender }) => (
  <div>
    <strong>{sender}</strong>: {text}
  </div>
);

export default Message;
