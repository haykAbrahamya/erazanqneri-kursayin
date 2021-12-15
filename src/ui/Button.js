import React from "react"
import styled from 'styled-components'


import { CenteredFlex } from "./styles"

export const Button = ({
  onClick,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest} onClick={onClick}>
      { children }
    </ButtonContainer>
  )
}

const ButtonContainer = styled(CenteredFlex)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #ff54a7;
  color: #fff;
  padding: 10px;
  min-width: 100px;
  height: 30px;
  border-radius: 7px;
  transition: all 0.3s ease;

  &.secondary {
    background: #fff;
    color: #141414;
    border: 1px solid #ff54a7;

    &:hover {
      border-color: #ff1989;
      background: #fff;
    }
  }

  &:hover {
    background: #ff1989;
  }
`