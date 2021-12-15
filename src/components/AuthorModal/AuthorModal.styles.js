import styled from 'styled-components'


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
`

export const InformationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ color }) => color};
  transition: color 0.3s ease;
`

export const InfoText = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid gray;

  &:last-child {
    border-bottom: none;
  }
`

export const AddPic = styled.img`
  margin-top: 20px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`
