import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
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
      <Logo src={logo} alt="Logo" />
    </LogoWrapper>
  )
}

export default Header
