// server/controllers/chapter.controller.js

const Chapter = require('../models/Chapter');

// @desc    Get all chapters
// @route   GET /api/chapters
// @access  Public
const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().sort({ number: 1 });
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch chapters', error: error.message });
  }
};

// @desc    Add a new chapter (useful for seeding or admin panel)
// @route   POST /api/chapters
// @access  Protected (optional)
const addChapter = async (req, res) => {
  const { number, title, description } = req.body;

  try {
    const existing = await Chapter.findOne({ number });
    if (existing) {
      return res.status(400).json({ message: 'Chapter already exists' });
    }

    const newChapter = await Chapter.create({ number, title, description });
    res.status(201).json(newChapter);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add chapter', error: error.message });
  }
};

module.exports = {
  getAllChapters,
  addChapter,
};
