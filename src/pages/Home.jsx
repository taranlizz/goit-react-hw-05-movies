import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieApi';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getTrendingMovies = async () => {
      try {
        const { results } = await getMovies('/trending/all/day', controller);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    };

    getTrendingMovies();

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
