import express from "express";
import {
  getAllExperiences,
  getExperienceById,
} from "../controllers/ExperienceController.js";

const router = express.Router();

router.get("/", getAllExperiences);
router.get("/:id", getExperienceById);

export default router;
