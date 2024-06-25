import React, { useState, useEffect, useRef } from 'react';
import { Drawer, List, ListItem, TextField, Button, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import Swal from 'sweetalert2';
import Image from 'next/image';

import user from './images/user.svg';
import bot from './images/bot.svg';

const BotIcon = () => <Image src={bot} alt="Bot" style={{ width: '30px', height: '27px', marginRight: '5px' }} />;
const UserIcon = () => <Image src={user} alt="User" style={{ width: '30px', height: '27px', marginLeft: '5px' }} />;

const ChatApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [token, setToken] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);
    const messagesEndRef = useRef(null);


    useEffect(() => {
        setMessages([{ sender: 'ChatBot', message: 'Hello! I am Credit Card Service provider. How can I assist you?' }]);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    //         appendMessage('You', userMessage);
    //         setInputMessage('');
    //         setIsBotTyping(true);

    //         try {
    //             const response = await axios.post('/api/proxy', {
    //                 method: 'POST',
    //                 body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: userMessage } },
    //             });

    //             const { data } = response;
    //             const formattedResponse = formatResponse(data.response);
    //             appendMessage('ChatBot', formattedResponse);
    //             setIsBotTyping(false);
    //             setInputMessage('');
    //         } catch (error) {
    //             console.error("Error:", error);
    //             if (error.response) {
    //                 console.error("Response data:", error.response.data);
    //                 console.error("Response status:", error.response.status);
    //                 console.error("Response headers:", error.response.headers);
    //             } else if (error.request) {
    //                 console.error("Request data:", error.request);
    //             } else {
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
            appendMessage('You', userMessage);
            setInputMessage('');
            setIsBotTyping(true);

            try {
                const response = await axios.post('/api/proxy', {
                    method: 'POST',
                    body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: userMessage } },
                });

                const { data } = response;
                const formattedResponse = formatResponse(data.response);
                appendMessage('ChatBot', formattedResponse);
                setIsBotTyping(false);
                setInputMessage('');
            } catch (error) {
                console.error("Error:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                    const errorMessage = error.response.data.error || 'Failed to send message. Please try again later.';
                    appendMessage('ChatBot', errorMessage);
                } else if (error.request) {
                    console.error("Request data:", error.request);
                    appendMessage('ChatBot', 'Something went wrong try again later.');
                } else {
                    console.error("Error message:", error.message);
                    appendMessage('ChatBot', 'Something went wrong try again later.');
                }
                setIsBotTyping(false);
                setInputMessage('');
            }
        }
    };

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

    const handleBotMessageDoubleClick = (messageText) => {
        navigator.clipboard.writeText(messageText); // Copy message text to clipboard
        alert('Message copied to clipboard')
    };
    

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '46px',
                right: '19px',
                zIndex: 1,
            }}
        >
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
                        width: '28rem',
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
                                        cursor: 'pointer',
                                        fontWeight: '400',
                                        padding: '8px',
                                        maxWidth: '80%',
                                        wordWrap: 'break-word',
                                        alignSelf: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '14px',
                                        flexWrap: 'nowrap',
                                    }}
                                    onDoubleClick={() => handleBotMessageDoubleClick(message.message)}
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
                    </form>
                </div>
            </Drawer>
        </div>
    );
};

export default ChatApp;
