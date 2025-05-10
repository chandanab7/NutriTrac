
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/nutrition', async (req, res) => {
    const { food } = req.body;
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/guessNutrition?title=${encodeURIComponent(food)}&apiKey=${process.env.SPOONACULAR_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch nutrition data' });
    }
});

app.listen(port, () => {
    console.log(`NutriTrack backend running on port ${port}`);
});
