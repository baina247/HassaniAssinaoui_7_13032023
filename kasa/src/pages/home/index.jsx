import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import GallerySection from '../../components/gallery'

const Body = styled.div`
  background-color: #ffffff;
  position: relative;
  padding: 3rem 10rem;
`
function Home() {
  return (
    <Body>
      <Banner />
      <GallerySection />
    </Body>
  )
}

export default Home
