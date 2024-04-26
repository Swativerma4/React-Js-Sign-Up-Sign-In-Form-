

import { useState } from 'react';
import Header from './component/Header';
import './index.css';
import Home from './component/Home';
function App() {
  
const [theme,setTheme]=useState("light");
  return (
    <div className={`container ${theme}`}>

        <Header theme={theme} setTheme={setTheme}/>
        <Home/>
    </div>
  )
}

export default App
