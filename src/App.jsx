import React from 'react'

import './App.css'
import { Footer, Header, ToggleTheme } from './components'
import { AppRouter } from './router'

export const App = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
      <ToggleTheme/>
    </>
  )
}

