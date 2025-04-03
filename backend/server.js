import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import projectRoutes from "./routes/ProjectRoutes.js";
import experienceRoutes from "./routes/ExperienceRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.get("/", (req, res) => res.send("API Running"));
app.use("/projects", projectRoutes);
app.use("/experiences", experienceRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));