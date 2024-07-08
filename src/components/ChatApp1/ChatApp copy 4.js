// // import React, { useState } from 'react';
// // import { Box, TextField, IconButton, Typography, Avatar, Container } from '@mui/material';
// // import SendIcon from '@mui/icons-material/Send';
// // import { deepOrange, deepPurple } from '@mui/material/colors';

// // const ChatApp = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState('');

// //   const handleSend = async () => {
// //     if (input.trim()) {
// //       const userMessage = { text: input, sender: 'user' };
// //       setMessages([...messages, userMessage]);

// //       // Simulate API call to get bot response
// //       const response = await fetch('/api/chat', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ message: input }),
// //       });

// //       const data = await response.json();
// //       const botMessage = { text: data.reply, sender: 'bot' };
// //       setMessages((prevMessages) => [...prevMessages, botMessage]);

// //       setInput('');
// //     }
// //   };

// //   const Message = ({ text, sender }) => {
// //     const isUser = sender === 'user';
// //     return (
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: isUser ? 'flex-end' : 'flex-start',
// //           mb: 2,
// //         }}
// //       >
// //         {!isUser && <Avatar sx={{ bgcolor: deepPurple[500], mr: 1 }}>B</Avatar>}
// //         <Box
// //           sx={{
// //             bgcolor: isUser ? deepOrange[500] : deepPurple[500],
// //             color: 'white',
// //             p: 2,
// //             borderRadius: 2,
// //           }}
// //         >
// //           <Typography>{text}</Typography>
// //         </Box>
// //         {isUser && <Avatar sx={{ bgcolor: deepOrange[500], ml: 1 }}>U</Avatar>}
// //       </Box>
// //     );
// //   };

// //   return (
// //     <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
// //       <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}>
// //         {messages.map((message, index) => (
// //           <Message key={index} text={message.text} sender={message.sender} />
// //         ))}
// //       </Box>
// //       <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           placeholder="Type a message"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
// //         />
// //         <IconButton color="primary" onClick={handleSend}>
// //           <SendIcon />
// //         </IconButton>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default ChatApp;

// import React, { useState } from 'react';
// import { Spinner } from 'react-bootstrap';
// import Message from './Message.jsx';

// const ChatApp = ({ chat, setChats }) => {
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async () => {
//     if (input.trim()) {
//       const userMessage = { text: input, sender: 'user' };
//       chat.messages.push(userMessage);
//       setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? chat : c)));
//       setInput('');
//       setIsTyping(true);

//       // Simulate API call to get bot response
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await response.json();
//       const botMessage = { text: data.reply, sender: 'bot' };
//       chat.messages.push(botMessage);
//       setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? chat : c)));
//       setIsTyping(false);
//     }
//   };

//   return (
//     <div className="d-flex flex-column h-100">
//       <div className="flex-grow-1 overflow-auto p-3">
//         {chat.messages.map((message, index) => (
//           <Message key={index} text={message.text} sender={message.sender} />
//         ))}
//         {isTyping && (
//           <div className="d-flex align-items-center mb-3">
//             <Spinner animation="border" size="sm" className="me-2" />
//             <div className="text-muted">Bot is typing...</div>
//           </div>
//         )}
//       </div>
//       <div className="input-group p-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type a message"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button className="btn btn-primary" onClick={handleSend}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Welcome message from the bot when the component mounts
    receiveMessageFromBot("Hello! How can I assist you today?");
  }, []);

  const receiveMessageFromBot = (message) => {
    setChatHistory([...chatHistory, { message, sender: 'bot' }]);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { message, sender: 'user' }]);
    setLoading(true);
    
    // Simulate delay for bot response
    setTimeout(async () => {
      setLoading(false);
      receiveMessageFromBot("I'm sorry, I'm just a demo bot and can't respond to messages.");
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="chat-container">
      <Head>
        <title>Chat App</title>
      </Head>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col sm={12} className="p-0">
            <div className="chat-box">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`message ${chat.sender}`}>
                  <span className="message-content">{chat.message}</span>
                </div>
              ))}
              {loading && <div className="loading-indicator">Bot is typing...</div>}
            </div>
            <InputGroup className="chat-input">
              <FormControl
                placeholder="Type your message here..."
                aria-label="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="primary" onClick={sendMessage}>Send</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .chat-container {
          height: 100vh;
        }
        .chat-box {
          height: calc(100% - 60px);
          overflow-y: auto;
          padding: 10px;
        }
        .message {
          margin-bottom: 10px;
          border-radius: 10px;
          padding: 8px 12px;
          max-width: 70%;
        }
        .message.user {
          align-self: flex-end;
          background-color: #007bff;
          color: #fff;
        }
        .message.bot {
          align-self: flex-start;
          background-color: #f8f9fa;
          color: #000;
        }
        .message-content {
          display: block;
        }
        .chat-input {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: #f8f9fa;
        }
        .loading-indicator {
          text-align: center;
          font-style: italic;
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default ChatApp;
