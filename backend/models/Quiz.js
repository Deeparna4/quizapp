
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String], 
    required: true,
  },
  correctAnswerIndex: {
    type: Number, 
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
    type: [questionSchema], 
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
