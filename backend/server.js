

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


const authRoutes = require('./routes/auth.routes');
const chapterRoutes = require('./routes/chapter.routes');
const quizRoutes = require('./routes/quiz.routes');
const scoreRoutes = require('./routes/score.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/score', scoreRoutes);
app.use('/api/chat', require('./routes/chat.routes'));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error(err));
