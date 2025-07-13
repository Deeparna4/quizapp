import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const ScorePage = () => {
  const [scores, setScores] = useState([]);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#fbeaff'; // soft lavender-pink
    document.body.style.margin = '0';
    document.body.style.fontFamily = '"Segoe UI", sans-serif';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await API.get('/score');
        setScores(res.data.scores);
        setUsername(res.data.name);
      } catch (err) {
        console.error('Failed to fetch scores:', err);
      }
    };
    fetchScores();
  }, []);

  const styles = {
    wrapper: {
      maxWidth: '700px',
      margin: '40px auto',
      backgroundColor: '#f3d0ff',
      borderRadius: '14px',
      padding: '30px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    },
    title: {
      textAlign: 'center',
      fontSize: '22px',
      color: '#6a1b9a',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fce4ec',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#f8bbd0',
      color: '#4a148c',
      padding: '12px',
      fontSize: '15px',
      fontWeight: '600',
      borderBottom: '1px solid #e3b2d3',
      textAlign: 'left',
    },
    td: {
      padding: '10px 12px',
      borderBottom: '1px solid #f5c6e7',
      color: '#4a148c',
      fontSize: '14px',
    },
    noScores: {
      color: '#6a1b9a',
      textAlign: 'center',
      fontSize: '15px',
    },
    backBtn: {
      marginTop: '24px',
      backgroundColor: '#ba68c8',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 18px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>📊 {username}'s Progress Dashboard</h2>

      {scores.length === 0 ? (
        <p style={styles.noScores}>You haven’t completed any quizzes yet.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Chapter</th>
              <th style={styles.th}>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr key={i}>
                <td style={styles.td}>Chapter {s.chapter}</td>
                <td style={styles.td}>{s.score} / 5</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button style={styles.backBtn} onClick={() => navigate('/')}>
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default ScorePage;
