import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
    const { title } = req.query;
    if (!title) return res.status(400).json({ error: "Missing movie title" });

    const apiKey = process.env.OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            return res.status(404).json({ error: data.Error });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch from OMDB" });
    }
});

export default router;