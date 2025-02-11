import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './Components/NavBar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import TrendingMoviesPage from './pages/TrendingMoviesPage';
import PopularMoviesPage from './pages/PopularMoviesPage';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/trending" element={<TrendingMoviesPage />} />
        <Route path="/popular" element={<PopularMoviesPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;