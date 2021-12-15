import styled from 'styled-components'


export const MatrixContainer = styled.div`
  display: flex;
  width: min-content;
  flex-direction: column;
  border: 1px solid #ff54a7;
`


export const ScrollWrapper = styled.div`
overflow-y: auto;
max-height: 300px;
max-width: 458px;

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ff54a7;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ff1989;
}
`

export const MatrixRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ff54a7;

  &:last-child {
    border-bottom: none;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 500px;

  .create-button {
    width: 250px;
  }

  input {
    height: 26px;
  }
`

export const Sum = styled.div`
  font-size: 24px;
  color: #141414;
`

export const MatrixItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 30px;
  border-right: 1px solid #ff54a7;
  height: 30px;

  &:last-child {
    border-right: none;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`