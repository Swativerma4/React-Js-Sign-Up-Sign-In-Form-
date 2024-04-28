import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
// import { BrowserRouter, Router } from 'react-router-dom'
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
       <App />
       <Home/>
  
   </React.StrictMode>,
 )

