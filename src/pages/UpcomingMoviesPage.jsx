import React from 'react';
import MovieList from '../Components/MovieList';

const UpcomingMoviesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Movies</h1>
      <MovieList type="upcoming" />
    </div>
  );
};

export default UpcomingMoviesPage;