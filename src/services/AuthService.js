import store from '../redux/store'
import { StorageService } from './StorageService'
import { logout, setAuthData } from '../redux/actions/auth'

export class AuthService {
  static login (username, password) {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);

    // if (AuthService.passwordHash === hash) return true

    const creds = StorageService.get('creds', { isObject: true })

    if (creds.username === username && creds.password === password) {
      const user = {
        username,
        password
      }
  
      store.dispatch(setAuthData(user))
      StorageService.set('authData', user)

      return true
    }

    return false
  }

  static logout () {
    StorageService.remove('authData')
    store.dispatch(logout())
  }
}