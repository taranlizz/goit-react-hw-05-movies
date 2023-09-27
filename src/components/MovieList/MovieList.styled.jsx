import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    color: #3d7bfb;
  }
`;

export const Name = styled.p`
  max-width: 300px;
`;
