// import React, { useState, useEffect, useRef } from 'react';
// import { Drawer, List, ListItem, TextField, Button, Typography } from '@mui/material';
// import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Image from 'next/image';

// import user from './images/user.svg';
// import bot from './images/bot.svg';

// const BotIcon = () => <Image src={bot} alt="Bot" style={{ width: '30px', height: '27px', marginRight: '5px' }} />;
// const UserIcon = () => <Image src={user} alt="User" style={{ width: '30px', height: '27px', marginLeft: '5px' }} />;

// const ChatApp = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [inputMessage, setInputMessage] = useState('');
//     const [isBotTyping, setIsBotTyping] = useState(false);
//     const [sendingMessage, setSendingMessage] = useState(false);
//     const messagesEndRef = useRef(null);

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleDrawerOpen = () => {
//         setIsOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setIsOpen(false);
//     };

//     const handleSendMessage = async (e) => {
//         e.preventDefault();

//         const userMessage = inputMessage.trim();

//         if (userMessage !== '') {
//             appendMessage('You', userMessage);
//             setInputMessage('');
//             setSendingMessage(true);

//             try {
//                 const response = await axios.post('/api/proxy', {
//                     method: 'POST',
//                     body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: userMessage } },
//                 });

//                 const botMessage = response.data.response;
//                 appendMessage('ChatBot', botMessage);
//             } catch (error) {
//                 console.error("Error:", error);
//                 Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
//             } finally {
//                 setSendingMessage(false);
//             }
//         }
//     };

//     const formatResponse = (response) => {
//         return (
//             <div>
//                 {response.split('\n').map((line, index) => {
//                     if (line.startsWith('- ')) {
//                         return <span key={index}>{line}<br /></span>;
//                     }
//                     return <div key={index}>{line}<br /></div>;
//                 })}
//             </div>
//         );
//     };

//     const appendMessage = (sender, message) => {
//         setMessages((prevMessages) => [...prevMessages, { sender, message }]);
//     };

//     const handleCloseChat = () => {
//         handleDrawerClose();
//     };

//     return (
//         <div>
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleDrawerOpen}
//                 sx={{
//                     borderRadius: '1rem',
//                     background: '#FFB400',
//                     color: 'black',
//                     '&:hover': { background: '#FFB400' },
//                     gap: '0.4rem',
//                     minWidth: '100px',
//                     height: '3rem',
//                     display: 'flex',
//                     alignItems: 'center',
//                     position: 'relative',
//                     bottom: '1.5rem',
//                     marginLeft: 'auto',
//                     marginRight: '3.5rem',
//                     justifyContent: 'flex-end',
//                     flexDirection: 'row-reverse',
//                     '@media (min-width:600px)': {
//                         flexDirection: 'row',
//                     },
//                 }}
//             >
//                 <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>Chat</Typography>
//                 <SmartToyOutlinedIcon
//                     sx={{
//                         fontSize: '1.5rem',
//                         borderRadius: '50%',
//                         cursor: 'pointer',
//                         margin: 'auto',
//                     }}
//                 />
//             </Button>
//             <Drawer
//                 anchor="right"
//                 open={isOpen}
//                 onClose={handleDrawerClose}
//                 sx={{
//                     '& .MuiDrawer-paper': {
//                         top: 'auto',
//                         left: 'auto',
//                         right: 0,
//                         bottom: 0,
//                         maxHeight: '130%',
//                         maxWidth: '100%',
//                         width: '23rem',
//                         borderTopLeftRadius: '20px',
//                         borderTopRightRadius: '20px',
//                         transition: 'transform 0.3s ease-in-out',
//                         transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
//                     },
//                 }}
//             >
//                 <div style={{ padding: '8px', borderBottom: '2px black solid' }}>
//                     <Button
//                         color="secondary"
//                         style={{ background: 'red' }}
//                         onClick={handleCloseChat}
//                     >
//                         <CloseIcon style={{ color: 'white' }} />
//                     </Button>
//                 </div>
//                 <div style={{ overflowY: 'auto', maxHeight: '100%' }}>
//                     <List>
//                         {messages.map((message, index) => (
//                             <ListItem key={index} style={{ justifyContent: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end', gap: '15px' }}>
//                                 <div
//                                     style={{
//                                         background: message.sender === 'You' ? '#F4CB69' : '#F5F5F5',
//                                         color: message.sender === 'You' ? 'black' : 'black',
//                                         borderRadius: '8px',
//                                         fontWeight: '400',
//                                         padding: '8px',
//                                         maxWidth: '80%',
//                                         wordWrap: 'break-word',
//                                         alignSelf: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end',
//                                         display: 'flex',
//                                         alignItems: 'flex-start',
//                                         gap: '1rem',
//                                         fontSize: '14px',
//                                         flexWrap: 'nowrap',
//                                     }}
//                                 >
//                                     {message.sender === 'ChatBot' && <BotIcon />}
//                                     {message.message}
//                                     {message.sender === 'You' && <UserIcon />}
//                                 </div>
//                             </ListItem>
//                         ))}
//                         {isBotTyping && (
//                             <ListItem style={{ justifyContent: 'flex-start', gap: '15px' }}>
//                                 <div
//                                     style={{
//                                         background: '#F5F5F5',
//                                         color: 'black',
//                                         borderRadius: '8px',
//                                         fontWeight: '400',
//                                         padding: '8px',
//                                         maxWidth: '80%',
//                                         wordWrap: 'break-word',
//                                         alignSelf: 'flex-start',
//                                         display: 'flex',
//                                         alignItems: 'flex-start',
//                                         gap: '5px',
//                                         fontSize: '14px',
//                                         flexWrap: 'nowrap',
//                                     }}
//                                 >
//                                     <BotIcon />
//                                     <span className="dot-animation">
//                                         <span className="dot"></span>
//                                         <span className="dot"></span>
//                                         <span className="dot"></span>
//                                     </span>
//                                 </div>
//                             </ListItem>
//                         )}
//                         <div ref={messagesEndRef} />
//                     </List>
//                 </div>
//                 <div style={{ padding: '16px', marginTop: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
//                     <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
//                         <TextField
//                             label="Type a message"
//                             variant="outlined"
//                             fullWidth
//                             value={inputMessage}
//                             onChange={(e) => setInputMessage(e.target.value)}
//                         />
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             disabled={!inputMessage.trim() || sendingMessage}
//                         >
//                             <SendIcon />
//                         </Button>
//                     </form>
//                     {sendingMessage && (
//                         <Typography variant="body2" color="textSecondary" align="left">
//                             Sending message...
//                         </Typography>
//                     )}
//                 </div>
//             </Drawer>
//         </div>
//     );
// };

// export default ChatApp;

import React, { useState, useEffect, useRef } from 'react';
import { List, ListItem, TextField, Button, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CloseIcon from '@mui/icons-material/Close';
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
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [sendingMessage, setSendingMessage] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleOpenChat = () => {
        setIsOpen(true);
    };

    const handleCloseChat = () => {
        setIsOpen(false);
    };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {
    //         appendMessage('You', userMessage);
    //         setInputMessage('');
    //         setSendingMessage(true);
    //         setIsBotTyping(true);

    //         try {
    //             const response = await axios.post('/api/proxy', {
    //                 method: 'POST',
    //                 body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: userMessage } },
    //             });

    //             // const botMessage = response.data.response;
    //             // appendMessage('ChatBot', botMessage);
    //             const { data } = response;
    //             // console.log('Response data:', data);
    //             const formattedResponse = formatResponse(data.response);
    //             appendMessage('ChatBot', formattedResponse);
    //             setIsBotTyping(false);
    //             setInputMessage('');
    //         } catch (error) {
    //             console.error("Error:", error);
    //             Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
    //         } finally {
    //             setSendingMessage(false);
    //         }
    //     }
    // };

    const handleSendMessage = async (e) => {
        e.preventDefault();
    
        const userMessage = inputMessage.trim();
    
        if (userMessage !== '') {
            appendMessage('You', userMessage);
            setInputMessage('');
            setSendingMessage(true);
            setIsBotTyping(true);
    
            try {
                const response = await axios.post('/api/proxy', {
                    method: 'POST',
                    body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: userMessage } },
                });
    
                const { data } = response;
                const formattedResponse = formatResponse(data.response);
                appendMessage('ChatBot', formattedResponse);
            } catch (error) {
                console.error("Error:", error);
                Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
            } finally {
                setIsBotTyping(false); // Stop typing indicator after response
                setSendingMessage(false);
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

    return (
        <div style={{ position: 'fixed', bottom: '26px', right: '18px', zIndex: 1 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenChat}
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

            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '10px',
                        right: '10px',
                        width: '23rem',
                        height: '35rem',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <div style={{ padding: '8px', borderBottom: '2px black solid', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            color="secondary"
                            style={{ background: 'red' }}
                            onClick={handleCloseChat}
                        >
                            <CloseIcon style={{ color: 'white' }} />
                        </Button>
                    </div>
                    <div style={{ overflowY: 'auto', flexGrow: '1' }}>
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
                                onChange={(e) => setInputMessage(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!inputMessage.trim() || sendingMessage}
                            >
                                <SendIcon />
                            </Button>
                        </form>
                        {sendingMessage && (
                            <Typography variant="body2" color="textSecondary" align="left">
                                ...
                            </Typography>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatApp;
