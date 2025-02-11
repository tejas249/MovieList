import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-black text-white p-4 rounded-3xl transition transform hover:scale-105">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover rounded-3xl" />
      <h2 className="mt-2 text-lg font-bold text-left">{movie.title}</h2>
      <p className='text-left'>Rating: {movie.vote_average}</p>
      <Link to={`/movies/${movie.id}`} className="text-blue-400 absolute right-0 bottom-0 size-16">View Details</Link>
    </div>
  );
};

export default MovieCard;