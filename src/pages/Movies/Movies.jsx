import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import toast from 'react-hot-toast';

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
          toast.error('Ooops... Something went wrong.');
        }
      }
    };
    getMovie();
    return () => controller.abort();
  }, [movieName]);

  const onSearchSubmit = evt => {
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
  };

  return (
    <div>
      <SearchForm onSearchSubmit={onSearchSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
