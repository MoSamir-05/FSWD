import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sayCollege, sayCourse } from './Question/studInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <h1>{sayCollege()}</h1>
      <h1>{sayCourse()}</h1>
  </StrictMode>,
)
