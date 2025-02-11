import React, { useState, useEffect } from 'react';
import MovieList from '../Components/MovieList';
import { searchMovies } from '../tmdb';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const data = await searchMovies(query);
        setSearchResults(data.results);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      <input 
        type="text" 
        placeholder="Search for movies..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className="block w-full p-4 mb-4 ps-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {query ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchResults.slice(0, 8).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
          <MovieList type="popular" />

          <h1 className="text-2xl font-bold mb-4 mt-8">Trending Movies</h1>
          <MovieList type="top_rated" />

          <h1 className="text-2xl font-bold mb-4 mt-8">Upcoming Movies</h1>
          <MovieList type="upcoming" />
        </>
      )}
    </div>
  );
};

export default HomePage;