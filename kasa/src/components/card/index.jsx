import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background: ${colors.dark};
  border-radius: 25px;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
    padding-top: unset;
    padding-bottom: unset;
    background: unset;
  }
`

const CardContainer = styled.div`
  flex: 0 0 340px;
  margin: 56px 20px;
  min-width: 250px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    flex-basis: 100%;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(80%);
`

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  }
`

const CardTitle = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  margin: 0;
`

const LogementCard = ({ logement }) => {
  return (
    <Link to={`/gallery/${logement.id}`} style={{ textDecoration: 'none' }}>
      <CardImageWrapper>
        <CardImage src={logement.cover} alt="Photo vitrine logement" />
        <CardTitle>{logement.title}</CardTitle>
      </CardImageWrapper>
    </Link>
  )
}

const Card = () => {
  return (
    <CardWrapper>
      {logements.map((logement) => (
        <CardContainer key={logement.id}>
          <LogementCard logement={logement} />
        </CardContainer>
      ))}
    </CardWrapper>
  )
}

export default Card
