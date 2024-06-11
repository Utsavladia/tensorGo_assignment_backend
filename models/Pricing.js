const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  profile: String,
  name: String,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pricing", feedbackSchema);
