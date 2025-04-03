import Project from "../models/Project.js";

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().lean(); // Use lean() for better performance
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects", details: err.message });
  }
};

// Get a project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).lean();
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project", details: err.message });
  }
};

// Create a new project
export const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ error: "Failed to create project", details: err.message });
  }
};

// Update an existing project
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, // Ensure validation is applied during updates
    });
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(400).json({ error: "Failed to update project", details: err.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project", details: err.message });
  }
};