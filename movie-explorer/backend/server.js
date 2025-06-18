import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movie.js";

dotenv.config();

const app = express();
app.use(cors());

app.use("/api/movie", movieRoutes);

app.listen(5001, () => {
    console.log("Backend running on http://localhost:5001");
});