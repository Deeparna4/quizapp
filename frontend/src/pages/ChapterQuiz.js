import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import ChapterChatbot from '../components/ChapterChatbot';

const ChapterQuiz = () => {
  const { chapterNumber } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  
  useEffect(() => {
    document.body.style.backgroundColor = '#f3e5f5'; 
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await API.get(`/quiz/${chapterNumber}`);
        setQuestions(res.data.questions);
        setAnswers(new Array(res.data.questions.length).fill(null));
      } catch (err) {
        console.error('Failed to load quiz:', err);
      }
    };

    fetchQuiz();
  }, [chapterNumber]);

  const handleSelect = (qIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[qIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert('Please answer all questions.');
      return;
    }

    try {
      const res = await API.post(`/quiz/${chapterNumber}/submit`, {
        answers,
      });
      setScore(res.data.score);
      setCorrectAnswers(res.data.correctAnswers);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

 const getOptionStyle = (qIndex, optIndex) => {
  const base = styles.optionLabel;

  if (!submitted) return base;

  const correct = correctAnswers[qIndex];
  const selected = answers[qIndex];

  if (optIndex === correct) {
    return {
      ...base,
      backgroundColor: '#d4edda', 
      border: '1px solid #28a745',
      color: '#155724',
    };
  }

  if (optIndex === selected && selected !== correct) {
    return {
      ...base,
      backgroundColor: '#ffe6f0', 
      border: '1px solid #e84393',
    };
  }

  return base;
};

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    header: {
      background: '#f8bbd0', 
      color: '#4a148c',
      padding: '10px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '20px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    questionCard: {
      backgroundColor: '#faf0ff',
      padding: '12px',
      borderRadius: '10px',
      marginBottom: '16px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    },
    questionText: {
      fontSize: '15px',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#6a1b9a',
    },
    optionGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '6px',
    },
    optionInput: {
      marginRight: '8px',
      cursor: 'pointer',
    },
    optionLabel: {
  fontSize: '14px',
  backgroundColor: '#fdf3ff',
  border: '1px solid #dcdde1',
  borderRadius: '8px',
  padding: '6px 12px',
  width: '100%',
  transition: '0.3s',
  cursor: 'pointer',
  userSelect: 'text',
  ':hover': {
    backgroundColor: '#fce4ec',
  },
}
,
    submitButton: {
      backgroundColor: '#ec407a', 
      border: 'none',
      padding: '8px 20px',
      fontSize: '14px',
      borderRadius: '20px',
      color: 'white',
      cursor: 'pointer',
      marginTop: '12px',
    },
    scoreBox: {
      backgroundColor: '#f3e5f5',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '15px',
      textAlign: 'center',
      marginTop: '20px',
      color: '#6a1b9a',
      fontWeight: '500',
    },
    backButton: {
      backgroundColor: '#ce93d8',
      border: 'none',
      padding: '6px 18px',
      fontSize: '13px',
      borderRadius: '18px',
      color: '#4a148c',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Chapter {chapterNumber} Quiz
      </div>

      {questions.map((q, index) => (
        <div key={index} style={styles.questionCard}>
          <div style={styles.questionText}>
            {index + 1}. {q.questionText}
          </div>
          {q.options.map((option, optIndex) => (
            <div key={optIndex} style={styles.optionGroup}>
              <input
                type="radio"
                name={`q${index}`}
                id={`q${index}_opt${optIndex}`}
                checked={answers[index] === optIndex}
                onChange={() => handleSelect(index, optIndex)}
                disabled={submitted}
                style={styles.optionInput}
              />
              <label
                htmlFor={`q${index}_opt${optIndex}`}
                style={getOptionStyle(index, optIndex)}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button style={styles.submitButton} onClick={handleSubmit}>
          Submit Quiz
        </button>
      ) : (
        <div style={styles.scoreBox}>
          🎉 You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>!
        </div>
      )}

      {submitted && <ChapterChatbot chapterNumber={chapterNumber} />}

      <div>
        <button style={styles.backButton} onClick={() => navigate('/')}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ChapterQuiz;
