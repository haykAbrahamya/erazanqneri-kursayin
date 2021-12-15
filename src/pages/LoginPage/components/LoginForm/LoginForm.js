import React, { useState } from 'react'


import * as S from './LoginForm.styles'
import { Input } from '../../../../ui/Input'
import { Button } from '../../../../ui/Button'
import { AuthService } from '../../../../services/AuthService'
import { useHistory } from 'react-router'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const login = () => {
    if (AuthService.login(username, password)) {
      history.push('/home')
    } else {
      alert('Մուտքագրված տվյալները սխալ են')
    }
  }

  return (
    <S.LoginFormContainer>
      <Input
        value={username}
        label='Մուտքանուն'
        onChange={value => setUsername(value)}
      />
      <Input
        value={password}
        type='password'
        label='Գաղտնաբառ'
        onChange={value => setPassword(value)}
      />
      <S.ChangePassword to='/change-credentials'>
        Փոփոխել անձնական տվյալները
      </S.ChangePassword>
      <S.ButtonsContainer>
        <Button onClick={login}>
          Մուտք
        </Button>
      </S.ButtonsContainer>
    </S.LoginFormContainer>
  )
}