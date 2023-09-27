import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;
export const SearchInput = styled.input`
  max-width: 190px;
  padding: 7px;
  border: none;
  border-radius: 4px;
  border: 1px solid #056bfa27;
  outline: none;
  color: dimgray;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 8px 10px;
  gap: 8px;
  height: 40px;
  width: 100px;
  border: none;
  background: #056bfa27;
  cursor: pointer;

  &:hover {
    background: #056bfa49;
  }
`;
