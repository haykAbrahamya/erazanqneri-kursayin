import styled from 'styled-components'


export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 15px;
  left: -28px;
  top: 52px;
  gap: 5px;
  box-shadow: 0 4px 20px -3px #ff54a7;
  border-right: 2px solid #ff54a7;
  border-left: 2px solid #ff54a7;
`

export const Option = styled.div`
  cursor: pointer;
  padding: 3px;
  text-align: center;
`

export const DropdownTitle = styled.div`
  cursor: pointer;
  padding: 0px 15px;
`