import React from 'react'

import * as S from './Header.styles'
import { headerItems } from './Header.config'
import { Dropdown } from './components/Dropdown'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        {
          headerItems.map(item => ((
            item.options
              ? <Dropdown item={item} />
              : <S.HeaderItem key={item.id} onClick={item.onClick} className='header-item'>
                  { item.name }
                </S.HeaderItem>
          )))
        }
      </S.HeaderWrapper>
    </S.HeaderContainer>
  )
}
