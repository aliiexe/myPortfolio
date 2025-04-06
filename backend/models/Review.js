import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
    approved: {
        type: String,
        required: true,
        default: "pending",
        enum: ["pending", "approved", "rejected"],
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.model("Review", ReviewSchema);