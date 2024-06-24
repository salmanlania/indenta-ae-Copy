import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Sidebar = ({ chats, onSelectChat, onNewChat }) => {
  return (
    <div className="d-flex flex-column h-100">
      <Button variant="primary" className="m-3" onClick={onNewChat}>
        New Chat
      </Button>
      <ListGroup className="flex-grow-1 overflow-auto">
        {chats.map((chat) => (
          <ListGroup.Item key={chat.id} action onClick={() => onSelectChat(chat)}>
            Chat {chat.id}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
