import Experience from "../models/Experience.js";

// Get all experiences
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single experience by ID
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new experience
export const createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing experience
export const updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(updatedExperience);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an experience
export const deleteExperience = async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};