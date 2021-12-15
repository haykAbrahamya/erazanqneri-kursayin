import React from 'react'
import { Button } from '../../ui/Button'


import * as S from './HelpModal.styles'

export const HelpModal = ({ hideModal }) => {
  return (
    <S.ModalContainer>
      <S.HowToUseProgram>
        <div>Ծրագիրը ստեղծված է React js տեխնոլոգիայով և իրենից ներկայացնում է վեբ կայք: Ծրագիրն աշխատացնելու համար հարկավոր է օգտագործել npm start հրամանը: </div>
        <div>Կան հետևյալ բաժինները` Օրվա խորհուրդներ, Օգնություն, Հեղինակ:</div>
        <div>Ելք հրամանը նախատեսված է ծրագրից դուրս գալու համար</div>
        <div>Փակել բոլորը հրամանի օգնությամբ կփակվեն բոլոր բացված պատուհանները</div>
      </S.HowToUseProgram>
      <Button onClick={hideModal}>
        Ելք
      </Button>
    </S.ModalContainer>
  )
}