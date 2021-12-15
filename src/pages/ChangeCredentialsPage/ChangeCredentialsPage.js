import React, { useState } from 'react'


import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import * as S from './ChangeCredentialsPage.styles'
import { LayoutStandard } from '../../layouts/Standard'
import { StorageService } from '../../services/StorageService'

const initialForm = {
  oldUsername: '',
  oldPassword: '',
  newUsername: '',
  newPassword: '',
}

export const ChangeCredentialsPage = ({
  history
}) => {
  const [form, setForm] = useState(initialForm)
  
  const changeCredentials = () => {
    const oldCreds = StorageService.get('creds', { isObject: true })

    if (oldCreds.username !== form.oldUsername || oldCreds.password !== form.oldPassword) {
      alert('Հին մուտքանունը կամ գաղտնաբառը չի համընկնում')
      return
    }

    StorageService.set('creds', {
      username: form.newUsername,
      password: form.newPassword
    })

    setForm(initialForm)

    alert('Տվյալները հաջողությամբ պահպանվեցին')
  }

  return (
    <LayoutStandard>
      <S.ChangeCredentialsPageContainer>
        <S.FormContainer>
          <S.FormTitle>
            Փոփոխել տվյալները
          </S.FormTitle>
          <Input
            value={form.oldUsername}
            label='Հին մուտքանուն'
            onChange={value => setForm({
              ...form,
              oldUsername: value
            })}
          />
          <Input
            value={form.oldPassword}
            type='password'
            label='Հին գաղնտաբառ'
            onChange={value => setForm({
              ...form,
              oldPassword: value
            })}
          />
          <Input
            value={form.newUsername}
            label='Նոր մուտքանուն'
            onChange={value => setForm({
              ...form,
              newUsername: value
            })}
          />
          <Input
            value={form.newPassword}
            type='password'
            label='Նոր գաղնտաբառ'
            onChange={value => setForm({
              ...form,
              newPassword: value
            })}
          />
          <S.ButtonsContainer>
            <Button
              className='secondary'
              onClick={() => history.push('/login')}
            >
              Չեղարկել
            </Button>
            <Button onClick={changeCredentials}>
              Պահպանել
            </Button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.ChangeCredentialsPageContainer>
    </LayoutStandard>
  )
}