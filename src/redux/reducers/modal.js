import { v4 as uuid } from 'uuid'
import { AUTH_TYPES } from '../types/auth'

import { MODAL_TYPES } from '../types/modal'

const initialState = {
  list: []
}

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TYPES.SHOW_MODAL:
      const existedModal = state.list.find(item => item.component === action.component)
    console.log({ existedModal })
      return {
        ...state,
        list: existedModal
          ? state.list.filter(el => el.id !== existedModal.id).concat({ ...existedModal, id: uuid() })
          : state.list.concat({
              id: uuid(),
              component: action.component,
              componentProps: action.componentProps
            })
      }
    case MODAL_TYPES.HIDE_MODAL:
      return {
        ...state,
        list: state.list.filter(el => el.id !== action.modalId)
      }
    case MODAL_TYPES.HIDE_ALL:
      return {
        ...state,
        list: []
      }
    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}