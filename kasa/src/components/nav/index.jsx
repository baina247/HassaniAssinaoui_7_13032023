import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 10rem 0;
  bottom: 3rem;
  color: #FF6060;
  text-decoration-line: underline;
`

const NavLink = styled.a`
  margin-left: 30px;
  font-size: 18px;
  color: #333333;
  text-decoration: none;
`

function Navigation() {
  return (
    <Nav>
      <NavLink href="/">Accueil</NavLink>
      <NavLink href="/about">A propos</NavLink>
    </Nav>
  )
}

export default Navigation