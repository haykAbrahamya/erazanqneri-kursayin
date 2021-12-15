import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'


import * as S from './Modal.styles'
import CloseIcon from '../../images/close.png'

export const Modal = ({
  hideAll,
  lastModalId,
  hideModal,
  showModal,
  modalsList
}) => {
  const [activeModalId, setActiveModalId] = useState(lastModalId)
  console.log({ activeModalId })

  useEffect(() => {
    setActiveModalId(lastModalId)
  }, [
    lastModalId,
    setActiveModalId,
    modalsList.length
  ])

  const onDragModal = (modalId) => {
    if (modalId !== activeModalId)
      setActiveModalId(modalId)
  }

  if (!modalsList.length) return null 

  return (
    <S.ModalsContainer>
      {
        modalsList.map(modal => {
          return (
            <Draggable
              key={modal.id}
              bounds='parent'
              disabled={modal.componentProps.dragDisabled}
            >
              <S.ModalWrapper
                className='modal-wrapper'
                isActive={modal.id === activeModalId}
                onMouseDownCapture={() => onDragModal(modal.id)}
              >
                <S.ModalHeader className='modal-header'>
                  <S.ModalName>{ modal.componentProps.name }</S.ModalName>
                  <S.CloseIcon
                    src={CloseIcon}
                    onClick={() => hideModal(modal.id)}
                  />
                </S.ModalHeader>
                <S.ModalContent className='modal-content'>
                  <modal.component
                    {...modal.componentProps}
                    hideModal={() => hideModal(modal.id)}
                  />
                </S.ModalContent>
              </S.ModalWrapper>
            </Draggable>
          )
        })
      }
    </S.ModalsContainer>
  )
}