import React from 'react'
import styled from 'styled-components'
import bannerImage from '../../assets/banner_img.png'
import productImage1 from '../../assets/profile.png'
import productImage2 from '../../assets/profile.png'
import productImage3 from '../../assets/profile.png'

const Body = styled.div`
  background-color: #ffffff;
  position: relative;
  padding: 3rem 10rem;
`

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

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  background: #f7f7f7;
  border-radius: 25px;
`

const Product = styled.div`
  display: flex;
  width: 340px;
  height: 340px;
  margin: 56px 50px;
  border-radius: 10px;
`

const ProductImage = styled.img`
  border-radius: 10px;
`

const ProductName = styled.h3`
  position: relative;
  left: -95.88%;
  right: 5.88%;
  top: 68.82%;
  bottom: 5.88%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: #ffffff;
`

function Home() {
  return (
    <Body>
      <Section>
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </Section>
      <Gallery>
        <Product>
          <ProductImage src={productImage1} />
          <ProductName>Titre de la location</ProductName>
        </Product>
        <Product>
          <ProductImage src={productImage2} />
          <ProductName>Titre de la location</ProductName>
        </Product>
        <Product>
          <ProductImage src={productImage3} />
          <ProductName>Titre de la location</ProductName>
        </Product>
        <Product>
          <ProductImage src={productImage3} />
          <ProductName>Titre de la location</ProductName>
        </Product>
        <Product>
          <ProductImage src={productImage3} />
          <ProductName>Titre de la location</ProductName>
        </Product>
        <Product>
          <ProductImage src={productImage3} />
          <ProductName>Titre de la location</ProductName>
        </Product>
      </Gallery>
    </Body>
  )
}

export default Home
