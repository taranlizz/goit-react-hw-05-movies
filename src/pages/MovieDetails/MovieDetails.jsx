import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledLink } from './MovieDetails.styled';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();

    const getMovieByID = async () => {
      try {
        const movie = await getMovies(`/movie/${movieId}`, controller);
        setMovie(movie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Ooops... Something went wrong.');
        }
      }
    };

    getMovieByID();
    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      <StyledLink to={backLinkRef.current}>
        <AiOutlineArrowLeft />
        Go back
      </StyledLink>
      {movie && <MovieInfo movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
