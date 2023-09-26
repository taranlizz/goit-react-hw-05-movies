import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/MovieApi';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
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
          console.log(error);
        }
      }
    };
    getCast();
    return () => controller.abort();
  }, [movieId]);

  return (
    cast.length > 0 && (
      <ul>
        {cast.map(({ name, id, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`
              }
              alt=""
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
