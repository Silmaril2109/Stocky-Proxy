const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;  // You can change the port if needed

app.get('/stock', async (req, res) => {
    try {
        const apiUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/TATASTEEL.NS?interval=1d';
        const response = await axios.get(apiUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
