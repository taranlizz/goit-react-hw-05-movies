import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  height: 65px;
  display: flex;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
  &:hover {
    color: #3d7bfb;
  }

  &:first-child {
    margin-right: 20px;
  }

  &.active {
    color: #3d7bfb;
  }
`;
