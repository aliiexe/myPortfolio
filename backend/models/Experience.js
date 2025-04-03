import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: true },
  technologies: { type: [String], required: false },
  isCurrent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Experience", ExperienceSchema);