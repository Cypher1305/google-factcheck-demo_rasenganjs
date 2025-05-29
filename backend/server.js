require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'https://google-factcheck-demo-rasenganjs.vercel.app' //Supprime cette ligne en local
}));

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CX_ID = process.env.GOOGLE_CX_ID;

app.get('/api/search', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX_ID}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Search API error' });
    }
});

app.get('/api/factcheck', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(
            `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Fact Check API error' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
