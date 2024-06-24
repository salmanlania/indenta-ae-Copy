// 'use client'
// import React from 'react';

// const ChatApp = () => {
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
//         </div>
//         <div className="p-4 bg-white border-top d-flex align-items-center">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             className="form-control flex-grow-1"
//           />
//           <button className="btn btn-primary ms-2">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
'use client'
import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { sender: 'user', text: inputValue }];
      setMessages(newMessages);
      setInputValue('');
      setTimeout(() => {
        setMessages([...newMessages, { sender: 'bot', text: 'Thanks!' }]);
      }, 500);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
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
