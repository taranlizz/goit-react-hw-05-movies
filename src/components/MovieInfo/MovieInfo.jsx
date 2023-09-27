import { Link } from 'react-router-dom';
import {
  Wrapper,
  WrapperInfo,
  GenresList,
  LinkItem,
  LinkWrapper,
} from './MovieInfo.styled';
import posterDefault from 'images/posterDefault.jpg';

const MovieInfo = ({ movie }) => {
  const { original_title, poster_path, vote_average, overview, genres } = movie;

  return (
    <>
      <Wrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : posterDefault
          }
          alt="poster"
          width={300}
          height={450}
        />
        <WrapperInfo>
          <h1>{original_title}</h1>
          <p>Rating: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenresList>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </GenresList>
        </WrapperInfo>
      </Wrapper>
      <LinkWrapper>
        <LinkItem>
          <Link to="cast">Cast</Link>
        </LinkItem>
        <LinkItem>
          <Link to="reviews">Reviews</Link>
        </LinkItem>
      </LinkWrapper>
    </>
  );
};

export default MovieInfo;
