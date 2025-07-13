// server/models/Quiz.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // array of 4 options
    required: true,
  },
  correctAnswerIndex: {
    type: Number, // index (0-3) of the correct option
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  chapterNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: {
    type: [questionSchema], // array of 5 questions
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
