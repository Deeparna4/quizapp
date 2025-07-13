// server/routes/quiz.routes.js

const express = require('express');
const router = express.Router();
const {
  getQuizByChapter,
  submitQuiz,
} = require('../controllers/quiz.controller');
const { protect } = require('../middleware/auth.middleware');

// Public route - get quiz questions for a chapter
router.get('/:chapterNumber', getQuizByChapter);

// Protected route - submit answers and get score
router.post('/:chapterNumber/submit', protect, submitQuiz);

module.exports = router;
