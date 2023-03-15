import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 5rem 0;
  bottom: 3rem;
`

const NavLink = styled.a`
  margin-left: 30px;
  font-size: 20px;
  color: #FF6060;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

function Navigation() {
  return (
    <Nav>
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="/about">A propos</NavLink>
    </Nav>
  );
}

export default Navigation;
