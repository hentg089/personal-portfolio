import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/General.css"
import "./styles/Contact.css"
import './styles/Resume.css'
import './styles/Home.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
