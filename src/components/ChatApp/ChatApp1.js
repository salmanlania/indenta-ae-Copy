import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import girlchat from './images/ayesha.png';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const messagesEndRef = useRef(null);
  // const welcomeMessage = `Hello! I'm Ayesha, here to help with your questions and provide information regarding our credit card services. Let's chat!`
  const welcomeMessage = `Hello! I'm Ayesha.`
  useEffect(() => {
    // setMessages([{ sender: 'bot', text: 'Hello! I am Credit Card Service provider. How can I assist you?' }]);
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    setMessages([{ sender: 'bot', text: welcomeMessage }]);
    // scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { sender: 'user', text: inputValue }];
      setMessages(newMessages);
      setInputValue('');
      setSendingMessage(true);

      try {
        const response = await axios.post('/api/proxy', {
          method: 'POST',
          body: { url: 'http://chat.indenta.ai:8000/chat/', data: { message: inputValue } },
          // body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: inputValue } },
        });

        const botMessage = response.data.response;
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error receiving message' }]);
      } finally {
        setSendingMessage(false);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const generateDancingDots = () => {
    const dots = ['.', '..', '...'];
    return dots[Math.floor(Math.random() * dots.length)];
  };

  const handleDoubleClick = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
  };

  return (
    <>
      {/* <Header3 />
      <br />
      <br /> */}
      <div style={{ height: '100vh' }} className="d-flex bg-light">
        <div className="d-flex flex-column flex-grow-1">
          <div className="p-3 bg-white border-bottom d-flex align-items-center" style={{position : 'fixed' , width : '100%'}}>
            <Image src={girlchat} alt="Bot" width={60} height={60} style={{ borderRadius: '50%' }} />
            <div className="ms-3">
              <div className="fw-semibold">Ayesha</div>
              <div className="text-muted small" style={{display : 'inline-block'}}>
                <span style={{height: '15px', width : '15px', backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', marginTop: '2.6px', marginRight : '2px'}}></span>
                <span>Active Now</span>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 p-4 overflow-auto" style={{marginTop : '5rem'}}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}
                style={{
                  marginLeft: message.sender === 'user' ? 'auto' : '0',
                  width: '50%',
                }}
              >
                <div
                  className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light border'} `}
                  onDoubleClick={() => message.sender === 'bot' && handleDoubleClick(message.text)}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            {sendingMessage && (
              <div className="text-muted mt-2" style={{ marginRight: 'auto' }}>
                typing{generateDancingDots()}
              </div>
            )}
          </div>
          <div className="p-4 bg-white border-top d-flex align-items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="form-control flex-grow-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={sendingMessage} // Disable input if sendingMessage is true
            />
            <button className="btn btn-primary ms-2" onClick={handleSend} disabled={sendingMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
