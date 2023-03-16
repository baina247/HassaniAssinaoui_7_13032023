import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/footer_logo.png'
import colors from '../../utils/style/colors'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000;
  height: 10rem;
  margin-top: 3rem;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`

const LogoFooter = styled.img`
  height: 50px;
`

const FooterText = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  color: ${colors.primary};
`

function Footer() {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoFooter src={logo} alt="Logo" />
      </LogoWrapper>
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterWrapper>
  )
}

export default Footer
