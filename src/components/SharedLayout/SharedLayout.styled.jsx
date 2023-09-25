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
  color: #0a0a0a;

  &:hover {
    color: #7f56d9;
  }

  &:first-child {
    margin-right: 20px;
  }

  &.active {
    color: #7f56d9;
  }
`;
