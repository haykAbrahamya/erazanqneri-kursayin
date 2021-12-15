import styled from "styled-components"


import { CenteredFlex } from "../../ui/styles"

export const ChangeCredentialsPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled(CenteredFlex)`
  gap: 15px;
  height: min-content;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #ff54a7;

  label {
    width: 300px;
  }
`

export const ButtonsContainer = styled.div`
  gap: 15px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ChangePassword = styled.div`
  color: #ff1989;
  cursor: pointer;
  margin: 5px 0px;
  font-style: italic;
`

export const FormTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`