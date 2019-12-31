import styled from 'styled-components';
import { media } from '../styles/media';

export const NavBar = styled.nav`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: #5486d9;
  a:visited {
    color: #fff;
  }
  a:link {
    text-decoration: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  width: 90%;
  justify-content: center;
  list-style-type: none;
  li {
    color: #fff;
    margin: 0.5rem;
  }
  a:visited {
    color: #fff;
  }
  a:link {
    text-decoration: none;
  }
  ${media.smallVp`justify-content: flex-end`}
`;
