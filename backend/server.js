import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/ProjectRoutes.js";
import experienceRoutes from "./routes/ExperienceRoutes.js";
import reviewRoutes from "./routes/ReviewRoutes.js";
import uploadRoutes from "./routes/UploadRoutes.js";

// dotenv.config();

// const app = express();

// const allowedOrigins = ["http://localhost:3000", "https://alibourak.com"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());

dotenv.config();

// MongoDB connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MONGO_URI is not defined. Please set it in the environment variables.");
  process.exit(1); 
}

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.use("/projects", projectRoutes);
app.use("/experiences", experienceRoutes);
app.use("/reviews", reviewRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));