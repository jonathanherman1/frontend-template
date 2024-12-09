import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Providers } from './Providers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Providers>
  </StrictMode>,
)
