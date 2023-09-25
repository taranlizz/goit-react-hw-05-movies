import { Link, Outlet } from 'react-router-dom';
const MovieDetails = () => {
  return (
    <div>
      <p>Movie Details</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
