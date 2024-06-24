import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Message = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <ListGroupItem className={`d-flex ${isUser ? 'justify-content-end' : ''} mb-2`}>
      {!isUser && <span className="me-2">🤖</span>}
      <div className={`p-2 rounded ${isUser ? 'bg-primary text-white' : 'bg-light text-dark'}`}>
        {text}
      </div>
      {isUser && <span className="ms-2">👤</span>}
    </ListGroupItem>
  );
};

export default Message;
