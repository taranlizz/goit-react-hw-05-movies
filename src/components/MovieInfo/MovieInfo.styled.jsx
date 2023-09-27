import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const LinkWrapper = styled.ul`
  margin-bottom: 20px;
`;

export const LinkItem = styled.li`
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
