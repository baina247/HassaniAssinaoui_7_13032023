import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 80px;
  position: relative;
  padding: 0 10rem 0;
`

const Logo = styled.img`
  height: 50px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`

const NavLink = styled.a`
  margin-left: 30px;
  font-size: 18px;
  color: #333333;
  text-decoration: none;
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavLink href="/home">Accueil</NavLink>
        <NavLink href="/about">A propos</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
