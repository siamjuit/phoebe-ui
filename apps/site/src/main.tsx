import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@phoebe-ui/core'
import App from './App'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TooltipProvider>
                <App />
            </TooltipProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
