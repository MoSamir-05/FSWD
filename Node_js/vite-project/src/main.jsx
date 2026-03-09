import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// import './index.css'
// import App from './App.jsx'
// import Mycomp from './mycomp.jsx'
// // import Home from './home.jsx'
// import Contain from './contain.jsx'
// import Footer from './footer.jsx'
// import Header from './header.jsx'
// import Menu from './menu.jsx'
// import './main.css'
// import Class_comp from './Class_comp.jsx'
// import Std from './Class_comp.jsx'
// import SimpleStudentTable from './event.jsx'
// import Color_bt from './Class_compo.jsx'
// import Fav_color from './Hook_fun.jsx'
// import Timer from './use_effect_hook.jsx'
// import Counter from '../fun_counter.jsx'
// import Color_bg from '../eve2.jsx'
// import Component1 from '../With_useContext_Hook.jsx'
// import Component11 from '../With_useContext_Hook.jsx'
// import University from '../uni_detail.jsx'
// import React_useRef from './React_useRef.jsx'
// import UseRef_to_focus from './useRef_to_focus.jsx'
// import UseRef_Tracking_State from './useRef_Tracking_State.jsx'

import Router_s from './Route_s/Routers_page.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App />
      <Mycomp/>
      <Home />
      <Std />
      <SimpleStudentTable/>
      <Color_bt/>
      <Fav_color/> 
      <Timer/>
      <Counter/>
      <Color_bg/>
      <Component11/>
      <University/>
      <React_useRef/>
      <UseRef_to_focus/>
      <UseRef_Tracking_State/>
      */}

      <Router_s />
    </BrowserRouter>
  </StrictMode>,
)
