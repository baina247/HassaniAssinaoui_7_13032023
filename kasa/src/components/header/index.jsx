import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.webp'
import colors from '../../utils/style/colors'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  height: 80px;
  position: relative;
  padding: 0 6rem 0;
`

const Logo = styled.img`
  height: 50px;
`

function Header() {
  return (
    <LogoWrapper >
      <Logo src={logo} alt="Image du header montrant le logo du site" />
    </LogoWrapper>
  )
}

export default Header
