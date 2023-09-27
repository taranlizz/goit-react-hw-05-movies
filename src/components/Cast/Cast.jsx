import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';
import { CastGallery } from './Cast.styled';
import userDefault from 'images/userDefault.jpg';
import toast from 'react-hot-toast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const controller = new AbortController();
    const getCast = async () => {
      try {
        const { cast } = await getMovies(
          `/movie/${movieId}/credits`,
          controller
        );
        setCast(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.error('Ooops... Something went wrong.');
        }
      }
    };
    getCast();
    return () => controller.abort();
  }, [movieId]);

  return (
    cast.length > 0 && (
      <CastGallery>
        {cast.map(({ name, id, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : userDefault
              }
              alt="actor"
              width={200}
              height={300}
            />
            <p>{name}</p>
          </li>
        ))}
      </CastGallery>
    )
  );
};

export default Cast;
