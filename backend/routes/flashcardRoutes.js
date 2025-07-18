const express = require("express");
const router = express.Router();
const { createFlashcard, getFlashcards } = require("../controllers/flashcardController");
const authMiddleware = require("../middleware/auth");

router.post("/flashcards", authMiddleware, createFlashcard);
router.get("/flashcards", authMiddleware, getFlashcards);

module.exports = router;
