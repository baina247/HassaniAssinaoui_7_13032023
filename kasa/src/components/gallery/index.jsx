import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DownArrowImg from '../../assets/down_arrow.svg'
import UpArrowImg from '../../assets/up_arrow.svg'
import Carousel from '../carousel'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem 0 6rem;
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const AboutTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
  cursor: pointer;
`

const ToggleContentWrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
`

const AboutTextContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

const Gallery = () => {
  const [activeIndexes, setActiveIndexes] = useState([])

  const toggleContent = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index))
    } else {
      setActiveIndexes([...activeIndexes, index])
    }
  }

  return (
    
    <Section>
      <Carousel></Carousel>
      <AboutTextWrapper onClick={() => toggleContent(0)}>
        Fiable
        <ArrowIcon
          src={activeIndexes.includes(0) ? UpArrowImg : DownArrowImg}
        />
      </AboutTextWrapper>
      {activeIndexes.includes(0) && (
        <ToggleContentWrapper>
          <AboutTextContent>
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au cœur de Paris
            avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
            voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station
            de la gare de l'est (7 minutes à pied).
          </AboutTextContent>
        </ToggleContentWrapper>
      )}
      <AboutTextWrapper onClick={() => toggleContent(1)}>
        Respect
        <ArrowIcon
          src={activeIndexes.includes(1) ? UpArrowImg : DownArrowImg}
        />
      </AboutTextWrapper>
      {activeIndexes.includes(1) && (
        <ToggleContentWrapper>
          <AboutTextContent>
            Climatisation
            Wi-Fi Cuisine
            Espace de travail
            Fer à repasser
            Sèche-cheveux Cintres
          </AboutTextContent>
        </ToggleContentWrapper>
      )}
    </Section>
  )
}
export default Gallery
