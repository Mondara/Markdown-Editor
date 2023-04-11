import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeContextProvider, MarkdownProvider } from './context'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MarkdownProvider>
        <App />
      </MarkdownProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
