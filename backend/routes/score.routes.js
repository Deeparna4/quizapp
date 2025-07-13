// server/routes/score.routes.js

const express = require('express');
const router = express.Router();
const { getUserScores } = require('../controllers/score.controller');
const { protect } = require('../middleware/auth.middleware');

// Protected route - get scores for logged-in user
router.get('/', protect, getUserScores);

module.exports = router;
