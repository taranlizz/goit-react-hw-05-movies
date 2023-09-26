import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    color: #3d7bfb;
  }
`;
