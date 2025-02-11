import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../tmdb.js';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(type, page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type, page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={Math.min(totalPages, 4)} onPageChange={setPage} />
    </div>
  );
};

export default MovieList;