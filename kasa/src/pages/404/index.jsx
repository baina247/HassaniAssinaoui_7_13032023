import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 288px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.secondary};
  margin-bottom: 24px;
`

const ErrorSubtitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  display: flex;
  align-items: flex-end;
  color: ${colors.secondary};
`

const ErrorBackToHome = styled.a`
  font-style: normal;
  margin: 125px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: flex-end;
  text-decoration-line: underline;
  color: ${colors.secondary};
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
