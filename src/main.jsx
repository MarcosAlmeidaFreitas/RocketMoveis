import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyle  from './styles/global'

import theme from './styles/theme.js'

import { CreateMoveis } from './pages/CreateMoveis'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CreateMoveis/>
    </ThemeProvider>
  </React.StrictMode>,
)
