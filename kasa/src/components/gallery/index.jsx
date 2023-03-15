import React from 'react'
import styled from 'styled-components'
import logements from '../../data/logements.json'

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
  width: 30%;
  height: 300px;
  padding: 50px 0 0 0;
  border-radius: 10px;
`

const LogementImage = styled.img`
  border-radius: 10px;
`

const LogementName = styled.h3`
  position: relative;
  left: -27rem;
  top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: blue;
`

const GallerySection = () => {
    return (
      <Gallery >
        {logements.map((logement) => {
          return (
            <Product key={logement.id}>
              <LogementImage src={logement.cover} />
              <LogementName>{logement.title}</LogementName>
            </Product>
          )
        })}
      </Gallery>
    )
}

export default GallerySection