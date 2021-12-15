import { combineReducers } from 'redux'


import { app } from './app'
import { auth } from './auth'
import { modal } from './modal'

export const rootReducer = combineReducers({
  app,
  auth,
  modal
})