import React from "react"
import { Header } from "./components/Header"


import * as S from './Standard.styles'

export const Standard = ({
  loggedIn,
  children
}) => {
  return (
    <S.LayoutContainer>
      {
        loggedIn &&
          <Header />
      }
      <S.ContentContainer loggedIn={loggedIn}>
        { children }
      </S.ContentContainer>
    </S.LayoutContainer>
  )
}
