import { history } from '../../system/history'
import { StorageService } from '../../services/StorageService'
import { AUTH_TYPES } from "../types/auth"

export const setAuthData = (authData) => ({
  type: AUTH_TYPES.SET_AUTH_DATA,
  user: authData
})

export const login = ({ username, password }) => dispatch => {
    const user = {
      username,
      password
    }

    history.push('/home')
    dispatch(setAuthData(user))
    StorageService.set('authData', user)
}

export const logout = () => ({
  type: AUTH_TYPES.LOGOUT
})