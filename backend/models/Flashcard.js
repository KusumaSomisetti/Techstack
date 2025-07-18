const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  tag: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // 🔐 Link to user
}, { timestamps: true });

module.exports = mongoose.model("Flashcard", flashcardSchema);
