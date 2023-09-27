import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link
            to={
              location.pathname.includes('/movies') ? `${id}` : `/movies/${id}`
            }
            state={{ from: location }}
          >
            {title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
