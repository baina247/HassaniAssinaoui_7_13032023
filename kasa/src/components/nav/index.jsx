import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 6rem 0;
  bottom: 3rem;
`

const NavLink = styled.a`
  position: relative;
  margin-left: 30px;
  font-size: 20px;
  color: #FF6060;
  text-decoration: none;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    transition: all 0.3s ease-out;
    background-color: #FF6060;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  &:hover:before, &:hover:after {
    width: 50%;
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
