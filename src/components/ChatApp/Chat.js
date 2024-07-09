import React, { useState } from 'react';

const Chatbot = () => {
  const [email, setEmail] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleInitSession = async () => {
    setError('');
    setResponse('');
    try {
      const res = await fetch('http://chat.indenta.ai:8000/init-session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Origin': 'https://indenta.ae'
        },
        body: JSON.stringify({ email })
      });
      if (!res.ok) {
        throw new Error('Failed to initialize session');
      }
      const data = await res.json();
      setSessionId(data.session_id);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSendMessage = async () => {
    setError('');
    setResponse('');
    try {
      const res = await fetch('http://chat.indenta.ai:8000/message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://indenta.ae'
        },
        body: JSON.stringify({ session_id: sessionId, message })
      });
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div>
        <h2>Initialize Session</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleInitSession}>Start Session</button>
      </div>
      {sessionId && (
        <div>
          <h2>Send Message</h2>
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      )}
      {response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;