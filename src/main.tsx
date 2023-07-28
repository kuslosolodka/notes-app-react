import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { GlobalStyle } from './assets/styles/global-style.ts'

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <GlobalStyle />

        <App />
    </React.StrictMode>
)
