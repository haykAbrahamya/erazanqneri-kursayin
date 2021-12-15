import React, { useEffect, useState } from 'react'


import * as S from './AuthorModal.styles'
import AddPic from '../../images/reclam.jpg'
import { Button } from '../../ui/Button'

export const AuthorModal = ({ hideModal }) => {
  const [currentColor, setCurrentColor] = useState('#141414')

  useEffect(() => {
    setInterval(() => {
      setCurrentColor(currentColor === '#141414' ? '#ff1989' : '#141414')
    }, 2000)
  }, [currentColor, setCurrentColor])

  return (
    <S.ModalContainer>
      <S.InformationsList color={currentColor}>
        <S.InfoText>
          Լուսինե Սարգսյան Թաթուլի
        </S.InfoText>
        <S.InfoText>
          Երևանի Ինֆորմատիկայի Պետական Քոլեջ
        </S.InfoText>
        <S.InfoText>
          Ժամկետ - Մեկ շաբաթ
        </S.InfoText>
        <S.InfoText>
          Ստանալ մատրիցան այնպես, որ տողերի սյուների և անկյունագծերի գումարը իրար հավասար լինեն:
        </S.InfoText>
      </S.InformationsList>
      <S.AddPic src={AddPic} />
      <Button onClick={hideModal}>
        Ok
      </Button>
    </S.ModalContainer>
  )
}