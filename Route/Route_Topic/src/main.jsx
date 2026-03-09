import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

import Router_s from './Routers_page.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    
    */}
    <Router_s />
  </StrictMode>,
)
