import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import girlchat from './images/ayesha.png';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';

const MySwal = withReactContent(Swal);

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const messagesEndRef = useRef(null);

  // Get the image URL using the Next.js router
  const router = useRouter();
  const offerImageURL = `${router.basePath}/images/women.jpg`;

  // useEffect(() => {
  //   MySwal.fire({
  //     title: 'Welcome TO',
  //     confirmButtonText: 'Continue'
  //   });

  // }, []);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const welcomeMessage = `
      Hello! I'm Ayesha,
      <br /><br />As a valued customer, we are eager to inform you about a special credit offer exclusively for you. We are proposing an opportunity to enhance your purchasing power and enjoy a more flexible shopping experience.<br />Here are the details of your special credit offer:<br /><br /><b style="font-size : 16px ">•</b> Credit Limit: Up to 4 Multiple of your salary
      <br /><b style="font-size : 16px ">•</b> NO Interest % on BT and EPP<br /><b style="font-size : 16px ">•</b> Airport lounge access for you through Lounge Key<br /><b style="font-size : 16px ">•</b> Access to a digital concierge channel in addition to telephone and email service<br /><b style="font-size : 16px ">•</b> 50% off on movie tickets at Novo, Reel & VOX cinemas<br /><b style="font-size : 16px ">•</b> Complimentary valet parking service across 30 locations<br /><b style="font-size : 16px ">•</b> Spend AED 500 for an entry into the lucky draw of AED 100,000 every week!<br /><b style="font-size : 16px ">•</b> No annual fees on Credit cards<br /><br />
      <div class="softButtons" style="display: flex;justify-content: space-around;flex-wrap: wrap;">
        <ul style="list-style-type: disclosure-closed;font-weight : 550">
          <li id="cbdOne">CBD One</li>
          <li id="platinum">CBD Smiles Visa Platinum</li>
          <li id="signature">CBD Smiles Visa Signature</li>
          <li id="reward">CBD Yes Rewards Credit Card</li>
        </ul>
        <ul style="list-style-type: disclosure-closed;font-weight : 550">
          <li id="superSaver">Super Saver Visa Signature</li>
          <li id="visaPlatinum">Visa Platinum</li>
          <li id="infinite">Visa Infinite</li>
        </ul>
      </div>
    `;
    setMessages([{ sender: 'bot', text: welcomeMessage }]);
  }, []);

  useEffect(() => {
    const handleOkClick = (message, imageUrl) => {
      MySwal.fire({
        html: `
          <div>
            <img src="${imageUrl}" alt="Offer Image" style="width: 100%; height: auto; max-width: 400px;"/>
            <p>${message}</p>
          </div>
        `,
        confirmButtonText: 'OK'
      });
    };

    const offers = [
      { id: 'cbdOne', message: 'Details about CBD One', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'platinum', message: 'Details about CBD Smiles Visa Platinum', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'signature', message: 'Details about CBD Smiles Visa Signature', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'reward', message: 'Details about CBD Yes Rewards Credit Card', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'superSaver', message: 'Details about Super Saver Visa Signature', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'visaPlatinum', message: 'Details about Visa Platinum', imageUrl: '/assets/img/pics/S2.jpg' },
      { id: 'infinite', message: 'Details about Visa Infinite', imageUrl: '/assets/img/pics/S2.jpg' },
    ];

    offers.forEach(offer => {
      const element = document.getElementById(offer.id);
      if (element) {
        element.addEventListener('click', () => handleOkClick(offer.message, offer.imageUrl));
      }
    });

    return () => {
      offers.forEach(offer => {
        const element = document.getElementById(offer.id);
        if (element) {
          element.removeEventListener('click', () => handleOkClick(offer.message, offer.imageUrl));
        }
      });
    };
  }, [messages]);

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
          body: {
            url: 'https://zohan123.pythonanywhere.com/chat/',
            data: { message: inputValue },
          },
        }, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        let botMessage = response.data.response;
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Something went wrong, try again later!' }]);
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

  return (
    <>
      <div style={{ height: '100vh' }} className="d-flex bg-light">
        <div className="d-flex flex-column flex-grow-1">
          <div className="p-3 bg-white border-bottom d-flex align-items-center" style={{ position: 'fixed', width: '100%' }}>
            <Image src={girlchat} alt="Bot" width={60} height={60} style={{ borderRadius: '50%' }} />
            <div className="ms-3">
              <div className="fw-semibold">Ayesha</div>
              <div className="text-muted small" style={{ display: 'inline-block' }}>
                <span style={{ height: '15px', width: '15px', backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', marginTop: '2.6px', marginRight: '2px' }}></span>
                <span>Active Now</span>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 p-4 overflow-auto" style={{ marginTop: '5rem' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}
                style={{
                  marginLeft: message.sender === 'user' ? 'auto' : '0',
                  width: '50%',
                }}
              >
                {message.sender === 'bot' ? (
                  <div
                    className={`p-2 rounded bg-light border`}
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                ) : (
                  <div
                    className={`p-2 rounded bg-primary text-white`}
                  >
                    {message.text}
                  </div>
                )}
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
              disabled={sendingMessage}
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
