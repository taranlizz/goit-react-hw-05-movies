import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieApi';
import MovieList from 'components/MovieList/MovieList';
import toast from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getTrendingMovies = async () => {
      try {
        const { results } = await getMovies('/trending/movie/day', controller);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Ooops... Something went wrong.');
        }
      }
    };

    getTrendingMovies();

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
