// pages/api/messages.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
      // Simulate a response from a bot
      res.status(200).json({ reply: `Echo: ${message}` });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  