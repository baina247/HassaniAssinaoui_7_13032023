import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavLink = styled.a`
  position: relative;
  margin-left: 30px;
  font-size: 20px;
  color: ${colors.secondary};
  text-decoration: none;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    transition: all 0.3s ease-out;
    background-color: ${colors.secondary};
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  &:hover:before,
  &:hover:after {
    width: 50%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const Navigation = () => {
  return (
    <Nav>
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="/about">A Propos</NavLink>
    </Nav>
  )
}

export default Navigation
