

import { useState } from 'react';
import Header from './component/Header';
import './index.css';



function App() {
  
const [theme,setTheme]=useState("light");
  return (
    <div className={`container ${theme}`}>

        <Header theme={theme} setTheme={setTheme}/>
  
        
    </div>
  );
}

export default App;
