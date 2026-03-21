import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DevPage from './pages/dev/DevPage';
import AgriPage from './pages/agri/AgriPage';
import HomePage from './pages/home/HomePage';
import './styles/app.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/agri" element={<AgriPage />} />
      </Routes>
    </Router>
  );
}
