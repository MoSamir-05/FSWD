import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycomp from './mycomp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */
    <Mycomp/>}

  </StrictMode>,
)
