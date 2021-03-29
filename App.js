import React from 'react'
import StoreWrapper from './src/store'
import AppContainer from './src/navigation'

import './src/locales'

export default function App() {
  return (
    <StoreWrapper>
      <AppContainer />
    </StoreWrapper>
  )
}
