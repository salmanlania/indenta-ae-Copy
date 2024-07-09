import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { method = 'POST', url, data } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      console.log('Forwarding request to:', url);
      console.log('Request method:', method);
      console.log('Request data:', data);

      const response = await axios.request({
        method,
        url,
        data,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      console.log('Received response:', response.data);

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error('Error proxying request:', error);
      const status = error.response?.status || 500;
      const message = error.response?.data || { error: error.message };
      res.status(status).json(message);
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
