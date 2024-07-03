// // // pages/api/proxy.js

// // import axios from 'axios';

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { method, body } = req.body;
// //     const { url, data } = body;

// //     try {
// //       const response = await axios.request({
// //         method,
// //         url,
// //         data,
// //       });

// //       res.status(response.status).json(response.data);
// //     } catch (error) {
// //       console.error('Error proxying request:', error);
// //       res.status(error.response?.status || 500).json({ error: error.message });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method Not Allowed' });
// //   }
// // }

// // pages/api/proxy.js

// // import axios from 'axios';

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     try {
// //       const { url, data } = req.body;  // Directly destructuring req.body

// //       const response = await axios.request({
// //         method: 'POST',  // Assuming POST method for proxy request
// //         url,
// //         data,
// //       });

// //       res.status(response.status).json(response.data);
// //     } catch (error) {
// //       console.error('Error proxying request:', error);
// //       res.status(error.response?.status || 500).json({ error: error.message });
// //     }
// //   } else {
// //     res.status(405).json({ error: 'Method Not Allowed' });
// //   }
// // }

// // pages/api/proxy.js

// import axios from 'axios';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       console.log('Incoming request body:', req.body);  // Log incoming request body

//       const { url, data } = req.body;

//       const response = await axios.request({
//         method: 'POST',  // Assuming POST method for proxy request
//         url,
//         data,
//       });

//       res.status(response.status).json(response.data);
//     } catch (error) {
//       console.error('Error proxying request:', error);
//       res.status(error.response?.status || 500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

// pages/api/proxy.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { method, body } = req.body;
    const { url, data } = body;

    try {
      console.log('Forwarding request to:', url);
      console.log('Request method:', method);
      console.log('Request data:', data);

      const response = await axios.request({
        method: method || 'POST',
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
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}