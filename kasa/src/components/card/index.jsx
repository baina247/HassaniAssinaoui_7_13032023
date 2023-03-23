import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'
import colors from '../../utils/style/colors'

const LogementImage = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;
  flex: 1;
  filter: brightness(80%);
`

const LogementImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

const LogementNameWrapper = styled.div`
  position: relative;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 10px;
`

const LogementName = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  margin: 0;
`

const LogementCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: ${colors.dark};
  border-radius: 25px;

  @media (max-width: 600px) {
    background: none;
    padding-top: unset;
    padding-bottom: unset;
    margin-top: 35px;
  }
`

const LogementCardContainer = styled.div`
  flex: 1 0 340px;
  min-width: 250px;
  margin: 30px 20px;

  @media (max-width: 600px) {
    margin: unset;
  }
`

const LogementCard = ({ logement }) => {
  return (
    <Link to={`/gallery/${logement.id}`} style={{ textDecoration: 'none' }}>
      <LogementImageWrapper>
        <LogementImage src={logement.cover} alt="Photo vitrine logement" />
        <LogementNameWrapper>
          <LogementName>{logement.title}</LogementName>
        </LogementNameWrapper>
      </LogementImageWrapper>
    </Link>
  )
}

const Card = () => {
  return (
    <LogementCardWrapper>
      {logements.map((logement) => {
        return (
          <LogementCardContainer key={logement.id}>
            <LogementCard logement={logement} />
          </LogementCardContainer>
        )
      })}
    </LogementCardWrapper>
  )
}

export default Card
