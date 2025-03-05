require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// M-Pesa Callback URL
app.post('/mpesa/callback', (req, res) => {
    console.log("M-Pesa Callback Received:", req.body);

    // Process the response here (e.g., save it to a database or log it)
    
    res.status(200).json({ message: "Callback received successfully" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
