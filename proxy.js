const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors());

app.get('/stock', async (req, res) => {
    try {
        const response = await fetch('https://query1.finance.yahoo.com/v7/finance/quote?symbols=TATASTEEL.NS');
        const data = await response.json();
        const price = data.quoteResponse.result[0].regularMarketPrice;
        res.json({ regularMarketPrice: price });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch stock price" });
    }
});

// Force HTTP server instead of HTTPS
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
    console.log(`HTTP Proxy running on port ${PORT}`);
});
