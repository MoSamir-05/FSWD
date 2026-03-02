import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sayCollege, sayCourse } from './Question/studInfo_Q14.jsx';
import {Item,Feedback,ItemDetail} from './Question/Q13.jsx'
import Dashboard from './Question/Q15.jsx';
import Q16 from './Question/Q16.jsx';
import Department from './Question/Q17.jsx';
import StateDetail from './Question/Q18.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    <div><h1>Question 12:</h1>
    <h1>{sayCollege()}</h1>
    <h1>{sayCourse()}</h1>
    </div>
    <ItemDetail/>
    <Dashboard/>
    <Q16/>
    <Department/>
    */}
    <StateDetail/>

  </StrictMode>,
)
