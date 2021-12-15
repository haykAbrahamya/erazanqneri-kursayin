import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'


import * as S from './Dropdown.styles'

export const Dropdown = ({
  item
}) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <S.DropdownContainer className='dropdown-container header-item'>
      <OutsideClickHandler onOutsideClick={() => setIsOpened(false)}>
        <S.DropdownTitle onClick={() => setIsOpened(true)}>
          { item.name }
        </S.DropdownTitle>
        {
          isOpened &&
            <S.DropdownContent>
              {
                item.options.map(option => ((
                  <S.Option>
                    { option.name }
                  </S.Option>
                )))
              }
            </S.DropdownContent>
        }
      </OutsideClickHandler>
    </S.DropdownContainer>
  )
}