import styled from 'styled-components/macro'


import { CenteredFlex } from '../../../../ui/styles'

export const WelcomeBlockContainer = styled(CenteredFlex)`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 15px;
  padding: 40px 20px;
  text-align: center;
  background: #fff;  
  border-radius: 10px;
  border: 2px solid #ff54a7;
  height: min-content;
  font-size: 18px;

  img {
    width: 50px;
    height: 50px;
  }
`

export const InfoText = styled.div`
  color: #141414;
  font-style: italic;
`

export const AnimationContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 160px;
  align-items: flex-start;
  justfiy-content: flex-start;
`