import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.webp'
import colors from '../../utils/style/colors'
import Navigation from '../nav'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  height: 68px;
  position: relative;
  padding: 3rem 6rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    height: 47px;
  }

  @media (max-width: 425px) {
    padding: 2rem;
  }
`

const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 30px;
  }

`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Image du header montrant le logo du site" />
      <Navigation />
    </HeaderWrapper>
  )
}

export default Header
