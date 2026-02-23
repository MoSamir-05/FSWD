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
import Class_comp from './Class_comp.jsx'
import Std from './Class_comp.jsx'
import SimpleStudentTable from './event.jsx'
import Color_bt from './Class_compo.jsx'
import Fav_color from './Hook_fun.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mycomp/>
    <Home />
    <Std />
    <SimpleStudentTable/>
    <Color_bt/>
    <Fav_color/>
    
  </StrictMode>,
)
