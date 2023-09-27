import { Link, useLocation } from 'react-router-dom';
import { List, Item, Name } from './MovieList.styled';
import posterDefault from 'images/posterDefault.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link
            to={
              location.pathname.includes('/movies') ? `${id}` : `/movies/${id}`
            }
            state={{ from: location }}
          >
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
            <Name>{title}</Name>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
