import { connect } from 'react-redux'

import { Standard } from './Standard'

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn
})

export const LayoutStandard = connect(mapStateToProps)(Standard)