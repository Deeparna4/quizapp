// client/src/App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ChapterQuiz from './pages/ChapterQuiz';
import ScorePage from './pages/ScorePage';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar'; // add at the top

// add just above your main container in Dashboard, ScorePage, ChapterQuiz

const App = () => {
  const { user } = useAuth();

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/chapter/:chapterNumber" element={user ? <ChapterQuiz /> : <Navigate to="/login" />} />
      <Route path="/score" element={user ? <ScorePage /> : <Navigate to="/login" />} />
    </Routes>
    </>
  );
};

export default App;
