import React from "react"
import {
  Route,
  Switch,
  Redirect,
  Router,
} from 'react-router-dom'

import {
  HomePage,
  LoginPage,
  ChangeCredentialsPage
} from "../../../pages"
import { history } from "../../../system/history"

export const Routes = ({
  loggedIn
}) => {
  return (
    <Router history={history}>
      <Switch>
          <Route path='/change-credentials' component={ChangeCredentialsPage} />
        {
          !loggedIn &&
            <Route path='/login' component={LoginPage}/>
        }
        {
          loggedIn &&
            <Route path='/home' component={HomePage} />
        }
        {
          loggedIn &&
            <Redirect to='/home' />
        }
        {
          !loggedIn &&
            <Redirect to='/login' />
        }
      </Switch>
    </Router>
  )
}