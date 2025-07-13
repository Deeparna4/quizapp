import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const styles = {
    navbar: {
      background: 'linear-gradient(to right, #e0bbf3, #f9c6d0)', // Lavender to pink
      padding: '10px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Segoe UI, sans-serif',
      // borderBottom: '3px solid #c084f5', // Violet border
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
    brand: {
      color: '#6a1b9a', // Deep violet
      fontSize: '22px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
    },
    scoresBtn: {
      backgroundColor: '#f48fb1', // Soft pink
      border: 'none',
      color: '#fff',
      borderRadius: '18px',
      padding: '6px 14px',
      marginRight: '10px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    userText: {
      color: '#6a1b9a',
      marginRight: '10px',
      fontWeight: 500,
    },
    logoutBtn: {
      backgroundColor: '#ba68c8', // Lavender violet
      border: 'none',
      color: '#fff',
      borderRadius: '18px',
      padding: '6px 14px',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      <span style={styles.brand} onClick={() => navigate('/')}>
        QuizVerse 📘
      </span>
      <div style={styles.rightSection}>
        <button style={styles.scoresBtn} onClick={() => navigate('/score')}>
          My Scores
        </button>
        <span style={styles.userText}>Hi, {user?.name}</span>
        <button style={styles.logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
