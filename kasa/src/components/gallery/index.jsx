import React from 'react'
import styled from 'styled-components'
import Carousel from '../carousel'
import GalleryInformation from '../galleryInformation'
import GalleryToggle from '../galleryToggle'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem 0 6rem;
`

const Gallery = () => {
  return (
    <Section>
      <Carousel />
      <GalleryInformation />
      <GalleryToggle />
    </Section>
  )
}

export default Gallery
