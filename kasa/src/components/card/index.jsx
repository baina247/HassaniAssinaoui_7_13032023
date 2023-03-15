import React from 'react'
import styled from 'styled-components'
import logements from '../../data/logements.json'

const LogementCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
  padding-top: 56px;
  padding-bottom: 56px;
  background: #f7f7f7;
  border-radius: 25px;
`

const LogementImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
`

const LogementImage = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  flex: 1;
`

const LogementNameWrapper = styled.div`
  position: relative;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 10px;
`

const LogementName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  margin: 0;
`

const Card = () => {
  return (
    <LogementCardWrapper>
      {logements.map((logement) => {
        return (
          <LogementImageWrapper key={logement.id}>
            <LogementImage src={logement.cover} />
            <LogementNameWrapper>
              <LogementName>{logement.title}</LogementName>
            </LogementNameWrapper>
          </LogementImageWrapper>
        )
      })}
    </LogementCardWrapper>
  )
}

export default Card
