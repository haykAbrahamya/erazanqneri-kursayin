import styled from 'styled-components'


export const ModalsContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0px;
  top: 90px;
  width: 100%;
  height: calc(100% - 90px);
  z-index: 102;
  justify-content: center;
  align-items: center;

  .react-draggable {
    position: absolute;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: ${({ isActive }) => isActive ? 1 : 0};
  color: #141414;
  background: #fff;
  border: 2px solid #ff54a7;
`

export const ModalContent = styled.div`
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px 5px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #ff54a7;
`

export const CloseIcon = styled.img`
  width: 30px;
  cursor: pointer;
`

export const ModalName = styled.div`
  font-weight: bold;
  color: #141414;
`
