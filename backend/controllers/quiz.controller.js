

const Quiz = require('../models/Quiz');
const User = require('../models/User');


const getQuizByChapter = async (req, res) => {
  const { chapterNumber } = req.params;

  try {
    const quiz = await Quiz.findOne({ chapterNumber: parseInt(chapterNumber) });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found for this chapter' });
    }

    
    const questions = quiz.questions.map(q => ({
      questionText: q.questionText,
      options: q.options,
    }));

    res.json({ chapterNumber: quiz.chapterNumber, questions });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quiz', error: error.message });
  }
};


const submitQuiz = async (req, res) => {
  const { chapterNumber } = req.params;
  const { answers } = req.body; 
  const userId = req.user._id;

  try {
    const quiz = await Quiz.findOne({ chapterNumber: parseInt(chapterNumber) });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const correctAnswers = quiz.questions.map(q => q.correctAnswerIndex);
    let score = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
      if (answers[i] === correctAnswers[i]) score++;
    }

 
    const user = await User.findById(userId);
    const existingScore = user.scores.find(s => s.chapter === parseInt(chapterNumber));

    if (existingScore) {
      existingScore.score = score; 
    } else {
      user.scores.push({ chapter: parseInt(chapterNumber), score });
    }

    await user.save();

    
    res.json({
  message: 'Quiz submitted',
  score,
  total: correctAnswers.length,
  correctAnswers
});

  } catch (error) {
    res.status(500).json({ message: 'Failed to submit quiz', error: error.message });
  }
};

module.exports = {
  getQuizByChapter,
  submitQuiz,
};
