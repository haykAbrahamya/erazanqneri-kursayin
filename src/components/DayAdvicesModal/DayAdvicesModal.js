import React, { useState } from 'react'
import { Button } from '../../ui/Button'


import { dayAdvices } from './DayAdvicesModal.config'
import * as S from './DayAdvicesModal.styles'

const getRandomAdvice = () =>
  dayAdvices[Math.floor(Math.random()*dayAdvices.length)]

export const DayAdvicesModal = ({ hideModal }) => {
  const [currentAdvice, setCurrentAdvice] = useState(getRandomAdvice())

  const showNextAdvice = () => {
    setCurrentAdvice(getRandomAdvice())
  }

  return (
    <S.ModalContainer>
      <S.AdviceContent>
        { currentAdvice.text }
      </S.AdviceContent>
      <S.NextAdviceContainer>
        <Button onClick={showNextAdvice}>
          Հաջորդը
        </Button>
        <Button onClick={hideModal} className='secondary'>
          Փակել
        </Button>
      </S.NextAdviceContainer>
    </S.ModalContainer>
  )
}