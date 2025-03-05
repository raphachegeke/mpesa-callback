require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.post('/api/mpesa/callback', (req, res) => {
    console.log("M-Pesa Callback Received:", req.body);
    res.status(200).json({ message: "Callback received successfully" });
});

module.exports = app;
