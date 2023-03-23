import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import redStar from '../../assets/red_star.webp'
import grayStar from '../../assets/gray_star.webp'

const Rating = styled.div`
  font-weight: bold;
  align-self: flex-end;
`

const Rate = styled.div`
  display: flex;
  align-items: center;
`

const StarImage = styled.img`
  margin-right: 5px;
`

const RatingInformation = () => {
  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)
  const { rating } = logement

  const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)
  
  return (
    <Rating>
      <Rate>
        {stars.map((star, index) => (
          <StarImage src={star} key={index} alt="star" />
        ))}
      </Rate>
    </Rating>
  )
}
export default RatingInformation
