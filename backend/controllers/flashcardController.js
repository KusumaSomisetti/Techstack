const Flashcard = require("../models/Flashcard");

// ➕ Create Flashcard
exports.createFlashcard = async (req, res) => {
  try {
    const { question, answer, tag } = req.body;
    const newCard = new Flashcard({
      question,
      answer,
      tag,
      userId: req.userId, // from auth middleware
    });
    const saved = await newCard.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create flashcard" });
  }
};

// 📥 Get All Flashcards for User
exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ userId: req.userId });
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ error: "Failed to get flashcards" });
  }
};
