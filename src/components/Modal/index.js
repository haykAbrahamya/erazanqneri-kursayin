import { connect } from 'react-redux'


import { Modal as Self } from './Modal'
import {
  hideAll,
  hideModal,
  showModal
} from '../../redux/actions/modal'

const mapStateToProps = ({ modal }) => ({
  modalsList: modal.list,
  lastModalId: modal.list[modal.list.length - 1]?.id
})

const mapDispatchToProps = {
  hideAll,
  showModal,
  hideModal
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(Self)