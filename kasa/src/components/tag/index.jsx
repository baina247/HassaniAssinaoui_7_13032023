import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import colors from '../../utils/style/colors'

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

const TagInformation = () => {
  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)
  const { tags } = logement
  return (
    <Tags>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  )
}
export default TagInformation
