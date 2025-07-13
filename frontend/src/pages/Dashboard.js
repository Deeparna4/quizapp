import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  // Set body background color and reset on unmount
  useEffect(() => {
    document.body.style.backgroundColor = '#f3e5f5'; // lavender
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await API.get('/chapters');
        setChapters(res.data);
      } catch (err) {
        console.error('Failed to fetch chapters:', err);
      }
    };

    fetchChapters();
  }, []);

  const styles = {
    container: {
      padding: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      color: '#6a1b9a',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '30px',
      textAlign: 'center',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      flex: '1 1 220px',
      maxWidth: '260px',
      minWidth: '200px',
      height: '180px', // Fixed height
      backgroundColor: '#fff0f5', // pinkish
      border: '1px solid #e1bee7',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
    },
    cardTitle: {
      fontSize: '16px',
      color: '#4a148c',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    cardDesc: {
      fontSize: '14px',
      color: '#6a1b9a',
      marginBottom: '12px',
    },
    quizBtn: {
      backgroundColor: '#ec407a', // pink
      border: 'none',
      padding: '6px 12px',
      fontSize: '13px',
      borderRadius: '18px',
      color: 'white',
      cursor: 'pointer',
      alignSelf: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome, {user?.name}!</h2>

      <div style={styles.row}>
        {chapters.map((chapter) => (
          <div key={chapter._id} style={styles.card}>
            <div style={styles.cardDesc}>Chapter {chapter.number}</div>
            <div style={styles.cardTitle}>{chapter.description}</div>
            <button
              style={styles.quizBtn}
              onClick={() => navigate(`/chapter/${chapter.number}`)}
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
