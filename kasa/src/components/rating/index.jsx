import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import redStar from '../../assets/red_star.webp'
import grayStar from '../../assets/gray_star.webp'

const Rating = styled.div`
  font-weight: bold;
  align-self: flex-end;
  @media (max-width: 1435px) {
    align-self: center;
  }
  
  @media (max-width: 380px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const Rate = styled.div`
  display: flex;
  align-items: center;
`

const StarImage = styled.img`
  margin-right: 5px;
`

// Définition du composant RatingInformation
const RatingInformation = () => {
  // Récupération du paramètre idLogement à partir de l'URL de la page
  const { idLogement } = useParams()
  // Recherche du logement dans la base de données à partir de l'id
  const logement = data.find((product) => product.id === idLogement)
  // Récupération de la note moyenne du logement
  const { rating } = logement

  // Création d'un tableau d'étoiles de 5 éléments, initialisé avec des étoiles grises
  // Puis, remplissage des premiers éléments avec des étoiles rouges en fonction de la note
  const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)

  // Rendu du composant
  return (
    <Rating>
      <Rate>
        {/* Affichage de chaque étoile avec un alt différent selon la couleur rouge ou grise */}
        {stars.map((star, index) => (
          <StarImage
            src={star}
            alt={index < rating ? 'Etoile rouge' : 'Etoile grise'}
            key={index}
          />
        ))}
      </Rate>
    </Rating>
  )
}

export default RatingInformation
