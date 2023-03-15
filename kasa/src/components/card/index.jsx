import React from 'react'
import styled from 'styled-components'
import logements from '../../data/logements.json'

const LogementCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  background: #f7f7f7;
  border-radius: 25px;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
`

const LogementImage = styled.img`
  border-radius: 10px;
  flex: 1;
`

const LogementNameWrapper = styled.div`
  position: relative;
  bottom: 40px;
  left: 0;
  right: 0;
  padding: 10px;
`

const LogementName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`

const Card = () => {
  return (
    <LogementCard>
      {logements.map((logement) => {
        return (
          <Product key={logement.id}>
            <LogementImage src={logement.cover} />
            <LogementNameWrapper>
              <LogementName>{logement.title}</LogementName>
            </LogementNameWrapper>
          </Product>
        )
      })}
    </LogementCard>
  )
}

export default Card