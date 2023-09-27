import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  width: 1440px;
  margin: 0 auto;
  padding: 20px 20px;
`;

export const Header = styled.header`
  height: 65px;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16),
    0px 1px 6px rgba(46, 47, 66, 0.08);
  padding: 20px 0;
`;

export const HeaderNav = styled.nav`
  font-size: 20px;
  width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  &:hover {
    color: #3d7bfb;
  }

  &:first-child {
    margin-right: 30px;
  }

  &.active {
    color: #3d7bfb;
  }
`;
