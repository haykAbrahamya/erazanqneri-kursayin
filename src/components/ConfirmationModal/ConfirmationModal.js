import React from 'react'
import { Button } from '../../ui/Button'


import * as S from './ConfirmationModal.styles'

export const ConfirmationModal = ({
  onOk,
  onCancel,
  hideModal
}) => {
  return (
    <S.ModalContainer>
      <S.ConfirmationText>
        Դուք ցանկանում եք ավարտել <br /> ձեր աշատանքը
      </S.ConfirmationText>
      <S.ButtonsContainer>
        <Button className='secondary' onClick={onCancel || hideModal}>
          Ոչ
        </Button>
        <Button onClick={onOk}>
          Այո
        </Button>
      </S.ButtonsContainer>
    </S.ModalContainer>
  )
}