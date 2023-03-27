import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/logements.json'
import leftArrow from '../../assets/left_carroussel.webp'
import rightArrow from '../../assets/right_carroussel.webp'
import { useParams } from 'react-router-dom'

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  @media (max-width: 768px) {
    height: unset;
  }
`

const CarouselContent = styled.div`
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  display: flex;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border-radius: 25px;
`

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`

const LeftArrow = styled(Arrow)`
  left: 20px;
`

const RightArrow = styled(Arrow)`
  right: 20px;
`

const Carousel = () => {
  // Initialiser les variables d'état
  const [current, setCurrent] = useState(0) // index actuel de l'image affichée
  const [setScrollPosition] = useState(0) // position de défilement horizontal du carrousel

  // Gestionnaire d'événements pour faire défiler le carrousel
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft) // mettre à jour la position de défilement
  }

  // Gestionnaire d'événements pour cliquer sur le bouton flèche gauche
  const handleLeftArrowClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1) // passer à l'image précédente
  }

  // Gestionnaire d'événements pour cliquer sur le bouton flèche droite
  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) // passer à l'image suivante
  }

  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)

  const length = logement.pictures.length // nombre de photos pour le logement actuel

  return (
    <CarouselContainer>
      {/* Afficher le bouton fléché vers la gauche uniquement lorsqu'il y a plus d'une image */}
      {length > 1 && (
        <LeftArrow
          src={leftArrow}
          alt="Left arrow"
          onClick={handleLeftArrowClick}
        />
      )}

      {/* Conteneur de contenu du carrousel */}
      <CarouselContent id="carousel" onScroll={handleScroll}>
        {/* Cartographier les images et afficher uniquement l'image qui correspond à l'index actuel */}
        {logement.pictures.map(
          (picture, index) =>
            index === current && (
              <CarouselImg
                key={picture}
                src={picture}
                alt="Photo du logement"
              />
            )
        )}
      </CarouselContent>

      {/* Afficher le bouton fléché vers la droite uniquement lorsqu'il y a plus d'une image */}
      {length > 1 && (
        <RightArrow
          src={rightArrow}
          alt="Right arrow"
          onClick={handleRightArrowClick}
        />
      )}
    </CarouselContainer>
  )
}

export default Carousel
