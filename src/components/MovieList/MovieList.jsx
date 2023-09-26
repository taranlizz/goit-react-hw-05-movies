import { Link } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
