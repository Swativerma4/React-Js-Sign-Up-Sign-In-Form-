

import { useState } from 'react';
import Header from './component/Header';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';


function App() {
  
const [theme,setTheme]=useState("light");
  return (
    <div className={`container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>

        <Header theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home theme={theme}/>}/>
          <Route path='/login' element={<Login theme={theme}/>}/>
         
        </Routes>
      
  
        
    </div>
  );
}

export default App;
