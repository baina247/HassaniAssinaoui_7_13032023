import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/footer_logo.webp'
import colors from '../../utils/style/colors'

const FooterWrapper = styled.footer`
  position: relative;
  bottom: -8.1rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.black};
  height: 15rem;
  padding-top: 3rem;
  @media (max-width: 768px) {
    padding-top: unset;
    bottom: -1.5rem;
  }

  @media (max-width: 425px) {
    bottom: -15.5rem;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
`

const LogoFooter = styled.img`
  height: 50px;
  @media (max-width: 768px) {
    height: 30px;
  }
`

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-size: 24px;
  font-weight: 500;
  color: ${colors.primary};
  width: 100%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoFooter src={logo} alt="Image du logo en noir" />
      </LogoWrapper>
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterWrapper>
  )
}

export default Footer
