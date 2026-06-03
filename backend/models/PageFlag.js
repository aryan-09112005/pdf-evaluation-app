const mongoose = require("mongoose");

const pageFlagSchema = new mongoose.Schema(
  {
    documentId: {
      type: String,
      required: true,
    },
    pageNumber: {
      type: Number,
      required: true,
    },
    issueType: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Flagged",
    },
    createdBy: {
      type: String,
      default: "Evaluator",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PageFlag", pageFlagSchema);