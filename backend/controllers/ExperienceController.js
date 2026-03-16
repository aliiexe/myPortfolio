import Experience from "../models/Experience.js";

export const getAllExperiences = async (_req, res) => {
  try {
    const experiences = await Experience.find().lean();
    res.status(200).json(experiences);
  } catch (err) {
    console.error("getAllExperiences error:", err);
    res.status(500).json({ error: "Failed to fetch experiences." });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id).lean();
    if (!experience) {
      return res.status(404).json({ error: "Experience not found." });
    }
    res.status(200).json(experience);
  } catch (err) {
    console.error("getExperienceById error:", err);
    res.status(500).json({ error: "Failed to fetch experience." });
  }
};
