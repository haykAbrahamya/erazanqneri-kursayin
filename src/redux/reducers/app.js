import { APP_TYPES } from "../types/app"

const initialState = {
  ready: false
}

export const app = (state = initialState, action) => {
  switch(action.type) {
    case APP_TYPES.INIT_APP:
      return {
        ...state,
        ready: true
      }
    default:
      return state
  }
}