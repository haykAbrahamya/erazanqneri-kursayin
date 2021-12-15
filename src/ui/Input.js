import React from "react"
import styled from "styled-components"


import { CenteredFlex } from "./styles"

export const Input = ({
  label,
  onChange,
  ...rest
}) => {
  return (
    <InputContainer>
      {
        label &&
          <Label>{label}</Label>
      }
      <StyledInput
        onChange={e => onChange(e.target.value)}
        {...rest}
      />
    </InputContainer>
  )
}

const InputContainer = styled(CenteredFlex)`
  gap: 10px;
  width: 100%;
`

const Label = styled.label`
  color: #141414;
  width: 220px;
  white-space: pre;
`
const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  background: #fff;
  border: 2px solid #ff54a7;
  border-radius: 7px;
  outline: none;
  font-size: 16px;
`