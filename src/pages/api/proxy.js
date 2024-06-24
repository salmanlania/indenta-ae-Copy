// pages/api/proxy.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { method, body } = req.body;
    const { url, data } = body;

    try {
      const response = await axios.request({
        method,
        url,
        data,
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error('Error proxying request:', error);
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
