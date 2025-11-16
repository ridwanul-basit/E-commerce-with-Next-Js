import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    asset_id: {
      type: String,
      required: true,
      trim: true
    },
    public_id: {
      type: String,
      required: true,
      trim: true
    },
    path: {
      type: String,
      required: true,
      trim: true
    },
    thumbnail_url: {
      type: String,
      required: true,
      trim: true
    },
    alt: {
      type: String,
      trim: true
    },
    title: {
      type: String,
      trim: true
    },
    deletedAt: {
      type: Date,
      required:null,
      index:true
    },
  },
  { timestamps: true }
);

// TTL index to auto-delete expired OTPs
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const MediaModel = mongoose.models.Meida || mongoose.model("Media", mediaSchema, "medias");

export default MediaModel;
