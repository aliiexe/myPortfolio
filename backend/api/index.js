import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import projectRoutes from "../routes/ProjectRoutes.js";
import experienceRoutes from "../routes/ExperienceRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("API Running"));
app.use("/projects", projectRoutes);
app.use("/experiences", experienceRoutes);

export default app;