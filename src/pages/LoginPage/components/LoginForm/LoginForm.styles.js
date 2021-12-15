import { Link } from "react-router-dom"
import styled from "styled-components"


import { CenteredFlex } from "../../../../ui/styles"

export const LoginFormContainer = styled(CenteredFlex)`
  gap: 15px;
  height: min-content;
  flex-direction: column;
  padding: 30px;
  width: 340px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #ff54a7;
`

export const ButtonsContainer = styled.div`
  gap: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ChangePassword = styled(Link)`
  color: #ff1989;
  cursor: pointer;
  margin: 5px 0px;
  font-style: italic;
  text-decoration: none;
`