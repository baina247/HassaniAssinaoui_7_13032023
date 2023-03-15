import React from 'react'
import styled from 'styled-components'
import bannerImage from '../../assets/banner_img.png'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  opacity: 0.9;
`

const BannerText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 142.6%;
  text-align: center;
  color: #ffffff;
`

const Banner = () => {
    return (
      <Section>
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </Section>
    )
  }
  export default Banner