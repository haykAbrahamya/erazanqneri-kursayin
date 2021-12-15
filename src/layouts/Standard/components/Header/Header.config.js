import store from '../../../../redux/store'
import { HelpModal } from "../../../../components/HelpModal"
import { hideAll, showModal } from "../../../../redux/actions/modal"
import { DayAdvicesModal } from "../../../../components/DayAdvicesModal"
import { AuthorModal } from '../../../../components/AuthorModal'
import { ConfirmationModal } from '../../../../components/ConfirmationModal'
import { AuthService } from '../../../../services/AuthService'
import { ProblemModal } from '../../../../components/ProblemModal'

export const headerItems = [
  {
    id: 1,
    name: 'Խնդիր',
    onClick: () =>
      store.dispatch(showModal(ProblemModal, { name: 'Խնդիր' }))
  },
  {
    id: 2,
    name: 'Օրվա խորհուրդներ',
    onClick: () =>
      store.dispatch(showModal(DayAdvicesModal, { name: 'Օրվա խորհուրդներ' }))
  },
  {
    id: 3,
    name: 'Օգնություն',
    onClick: () =>
      store.dispatch(showModal(HelpModal, { name: 'Օգնություն' }))
  },
  {
    id: 4,
    name: 'Դասավորել',
    options: [
      {
        id: 1,
        name: 'Հորիզոնական',
      },
      {
        id: 2,
        name: 'Հերթականությամբ'
      }
    ]
  },
  {
    id: 5,
    name: 'Փակել բոլորը',
    onClick: () =>
      store.dispatch(hideAll())
  },
  {
    id: 6,
    name: 'Հեղինակ',
    onClick: () =>
      store.dispatch(showModal(AuthorModal, { name: 'Հեղինակ' }))
  },
  {
    id: 7,
    name: 'Ելք',
    onClick: () =>
      store.dispatch(showModal(ConfirmationModal, { dragDisabled: true, onOk: () => AuthService.logout() }))
  },
]