import { MODAL_TYPES } from '../types/modal'

export const showModal = (component, componentProps) => ({
  type: MODAL_TYPES.SHOW_MODAL,
  component,
  componentProps
})

export const hideModal = (modalId) => ({
  type: MODAL_TYPES.HIDE_MODAL,
  modalId
})

export const hideAll = () => ({
  type: MODAL_TYPES.HIDE_ALL
})