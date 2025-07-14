

const User = require('../models/User');


const getUserScores = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('name scores');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      name: user.name,
      scores: user.scores.sort((a, b) => a.chapter - b.chapter), 
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch scores', error: error.message });
  }
};

module.exports = { getUserScores };
