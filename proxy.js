const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for fetching stock data
app.get("/stock", async (req, res) => {
    try {
        const response = await axios.get(
            "https://query1.finance.yahoo.com/v8/finance/chart/TATASTEEL.NS"
        );
        const stockData = response.data.chart.result[0].meta.regularMarketPrice;
        res.json({ regularMarketPrice: stockData });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch stock data" });
    }
});

// Root route (optional)
app.get("/", (req, res) => {
    res.send("Stock Proxy Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
