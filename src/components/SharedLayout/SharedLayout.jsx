import { Outlet } from 'react-router-dom';
import {
  Header,
  Container,
  HeaderNav,
  StyledLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderNav>
      </Header>
      <Outlet />
    </Container>
  );
};
