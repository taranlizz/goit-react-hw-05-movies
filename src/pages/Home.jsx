import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieApi';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovies('/trending/all/day', controller);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();

    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
