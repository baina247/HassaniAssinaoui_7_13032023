import React, { useState } from 'react'
import styled from 'styled-components'
import DownArrowImg from '../../assets/down_arrow.svg'
import UpArrowImg from '../../assets/up_arrow.svg'
import colors from '../../utils/style/colors'

const Section = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const AboutTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  width: 80%;
  height: auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${colors.primary};
  background: #ff6060;
  align-items: center;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
`
const ToggleContentWrapper = styled.div`
  position: relative;
  top: -10px;
  width: 80%;
  z-index: -1;
  background: #f7f7f7;
  border-radius: 5px;
  padding: 10px;
`

const AboutTextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${colors.secondary};
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const AboutToggle = () => {
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
      <AboutTextWrapper onClick={() => toggleContent(0)}>
        Fiable
        <ArrowIcon
          src={activeIndexes.includes(0) ? UpArrowImg : DownArrowImg}
        />
      </AboutTextWrapper>
      {activeIndexes.includes(0) && (
        <ToggleContentWrapper>
          <AboutTextContent>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos equipes.
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
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </AboutTextContent>
        </ToggleContentWrapper>
      )}
      <AboutTextWrapper onClick={() => toggleContent(2)}>
        Service
        <ArrowIcon
          src={activeIndexes.includes(2) ? UpArrowImg : DownArrowImg}
        />
      </AboutTextWrapper>
      {activeIndexes.includes(2) && (
        <ToggleContentWrapper>
          <AboutTextContent>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </AboutTextContent>
        </ToggleContentWrapper>
      )}
      <AboutTextWrapper onClick={() => toggleContent(3)}>
        Responsabilité
        <ArrowIcon
          src={activeIndexes.includes(3) ? UpArrowImg : DownArrowImg}
        />
      </AboutTextWrapper>
      {activeIndexes.includes(3) && (
        <ToggleContentWrapper>
          <AboutTextContent>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </AboutTextContent>
        </ToggleContentWrapper>
      )}
    </Section>
  )
}

export default AboutToggle
