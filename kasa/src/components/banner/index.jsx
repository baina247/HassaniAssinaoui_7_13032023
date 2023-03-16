import React from 'react'
import styled from 'styled-components'
import bannerImage from '../../assets/banner_img.png'
import colors from '../../utils/style/colors'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BannerImage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 220px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`
const BannerText = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${colors.primary};
`
const Banner = () => {
  return (
    <Section>
      <BannerImage>
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </BannerImage>
    </Section>
  )
}
export default Banner
