// // import React from 'react'
// // import ChatApp from '../components/ChatApp/ChatApp'

// // export default function Chatbot() {
    // //   return (
        // //     <>
        // //     <ChatApp />
        // //     </>
        // //   )
        // // }
        // import React, { useState } from 'react';
        // import Chat from '../components/ChatApp/ChatApp';
        // import Sidebar from '../components/ChatApp/Sidebar';
        
        // export default function Chatbot() {
            //   const [chats, setChats] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);

//   const handleNewChat = () => {
    //     const newChat = {
        //       id: chats.length + 1,
//       messages: [{ text: 'Welcome to the chat!', sender: 'bot' }],
//     };
//     setChats([...chats, newChat]);
//     setCurrentChat(newChat);
//   };

//   const handleSelectChat = (chat) => {
    //     setCurrentChat(chat);
    //   };
    
//   return (
    //     <div className="container-fluid h-100">
    //       <div className="row h-100">
//         <div className="col-3 p-0">
//           <Sidebar chats={chats} onSelectChat={handleSelectChat} onNewChat={handleNewChat} />
//         </div>
//         <div className="col-9 p-0">
//           {currentChat && <Chat chat={currentChat} setChats={setChats} />}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import ChatApp from '../components/ChatApp/ChatApp'

export default function chatbot() {
    return (
        <>
       <ChatApp />
        </>
    )
}

