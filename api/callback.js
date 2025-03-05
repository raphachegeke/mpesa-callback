require('dotenv').config();

module.exports = (req, res) => {
    if (req.method === "POST") {
        console.log("M-Pesa Callback Received:", req.body);
        return res.status(200).json({ message: "Callback received successfully" });
    }
    return res.status(405).json({ error: "Method Not Allowed" });
};
