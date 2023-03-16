import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/index'
import Card from '../../components/card/index'
import Footer from '../../components/footer'
import colors from '../../utils/style/colors'

const Body = styled.div`
  background-color: ${colors.background};
  padding: 0 6rem 0 6rem;
`
function Home() {
  return (
    <Body>
      <Banner />
      <Card />
      <Footer/>
    </Body>
  )
}

export default Home
