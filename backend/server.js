import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/ProjectRoutes.js";
import experienceRoutes from "./routes/ExperienceRoutes.js";
import reviewRoutes from "./routes/ReviewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MONGO_URI is not defined. Please set it in the environment variables.");
  process.exit(1); 
}

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => res.send("API Running"));
app.use("/projects", projectRoutes);
app.use("/experiences", experienceRoutes);
app.use("/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));