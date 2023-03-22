import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import colors from '../../utils/style/colors'
import redStar from '../../assets/red_star.webp'
import grayStar from '../../assets/gray_star.webp'

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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const Tag = styled.span`
  background-color: ${colors.secondary};
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 15px;
  color: ${colors.primary};
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Host = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 40px;
  color: ${colors.secondary};
  display: flex;
  width: 75%;
  align-items: center;
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  object-fit: cover;
`

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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const GalleryInformation = () => {
  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)
  const { title, host } = logement
  const { name, picture } = host
  const { rating, location, tags } = logement

  const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)

  return (
    <Wrapper>
      <LeftSection>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Location>{location}</Location>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </LeftSection>
      <RightSection>
        <Host>
          {name}
          <Image src={picture} alt={name} />
        </Host>
        <Rating>
          <Rate>
            {stars.map((star, index) => (
              <StarImage src={star} key={index} alt="star" />
            ))}
          </Rate>
        </Rating>
      </RightSection>
    </Wrapper>
  )
}

export default GalleryInformation
