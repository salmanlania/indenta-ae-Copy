import React, { useState, useEffect, useRef } from 'react';
import { Drawer, List, ListItem, TextField, Button, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import Swal from 'sweetalert2';

import user from './images/user.svg';
import bot from './images/bot.svg';

const BotIcon = () => <img src={bot} alt="Bot" style={{ width: '30px', height: '27px', marginRight: '5px' }} />;
const UserIcon = () => <img src={user} alt="User" style={{ width: '30px', height: '27px', marginLeft: '5px' }} />;

const ChatApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [token, setToken] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);
    const messagesEndRef = useRef(null);


    useEffect(() => {
        setMessages([{ sender: 'ChatBot', message: 'Hello! I am a UAE Tax Consultant. How can I assist you?' }]);
        const storedToken = sessionStorage.getItem('token'); // Retrieve token from sessionStorage
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ ListItembehavior: 'smooth', block: 'end' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {

    //         // Append the user message immediately to the chat
    //         appendMessage('You', userMessage);
    //         setInputMessage(''); // Clear the input field

    //         try {
    //             const response = await axios.post(
    //                 'http://127.0.0.1:8000/chatbot/chat/',
    //                 { message: userMessage },
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${token}` // Use Bearer token format
    //                     }
    //                 }
    //             );

    //             const { data } = response;
    //             console.log('Response data:', data);
    //             appendMessage('ChatBot', data.response); // Assuming `data.access` contains the response you mentioned
    //             setInputMessage('');
    //         } catch (error) {
    //             console.error("Error:", error);
    //             Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
    //         }
    //     }
    // };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {
    //         // Append the user message immediately to the chat
    //         appendMessage('You', userMessage);
    //         setInputMessage(''); // Clear the input field

    //         // Retrieve token from localStorage
    //         const token = localStorage.getItem('authToken');

    //         if (!token) {
    //             Swal.fire('Error', 'You are not authorized. Please log in.', 'error');
    //             return;
    //         }

    //         try {
    //             console.log('Token:', token); // Log the token for debugging

    //             const response = await axios.post(
    //                 'http://127.0.0.1:8000/chatbot/chat/',
    //                 { message: userMessage },
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${token}` // Use Bearer token format
    //                     }
    //                 }
    //             );

    //             const { data } = response;
    //             console.log('Response data:', data);
    //             appendMessage('ChatBot', data.response); // Assuming `data.response` contains the response you mentioned
    //             setInputMessage('');
    //         } catch (error) {
    //             console.error("Error:", error);
    //             if (error.response) {
    //                 // The request was made and the server responded with a status code that falls out of the range of 2xx
    //                 console.error("Response data:", error.response.data);
    //                 console.error("Response status:", error.response.status);
    //                 console.error("Response headers:", error.response.headers);
    //             } else if (error.request) {
    //                 // The request was made but no response was received
    //                 console.error("Request data:", error.request);
    //             } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 console.error("Error message:", error.message);
    //             }
    //             Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
    //         }
    //     }
    // };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        const userMessage = inputMessage.trim();

        if (userMessage !== '') {
            // Append the user message immediately to the chat
            appendMessage('You', userMessage);
            setInputMessage(''); // Clear the input field

            // Retrieve token from localStorage
            const token = localStorage.getItem('token');

            if (!token) {
                Swal.fire('Error', 'You are not authorized. Please log in.', 'error');
                return;
            }

            setIsBotTyping(true);

            try {
                // console.log('Token:', token); // Log the token for debugging

                const response = await axios.post(
                    'http://127.0.0.1:8000/chatbot/chat/',
                    { message: userMessage },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}` // Use Bearer token format
                        }
                    }
                );

                const { data } = response;
                // console.log('Response data:', data);
                const formattedResponse = formatResponse(data.response);
                appendMessage('ChatBot', formattedResponse);
                setIsBotTyping(false);
                // appendMessage('ChatBot', data.response); // Assuming `data.response` contains the response you mentioned
                setInputMessage('');
            } catch (error) {
                console.error("Error:", error);
                if (error.response) {
                    // The request was made and the server responded with a status code that falls out of the range of 2xx
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Request data:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Error message:", error.message);
                }
                Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
            }
        }
    };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {
    //         appendMessage('You', userMessage);
    //         setInputMessage('');

    //         try {
    //             console.log('Sending message:', userMessage); // Debugging: log the message being sent
    //             const response = await fetch('http://127.0.0.1:8000/chatbot/chat/', {

    //             });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             console.log('Response data:', data); // Debugging: log the response data
    //             appendMessage('ChatBot', data.response);
    //         } catch (error) {
    //             console.error("Error:", error);
    //             appendMessage('ChatBot', 'Something went wrong. Please try again later.');
    //         }
    //     }
    // };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {
    //         try {
    //             const response = await axios.post('http://127.0.0.1:8000/chatbot/chat/', {
    //                 message: userMessage
    //             }, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `JWT ${token}`
    //                 }
    //             });

    //             const { data } = response;
    //             console.log('Response data:', data);
    //             appendMessage('ChatBot', data.access); // Assuming `data.access` contains the response you mentioned
    //             setInputMessage('');
    //         } catch (error) {
    //             console.error("Error:", error);
    //             Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
    //         }
    //     }
    // };

    // const formatResponse = (response) => {
    //     return response.split('\n').map((line, index) => {
    //         if (line.startsWith('- ')) {
    //             return <div><span key={index}>{line}<br /></span></div>;
    //         }
    //         return line;
    //     });
    // };

    const formatResponse = (response) => {
        return (
            <div>
                {response.split('\n').map((line, index) => {
                    if (line.startsWith('- ')) {
                        return <span key={index}>{line}<br /></span>;
                    }
                    return <div key={index}>{line}<br /></div>;
                })}
            </div>
        );
    };

    const appendMessage = (sender, message) => {
        setMessages((prevMessages) => [...prevMessages, { sender, message }]);
    };

    const handleCloseChat = () => {
        handleDrawerClose();
        
    };

    // const handleClearChat = () => {
    //     setMessages([]);
    // };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDrawerOpen}
                sx={{
                    borderRadius: '1rem',
                    background: '#FFB400',
                    color: 'black',
                    '&:hover': { background: '#FFB400' },
                    gap: '0.4rem',
                    minWidth: '100px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    bottom: '1.5rem',
                    marginLeft: 'auto',
                    marginRight: '3.5rem',
                    justifyContent: 'flex-end',
                    flexDirection: 'row-reverse',
                    '@media (min-width:600px)': {
                        flexDirection: 'row',
                    },
                }}
            >
                <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>Chat</Typography>
                <SmartToyOutlinedIcon
                    sx={{
                        fontSize: '1.5rem',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        margin: 'auto',
                    }}
                />
            </Button>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        top: 'auto',
                        left: 'auto',
                        right: 0,
                        bottom: 0,
                        maxHeight: '130%',
                        maxWidth: '100%',
                        width: '23rem',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        transition: 'transform 0.3s ease-in-out',
                        transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    },
                }}
            >
                <div style={{ padding: '8px', borderBottom: '2px black solid' }}>
                    <Button
                        color="secondary"
                        style={{ background: 'red' }}
                        onClick={handleCloseChat}
                    >
                        <CloseIcon style={{ color: 'white' }} />
                    </Button>
                </div>
                <div style={{ overflowY: 'auto', maxHeight: '100%' }}>
                    <List>
                        {messages.map((message, index) => (
                            <ListItem key={index} style={{ justifyContent: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end', gap: '15px' }}>
                                <div
                                    style={{
                                        background: message.sender === 'You' ? '#F4CB69' : '#F5F5F5',
                                        color: message.sender === 'You' ? 'black' : 'black',
                                        borderRadius: '8px',
                                        fontWeight: '400',
                                        padding: '8px',
                                        maxWidth: '80%',
                                        wordWrap: 'break-word',
                                        alignSelf: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        fontSize: '14px',
                                        flexWrap: 'nowrap',
                                    }}
                                >
                                    {message.sender === 'ChatBot' && <BotIcon />}
                                    {message.message}
                                    {message.sender === 'You' && <UserIcon />}
                                </div>
                            </ListItem>
                        ))}
                        {isBotTyping && (
                            <ListItem style={{ justifyContent: 'flex-start', gap: '15px' }}>
                                <div
                                    style={{
                                        background: '#F5F5F5',
                                        color: 'black',
                                        borderRadius: '8px',
                                        fontWeight: '400',
                                        padding: '8px',
                                        maxWidth: '80%',
                                        wordWrap: 'break-word',
                                        alignSelf: 'flex-start',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '5px',
                                        fontSize: '14px',
                                        flexWrap: 'nowrap',
                                    }}
                                >
                                    <BotIcon />
                                    <span className="dot-animation">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </span>
                                </div>
                            </ListItem>
                        )}
                        <div ref={messagesEndRef} />
                    </List>
                </div>
                <div style={{ padding: '16px', marginTop: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
                        <TextField
                            label="Type a message"
                            variant="outlined"
                            fullWidth
                            value={inputMessage}
                            onChange={(e) => {
                                setInputMessage(e.target.value)
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!inputMessage.trim()}
                        >
                            <SendIcon />
                        </Button>
                        {/* <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClearChat}
                        >
                            <DeleteForeverIcon />
                        </Button> */}
                    </form>
                </div>
            </Drawer>
        </div>
    );
};

export default ChatApp;
