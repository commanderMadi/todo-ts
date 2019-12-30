import styled from 'styled-components';

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
  width: 20%;
  list-style-type: none;
  justify-content: space-evenly;
  li {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
  a:link {
    text-decoration: none;
  }
`;
