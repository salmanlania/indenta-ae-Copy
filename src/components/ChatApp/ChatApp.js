// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import girlchat from './images/ayesha.png';
// import Image from 'next/image';
// import SendIcon from '@mui/icons-material/Send';
// import ReactMarkDown from 'react-markdown';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const messagesEndRef = useRef(null);
//   const welcomeMessage = `Hello! I'm Ayesha.,<br><br>As a valued customer, we are eager to inform you about a special credit offer exclusively for you. We are proposing an opportunity to enhance your purchasing power and enjoy a more flexible shopping experience.<br>Here are the details of your special credit offer:<br><br><b style="font-size : 16px ">•</b> Credit Limit: Up to 4 Multiple of your salary
//   <br><b style="font-size : 16px ">•</b> NO Interest % on BT and EPP<br><b style="font-size : 16px ">•</b> Airport lounge access for you through Lounge Key<br><b style="font-size : 16px ">•</b> Access to a digital concierge channel in addition to telephone and email service<br><b style="font-size : 16px ">•</b> 50% off on movie tickets at Novo, Reel & VOX cinemas<br><b style="font-size : 16px ">•</b> Complimentary valet parking service across 30 locations<br><b style="font-size : 16px ">•</b> Spend AED 500 for an entry into the lucky draw of AED 100,000 every week!<br><b style="font-size : 16px ">•</b> No annual fees on Credit cards<br><br>We are here to help and ensure that you have a seamless experience.<br>Thank you for being a valued customer. We look forward to continuing to serve you and providing you with the best possible service.
// `;

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     setMessages([{ sender: 'bot', text: welcomeMessage }]);
//   }, []);

//   const formatResponse = (response) => {
//     return response.split('\n').map((line, index) => {
//       if (line.match(/^(?:\d+|abc|\u2022|-)/)) {
//         return `<br />${line}`;
//       }
//       return `${line}<br />`;
//     }).join('');
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleSend = async () => {
//     if (inputValue.trim()) {
//       const newMessages = [...messages, { sender: 'user', text: inputValue }];
//       setMessages(newMessages);
//       setInputValue('');
//       setSendingMessage(true);

//       try {
//         // const response = await axios.post('/api/proxy', {
//         //   method: 'POST',
//         //   // body: { url: 'http://chat.indenta.ai:8000/chat/', data: { message: inputValue } },
//         //   body: { url: 'zohan123.pythonanywhere.com/chat/', data: { message: inputValue }, },
//         // });

//         // let botMessage = response.data.response;
//         const response = await axios.post('/api/proxy', {
//           method: 'POST',
//           body: {
//             url: 'http://chat.indenta.ai:8000/chat/',
//             // url: 'http://zohan123.pythonanywhere.com/chat/',
//             data: { message: inputValue },
//           },
//         }, {
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//         });

//         let botMessage = response.data.response;
//         const formattedBotMessage = formatResponse(botMessage);

//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: formattedBotMessage }]);
//       } catch (error) {
//         console.error('Error sending message:', error);
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Something went wrong try again later!' }]);
//       } finally {
//         setSendingMessage(false);
//       }
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSend();
//     }
//   };

//   const generateDancingDots = () => {
//     const dots = ['.', '..', '...'];
//     return dots[Math.floor(Math.random() * dots.length)];
//   };

//   return (
//     <>
//       <div style={{ height: '100vh' }} className="d-flex bg-light">
//         <div className="d-flex flex-column flex-grow-1">
//           <div className="p-3 bg-white border-bottom d-flex align-items-center" style={{ position: 'fixed', width: '100%' }}>
//             <Image src={girlchat} alt="Bot" width={60} height={60} style={{ borderRadius: '50%' }} />
//             <div className="ms-3">
//               <div className="fw-semibold">Ayesha</div>
//               <div className="text-muted small" style={{ display: 'inline-block' }}>
//                 <span style={{ height: '15px', width: '15px', backgroundColor: 'green', borderRadius: '50%', display: 'inline-block', marginTop: '2.6px', marginRight: '2px' }}></span>
//                 <span>Active Now</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex-grow-1 p-4 overflow-auto" style={{ marginTop: '5rem' }}>
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}
//                 style={{
//                   marginLeft: message.sender === 'user' ? 'auto' : '0',
//                   width: '50%',
//                 }}
//               >
//                 {message.sender === 'bot' ? (
//                   <div
//                     className={`p-2 rounded bg-light border`}
//                     // onDoubleClick={() => handleDoubleClick(message.text)}
//                     dangerouslySetInnerHTML={{ __html: message.text }}
//                   />
//                 ) : (
//                   <div
//                     className={`p-2 rounded bg-primary text-white`}
//                   >
//                     {message.text}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//             {sendingMessage && (
//               <div className="text-muted mt-2" style={{ marginRight: 'auto' }}>
//                 typing{generateDancingDots()}
//               </div>
//             )}
//           </div>
//           <div className="p-4 bg-white border-top d-flex align-items-center">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               className="form-control flex-grow-1"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyPress={handleKeyPress}
//               disabled={sendingMessage}
//             />
//             <button className="btn btn-primary ms-2" onClick={handleSend} disabled={sendingMessage}>
//               <SendIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatApp;
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
  const welcomeMessage = `Hello! I'm Ayesha.,<br><br>As a valued customer, we are eager to inform you about a special credit offer exclusively for you. We are proposing an opportunity to enhance your purchasing power and enjoy a more flexible shopping experience.<br>Here are the details of your special credit offer:<br><br><b style="font-size : 16px ">•</b> Credit Limit: Up to 4 Multiple of your salary
  <br><b style="font-size : 16px ">•</b> NO Interest % on BT and EPP<br><b style="font-size : 16px ">•</b> Airport lounge access for you through Lounge Key<br><b style="font-size : 16px ">•</b> Access to a digital concierge channel in addition to telephone and email service<br><b style="font-size : 16px ">•</b> 50% off on movie tickets at Novo, Reel & VOX cinemas<br><b style="font-size : 16px ">•</b> Complimentary valet parking service across 30 locations<br><b style="font-size : 16px ">•</b> Spend AED 500 for an entry into the lucky draw of AED 100,000 every week!<br><b style="font-size : 16px ">•</b> No annual fees on Credit cards<br><br>We are here to help and ensure that you have a seamless experience.<br>Thank you for being a valued customer. We look forward to continuing to serve you and providing you with the best possible service.
`;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: welcomeMessage }]);
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
          body: {
            url: 'http://chat.indenta.ai:8000/chat/',
            data: { message: inputValue },
          },
        }, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        let botMessage = response.data.response;
        // const formattedBotMessage = formatResponse(botMessage);

        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Something went wrong try again later!' }]);
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

  // Formatting function to add <br /> before specific patterns
  const formatResponse = (response) => {
    return response.split('\n').map((line, index) => {
      if (line.match(/^(step|\d+\.|abc|•|-)/i)) {
        return `<br />${line}`;
      }
      return `${line}<br />`;
    }).join('');
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