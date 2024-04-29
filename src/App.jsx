

import { useState } from 'react';
import Header from './component/Header';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';


function App() {
  
const [theme,setTheme]=useState("light");
  return (
    <div className={`container ${theme}`}>

        <Header theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
         
        </Routes>
      
  
        
    </div>
  );
}

export default App;
