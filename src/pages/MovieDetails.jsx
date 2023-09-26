import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getMovieByID = async () => {
      try {
        const movie = await getMovies(`/movie/${movieId}`, controller);
        setMovie(movie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    };

    getMovieByID();
    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {movie && <MovieInfo movie={movie} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
