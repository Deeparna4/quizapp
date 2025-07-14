
const express = require('express');
const router = express.Router();
const { getAllChapters, addChapter } = require('../controllers/chapter.controller');
const { protect } = require('../middleware/auth.middleware');


router.get('/', getAllChapters);


router.post('/', protect, addChapter);

module.exports = router;
