import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  link: { type: String, required: false },
  images: { type: [String], required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false }, // indicates if the project is featured which means that it will be shown in the home page
  category: { type: String, required: false },
  projectType: { type: String, enum: ["personal", "freelance", "design"], required: true },
  clientName: { type: String, required: false },
  tools: { type: [String], required: false },
});

export default mongoose.model("Project", ProjectSchema);