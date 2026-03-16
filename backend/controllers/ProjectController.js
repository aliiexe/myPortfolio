import Project from "../models/Project.js";

export const getAllProjects = async (_req, res) => {
  try {
    const projects = await Project.find().lean();
    res.status(200).json(projects);
  } catch (err) {
    console.error("getAllProjects error:", err);
    res.status(500).json({ error: "Failed to fetch projects." });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).lean();
    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }
    res.status(200).json(project);
  } catch (err) {
    console.error("getProjectById error:", err);
    res.status(500).json({ error: "Failed to fetch project." });
  }
};
