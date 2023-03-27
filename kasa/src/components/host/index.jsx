import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import colors from '../../utils/style/colors'

const Host = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 40px;
  color: ${colors.secondary};
  display: flex;
  width: 75%;
  align-items: center;
  @media (max-width: 1435px) {
    margin-bottom: unset;
    width: min-content;
  }

  @media (max-width: 380px) {
    height: unset;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  object-fit: cover;
`

const HostInformation = () => {
  const { idLogement } = useParams() // Obtenir l'ID du logement actuel à partir de l'URL
  const logement = data.find((product) => product.id === idLogement) // Trouver l'objet logement dans les données à l'aide de l'ID
  const { host } = logement // Récupérer l'objet host à partir de l'objet logement
  const { name, picture } = host // Obtenir le nom et l'image de l'objet hôte

  return (
    <Host>
      {name}
      <Image src={picture} alt={name} />
    </Host>
  )
}

export default HostInformation
