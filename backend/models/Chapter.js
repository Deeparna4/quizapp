// server/models/Chapter.js

const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Chapter', chapterSchema);
