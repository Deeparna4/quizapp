

const express = require('express');
const router = express.Router();
const {
  getQuizByChapter,
  submitQuiz,
} = require('../controllers/quiz.controller');
const { protect } = require('../middleware/auth.middleware');


router.get('/:chapterNumber', getQuizByChapter);


router.post('/:chapterNumber/submit', protect, submitQuiz);

module.exports = router;
