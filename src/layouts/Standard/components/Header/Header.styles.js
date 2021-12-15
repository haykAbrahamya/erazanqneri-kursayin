import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: calc(100% - 60px);
  padding: 0px 30px;
  position: fixed;
  align-items: center;
  gap: 30px;
  z-index: 105;
`

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 30px 10px;
  width: 100%;
  border-bottom: 1px solid #ff54a7;

  .header-item {
    border-right: 1px solid #ff54a7;
    &:last-child {
      border-right: 0px;
    }
  }
`

export const HeaderItem = styled.div`
  cursor: pointer;
  padding: 0px 15px;
`