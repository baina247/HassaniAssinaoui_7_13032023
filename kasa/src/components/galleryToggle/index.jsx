import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import colors from '../../utils/style/colors'
import DownArrowImg from '../../assets/down_arrow.svg'
import UpArrowImg from '../../assets/up_arrow.svg'
import data from '../../data/logements.json'

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const ToggleTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 15px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border-radius: 10px;
  cursor: pointer;
`

const ToggleContentWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 15px;
  z-index: -1;
  background-color: #f6f6f6;
  border-radius: 10px;
`

const ToggleTextContent = styled.p`
  weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.secondary};
`
const ToggleWrapper = styled.div`
  width: 45%;
`

const Toggle = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <ToggleTextWrapper onClick={toggle}>
        {title}
        <ArrowIcon src={isActive ? UpArrowImg : DownArrowImg} />
      </ToggleTextWrapper>
      {isActive && <ToggleContentWrapper>{content}</ToggleContentWrapper>}
    </>
  )
}

const GalleryToggle = () => {
  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)
  const { description, equipments } = logement

  return (
    <Section>
      <ToggleWrapper>
        <Toggle
          title="Description"
          content={<ToggleTextContent>{description}</ToggleTextContent>}
        />
      </ToggleWrapper>
      <ToggleWrapper>
        <Toggle
          title="Equipements"
          content={
            <ToggleTextContent>{equipments.join(', ')}</ToggleTextContent>
          }
        />
      </ToggleWrapper>
    </Section>
  )
}
export default GalleryToggle
