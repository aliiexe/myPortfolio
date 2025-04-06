import Review from "../models/Review.js";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { name, email, content, rating, image } = req.body;

    // Validate required fields
    if (!name || !email || !content || !rating) {
      return res.status(400).json({ message: "All fields except image are required." });
    }

    // Create and save the review
    const review = new Review({ name, email, content, rating, image });
    await review.save();

    res.status(201).json({ message: "Review created successfully.", review });
  } catch (error) {
    res.status(500).json({ message: "Failed to create review.", error: error.message });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews.", error: error.message });
  }
};

// Get approved reviews
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ approved: "approved" }).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch approved reviews.", error: error.message });
  }
};

// Approve or reject a review
export const updateReviewStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { approved } = req.body;

    // Validate the approved field
    if (!["approved", "rejected", "pending"].includes(approved)) {
      return res.status(400).json({ message: "Invalid status value." });
    }

    const review = await Review.findByIdAndUpdate(
      id,
      { approved },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found." });
    }

    res.status(200).json({ message: "Review status updated successfully.", review });
  } catch (error) {
    res.status(500).json({ message: "Failed to update review status.", error: error.message });
  }
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the review
    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found." });
    }

    res.status(200).json({ message: "Review deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review.", error: error.message });
  }
};