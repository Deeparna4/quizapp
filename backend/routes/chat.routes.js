const express = require('express');
const router = express.Router();
const { askChapterAI } = require('../controllers/chat.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/', protect, askChapterAI);

module.exports = router;
