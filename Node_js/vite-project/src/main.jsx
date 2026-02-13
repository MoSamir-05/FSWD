import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycomp from './mycomp.jsx'
import Home from './home.jsx'
import Contain from './contain.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'
import Menu from './menu.jsx'
import './main.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Mycomp/> */}
    <Home />
  </StrictMode>,
)
