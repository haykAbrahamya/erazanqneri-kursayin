import React, { useState } from 'react'


import * as S from './LoginPage.styles'
import { LayoutStandard } from '../../layouts/Standard'
import { WelcomeBlock } from './components/WelcomeBlock'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
  const [isAnimationEnded, setIsAnimationEnded] = useState(false)
  
  const onAnimationEnd = () =>
    setIsAnimationEnded(true)

  return (
    <LayoutStandard>
      <S.LoginPageContainer>
        {
          isAnimationEnded
            ? <LoginForm />
            : <WelcomeBlock onAnimationEnd={onAnimationEnd} />
            
        }
      </S.LoginPageContainer>
    </LayoutStandard>
  )
}