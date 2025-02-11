import React from 'react';
import MovieList from '../Components/MovieList';

const PopularMoviesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <MovieList type="popular" />
    </div>
  );
};

export default PopularMoviesPage;