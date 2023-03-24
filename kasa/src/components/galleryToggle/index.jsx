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
  weight: 500;
  font-size: 18px;
  line-height: 26px;
`

const ToggleContentWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 15px;
  z-index: -1;
  background-color: ${colors.dark};
  border-radius: 10px;
  flex: 1;
  min-height: 200px;
`

const ToggleTextContent = styled.p`
  weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.secondary};
`

const ToggleWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`

const EquipmentsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const EquipmentsListItem = styled.li`
  margin-bottom: 10px;
`

const GalleryToggle = () => {
  // Récupérer le paramètre idLogement à partir de l'URL
  const { idLogement } = useParams()
  // Trouver le logement dans le tableau de données en fonction du paramètre idLogement
  const logement = data.find((product) => product.id === idLogement)
  // Déstructurer la description et les équipements de l'objet logement
  const { description, equipments } = logement

  const Toggle = ({ title, content }) => {
    // Définir l'état de la bascule
    const [isActive, setIsActive] = useState(false)

    // Fonction pour basculer l'état
    const toggle = () => {
      setIsActive(!isActive)
    }

    return (
      <>
        {/* Titre de la bascule, avec une icône de flèche qui change en fonction de l'état */}
        <ToggleTextWrapper onClick={toggle}>
          {title}
          <ArrowIcon
            src={isActive ? UpArrowImg : DownArrowImg}
            alt={isActive ? 'Icône flèche du haut' : 'Icône flèche du bas'}
          />
        </ToggleTextWrapper>
        {/* Contenu de la bascule, affiché uniquement si la bascule est active */}
        {isActive && content}
      </>
    )
  }

  return (
    <Section>
      {/* Basculer pour la description */}
      <ToggleWrapper>
        <Toggle
          title="Description"
          content={
            <ToggleContentWrapper>
              <ToggleTextContent>{description}</ToggleTextContent>
            </ToggleContentWrapper>
          }
        />
      </ToggleWrapper>
      {/* Bascule pour les équipements */}
      <ToggleWrapper>
        <Toggle
          title="Equipements"
          content={
            <ToggleContentWrapper>
              <EquipmentsList>
                {equipments.map((equipment, index) => (
                  <EquipmentsListItem key={index}>
                    <ToggleTextContent>{equipment}</ToggleTextContent>
                  </EquipmentsListItem>
                ))}
              </EquipmentsList>
            </ToggleContentWrapper>
          }
        />
      </ToggleWrapper>
    </Section>
  )
}

export default GalleryToggle
