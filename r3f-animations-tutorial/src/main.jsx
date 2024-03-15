import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.jsx'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>
)
