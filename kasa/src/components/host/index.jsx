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
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  object-fit: cover;
`

const HostInformation = () => {
  const { idLogement } = useParams()
  const logement = data.find((product) => product.id === idLogement)
  const { host } = logement
  const { name, picture } = host

  return (
    <Host>
      {name}
      <Image src={picture} alt={name} />
    </Host>
  )
}

export default HostInformation
