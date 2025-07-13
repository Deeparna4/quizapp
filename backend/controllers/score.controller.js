// server/controllers/score.controller.js

const User = require('../models/User');

// @desc    Get user's quiz scores
// @route   GET /api/score
// @access  Protected
const getUserScores = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('name scores');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      name: user.name,
      scores: user.scores.sort((a, b) => a.chapter - b.chapter), // sorted by chapter
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch scores', error: error.message });
  }
};

module.exports = { getUserScores };
