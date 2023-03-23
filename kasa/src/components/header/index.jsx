import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.webp'
import colors from '../../utils/style/colors'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  height: 68px;
  position: relative;
  padding: 3rem 6rem;
`

const Logo = styled.img`
  height: 50px;
`

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
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Image du header montrant le logo du site" />
      <Nav>
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="/about">A Propos</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
