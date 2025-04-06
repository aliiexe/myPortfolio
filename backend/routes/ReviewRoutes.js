import express from "express";
import {
  createReview,
  getAllReviews,
  getApprovedReviews,
  updateReviewStatus,
  deleteReview,
} from "../controllers/ReviewController.js";

const router = express.Router();

// Route to create a new review
router.post("/", createReview);

// Route to get all reviews
router.get("/", getAllReviews);

// Route to get only approved reviews
router.get("/approved", getApprovedReviews);

// Route to update the status of a review (approve/reject)
router.patch("/:id/status", updateReviewStatus);

// Route to delete a review by ID
router.delete("/:id", deleteReview);

export default router;