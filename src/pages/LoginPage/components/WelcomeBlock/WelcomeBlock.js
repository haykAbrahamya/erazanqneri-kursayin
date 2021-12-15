import React, { useEffect } from 'react'


import * as S from './WelcomeBlock.styles'
import AddPic from '../../../../images/add.png'

export const WelcomeBlock = ({ onAnimationEnd }) => {
  useEffect(() => {
    // setTimeout(onAnimationEnd, 10000)
  }, [onAnimationEnd])

  return (
    <S.WelcomeBlockContainer className=''>
      <S.InfoText>
        Հայկ Աբրահամյան
      </S.InfoText>
      <S.InfoText>
        Գրաֆներ ստեղծելու և ալգորիթմներ աշխատացնելու վիզուալ համակարգ web միջավայրում
      </S.InfoText>
      <S.AnimationContainer>
        <img
          src={AddPic}
          alt='add-pic'
          // className='welcome-block'
        />
      </S.AnimationContainer>
      <S.InfoText>
        Կուրսային աշխատանք
      </S.InfoText>
    </S.WelcomeBlockContainer>
  )
}