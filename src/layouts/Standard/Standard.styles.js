import styled from "styled-components/macro"


export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f7f1eb;
  overflow: hidden;
  flex-direction: column;
  position: relative;
`

export const ContentContainer = styled.div`
  padding: 30px;
  height: 100%;
  margin-top: ${({ loggedIn }) => loggedIn ? 82 : 0}px;

  > div {
    width: 100%;
    height: 100%;
  }
`