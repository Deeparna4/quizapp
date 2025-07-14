
const express = require('express');
const router = express.Router();
const { getUserScores } = require('../controllers/score.controller');
const { protect } = require('../middleware/auth.middleware');


router.get('/', protect, getUserScores);

module.exports = router;
