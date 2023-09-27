import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    const controller = new AbortController();
    const getMovie = async () => {
      try {
        const { results } = await getMovies(
          `/search/movie?query=${movieName}`,
          controller
        );
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    };
    getMovie();
    return () => controller.abort();
  }, [movieName]);

  const onQuerySubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={onQuerySubmit}>
        <input type="text" name="movieName" required />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
