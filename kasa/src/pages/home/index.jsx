import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import Card from '../../components/card/index'

const Body = styled.div`
  background-color: #ffffff;
  padding: 1rem 5rem;
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
