import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import Card from '../../components/card/index'

const Body = styled.div`
  background-color: #ffffff;
  position: relative;
  padding: 3rem 10rem;
`
function Home() {
  return (
    <Body>
      <Banner />
      <Card />
    </Body>
  )
}

export default Home
