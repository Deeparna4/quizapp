import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#f8eafc'; // soft lavender-pink background
    document.body.style.margin = '0';
    document.body.style.fontFamily = '"Segoe UI", sans-serif';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
    };
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/auth/login', formData);
      login(res.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const styles = {
    wrapper: {
      maxWidth: '420px',
      margin: '80px auto',
      padding: '32px',
      borderRadius: '16px',
      backgroundColor: '#f3d0ff', // soft lavender
      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '24px',
      fontSize: '24px',
      color: '#4a148c',
      fontWeight: 600,
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      marginBottom: '16px',
      border: '1px solid #d9b3f5',
      borderRadius: '10px',
      backgroundColor: '#fbeaff',
      color: '#4a148c',
      fontSize: '14px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#d96bbf',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    error: {
      color: '#c62828',
      fontSize: '13px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    linkWrap: {
      textAlign: 'center',
      fontSize: '13px',
      marginTop: '14px',
      color: '#6a1b9a',
    },
    link: {
      color: '#880e4f',
      fontWeight: 600,
      textDecoration: 'none',
      marginLeft: '4px',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>Login to QuizVerse</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <div style={styles.linkWrap}>
        Don't have an account?
        <a href="/register" style={styles.link}>Register</a>
      </div>
    </div>
  );
};

export default Login;
