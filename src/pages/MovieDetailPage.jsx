import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../tmdb";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{movie.title}</h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg text-gray-600">
          Rating:{" "}
          <span className="font-semibold text-yellow-500">
            {movie.vote_average}
          </span>
        </p>
        <p className="text-lg text-gray-600">
          Release Date:{" "}
          <span className="font-semibold">{movie.release_date}</span>
        </p>
      </div>
      <p className="text-gray-700 mb-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetailPage;
