import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import {
  Header,
  Container,
  HeaderNav,
  StyledLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies" end>
            Movies
          </StyledLink>
        </HeaderNav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
