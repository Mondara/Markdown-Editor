import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { ThemeContextProvider, MarkdownProvider/*, AuthProvider*/ } from './context'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MarkdownProvider>
        {/* <AuthProvider> */}
        <ToastContainer theme="dark" />
        <App />
        {/* </AuthProvider> */}
      </MarkdownProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
