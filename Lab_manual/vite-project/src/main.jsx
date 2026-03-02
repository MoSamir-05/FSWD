import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sayCollege, sayCourse } from './Question/studInfo.jsx';
import {Item,Feedback,ItemDetail} from './Question/Q13.jsx'
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> 
    
    <div><h1>Question 12:</h1>
    <h1>{sayCollege()}</h1>
    <h1>{sayCourse()}</h1>
    </div>
    <ItemDetail/>
    */
    }
    <App/>

  </StrictMode>,
)
