import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import colors from '../../utils/style/colors'
import TagInformation from '../tag'
import RatingInformation from '../rating'
import HostInformation from '../host'

const Wrapper = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 45px;
  line-height: 52px;
  color: ${colors.secondary};
  margin-bottom: 10px;
`

const Location = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.secondary};
  margin-bottom: 10px;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const GalleryInformation = () => {
  // Obtenir idLogement à partir de l'URL
  const { idLogement } = useParams();

  // Trouver l'objet logement avec l'identifiant correspondant
  const logement = data.find((product) => product.id === idLogement);

  // Déstructurer l'objet logement pour obtenir le titre et la localisation
  const { title } = logement;
  const { location } = logement;

  return (
    <Wrapper>
      <LeftSection>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Location>{location}</Location>
        <TagInformation />
      </LeftSection>
      <RightSection>
        <HostInformation />
        <RatingInformation />
      </RightSection>
    </Wrapper>
  );
};

export default GalleryInformation;
