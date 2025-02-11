import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext.js';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4  text-gray shadow flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Movie Listings</Link>
      <div className="flex space-x-4">
        <Link to="/popular" className="text-lg">Popular</Link>
        <Link to="/trending" className="text-lg">Trending</Link>
        <Link to="/upcoming" className="text-lg">Upcoming</Link>
      </div>
      <button onClick={toggleTheme} className="bg-gray-600 p-2 rounded">
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;