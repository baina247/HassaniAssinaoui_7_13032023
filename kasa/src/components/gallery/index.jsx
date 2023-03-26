import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../carousel'
import GalleryInformation from '../galleryInformation'
import GalleryToggle from '../galleryToggle'
import Error from '../../pages/404/index'
import logements from '../../data/logements.json'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem 0 6rem;
`

const Gallery = () => {
  const { idLogement } = useParams()

  // Trouver le logement avec l'identifiant donné
  const logement = logements.find((logement) => logement.id === idLogement)

  // Si le logement n'existe pas, rediriger vers la page 404
  if (!logement) {
    return <Error />
  }

  return (
    <Section>
      <Carousel />
      <GalleryInformation />
      <GalleryToggle />
    </Section>
  )
}

export default Gallery
