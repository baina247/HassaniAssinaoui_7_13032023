import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  @media (max-width: 425px) {
    bottom: -4rem;
  }
`

const ErrorText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 12vw;
  display: flex;
  color: ${colors.secondary};
  margin-bottom: 3vw;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 24vw;
  }

  @media (max-width: 425px) {
    font-size: 26vw;
  }
`

const ErrorSubtitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8vw;
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${colors.secondary};
  @media (max-width: 768px) {
    font-size: 3.6vw;
  }

  @media (max-width: 425px) {
    font-size: 3.8vw;
  }
`

const ErrorBackToHome = styled.a`
  font-style: normal;
  margin: 7vw;
  font-weight: 500;
  font-size: 1vw;
  display: flex;
  width: 100%;
  justify-content: center;
  text-decoration-line: underline;
  color: ${colors.secondary};
  @media (max-width: 768px) {
    font-size: 2vw;
  }

  @media (max-width: 425px) {
    font-size: 2.2vw;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>404</ErrorText>
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorBackToHome href="/">
        Retourner sur la page d'accueil
      </ErrorBackToHome>
    </ErrorWrapper>
  )
}

export default Error
