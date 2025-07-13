// server/routes/chapter.routes.js

const express = require('express');
const router = express.Router();
const { getAllChapters, addChapter } = require('../controllers/chapter.controller');
const { protect } = require('../middleware/auth.middleware');

// Public route - get all chapters
router.get('/', getAllChapters);

// Protected route - add chapter (optional, could be for admin use)
router.post('/', protect, addChapter);

module.exports = router;
