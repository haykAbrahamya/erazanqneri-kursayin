import React from 'react'
import { ThemeProvider } from 'styled-components'


import { Routes } from './components/Routes'
import { theme } from '../theme'
import { Modal } from '../components/Modal'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modal />
      <Routes />
    </ThemeProvider>
  )
}