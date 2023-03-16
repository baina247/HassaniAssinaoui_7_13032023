import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logements from '../../data/logements.json'
import colors from '../../utils/style/colors'

const LogementCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
  padding-top: 56px;
  padding-bottom: 6px;
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
  margin-bottom: 50px;
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
  object-fit: cover;
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
  color: ${colors.primary};
  margin: 0;
`

const LogementCard = ({ logement }) => {
  return (
    <Link to={`/gallery/${logement.id}`} style={{ textDecoration: 'none' }}>
      <LogementImageWrapper>
        <LogementImage src={logement.cover} />
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
          <LogementCard key={logement.id} logement={logement} />
        )
      })}
    </LogementCardWrapper>
  )
}

export default Card
