import { Link } from 'react-router-dom';
const MovieInfo = ({ movie }) => {
  const { original_title, poster_path, vote_average, overview, genres } = movie;
  return (
    <>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt=""></img>
        <h2>{original_title}</h2>
        <p>{Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </>
  );
};

export default MovieInfo;
