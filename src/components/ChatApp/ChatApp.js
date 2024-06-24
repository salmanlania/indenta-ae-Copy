// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false); // State for indicating sending message

//   const handleSend = async () => {
//     if (inputValue.trim()) {
//       const newMessages = [...messages, { sender: 'user', text: inputValue }];
//       setMessages(newMessages);
//       setInputValue('');
//       setSendingMessage(true); // Start sending message indicator

//       try {
//         const response = await axios.post('/api/proxy', {
//           method: 'POST',
//           body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: inputValue } },
//         });

//         const botMessage = response.data.reply; // Assuming your API returns 'reply'
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
//       } catch (error) {
//         console.error('Error sending message:', error);
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error receiving message' }]);
//       } finally {
//         setSendingMessage(false); // Stop sending message indicator
//       }
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSend();
//     }
//   };

//   // Function to generate dancing dots text
//   const generateDancingDots = () => {
//     const dots = ['.', '..', '...'];
//     return dots[Math.floor(Math.random() * dots.length)];
//   };

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="d-flex flex-column flex-grow-1">
//         <div className="p-4 bg-white border-bottom d-flex align-items-center">
//           <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
//           <div className="ms-3">
//             <div className="fw-semibold">John Doe</div>
//             <div className="text-muted small">Active now</div>
//           </div>
//         </div>
//         <div className="flex-grow-1 p-4 overflow-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}>
//               <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light border'}`}>
//                 {message.text}
//               </div>
//             </div>
//           ))}
//           {/* Text indicator for sending message */}
//           {sendingMessage && (
//             <div className="text-muted text-center mt-2">
//               Sending message{generateDancingDots()}
//             </div>
//           )}
//         </div>
//         <div className="p-4 bg-white border-top d-flex align-items-center">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             className="form-control flex-grow-1"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button className="btn btn-primary ms-2" onClick={handleSend}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [sendingMessage, setSendingMessage] = useState(false); // State for indicating sending message

//   const handleSend = async () => {
//     if (inputValue.trim()) {
//       const newMessages = [...messages, { sender: 'user', text: inputValue }];
//       setMessages(newMessages);
//       setInputValue('');
//       setSendingMessage(true); // Start sending message indicator

//       try {
//         const response = await axios.post('/api/proxy', {
//           method: 'POST',
//           body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: inputValue } },
//         });

//         const botMessage = response.data.response; // Accessing 'response' field from API
//         console.log('botMessage--->', response);
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
//       } catch (error) {
//         console.error('Error sending message:', error);
//         setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error receiving message' }]);
//       } finally {
//         setSendingMessage(false); // Stop sending message indicator
//       }
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleSend();
//     }
//   };

//   // Function to generate dancing dots text
//   const generateDancingDots = () => {
//     const dots = ['.', '..', '...'];
//     return dots[Math.floor(Math.random() * dots.length)];
//   };

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="d-flex flex-column flex-grow-1">
//         <div className="p-4 bg-white border-bottom d-flex align-items-center">
//           <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
//           <div className="ms-3">
//             <div className="fw-semibold">John Doe</div>
//             <div className="text-muted small">Active now</div>
//           </div>
//         </div>
//         <div className="flex-grow-1 p-4 overflow-auto">
//           {messages.map((message, index) => (
//             <div key={index} className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}>
//               <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light border'}`}>
//                 {message.text}
//               </div>
//             </div>
//           ))}
//           {/* Text indicator for sending message */}
//           {sendingMessage && (
//             <div className="text-muted text-center mt-2">
//               Sending message{generateDancingDots()}
//             </div>
//           )}
//         </div>
//         <div className="p-4 bg-white border-top d-flex align-items-center">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             className="form-control flex-grow-1"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button className="btn btn-primary ms-2" onClick={handleSend}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;

import React, { useState } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSend = async () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { sender: 'user', text: inputValue }];
      setMessages(newMessages);
      setInputValue('');
      setSendingMessage(true);

      try {
        const response = await axios.post('/api/proxy', {
          method: 'POST',
          body: { url: 'https://zohan123.pythonanywhere.com/chat/', data: { message: inputValue } },
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

  return (
    <div className="d-flex vh-100 bg-light">
      <div className="d-flex flex-column flex-grow-1">
        <div className="p-4 bg-white border-bottom d-flex align-items-center">
          <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
          <div className="ms-3">
            <div className="fw-semibold">John Doe</div>
            <div className="text-muted small">Active now</div>
          </div>
        </div>
        <div className="flex-grow-1 p-4 overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : ''} mb-3`}>
              <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light border'}`}>
                {message.text}
              </div>
            </div>
          ))}
          {sendingMessage && (
            <div className="text-muted text-center mt-2">
              Sending message{generateDancingDots()}
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
          />
          <button className="btn btn-primary ms-2" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;