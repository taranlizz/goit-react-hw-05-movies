import { useState } from 'react';
import { SearchButton, SearchInput, Form } from './SearchFrom.styled';

const SearchForm = ({ onSearchSubmit }) => {
  const [value, setValue] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    onSearchSubmit(e);
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={onSubmit}>
      <SearchInput
        placeholder="Type movie name"
        type="text"
        value={value}
        name="movieName"
        onChange={e => setValue(e.target.value)}
        required
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
