import React from 'react';
import MovieList from '../Components/MovieList';

const TrendingMoviesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Movies</h1>
      <MovieList type="top_rated" />
    </div>
  );
};

export default TrendingMoviesPage;