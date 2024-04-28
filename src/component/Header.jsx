import React from 'react'
import './Header.css'
import logo1 from '../assets/logo-black.png'
import logo2 from '../assets/logo-white.png'
import toggle1 from '../assets/day.png'
import toggle2 from '../assets/night.png'

export default function Header({theme,setTheme}) {
  const toggle_mode=()=>{
    theme=='light'? setTheme('dark'):setTheme('light')

  }
  return (

    <div className='navbar'>
      <img src={theme==='light'?logo1:logo2} alt="" className='logo'></img>
        <ul type="none" >
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
        </ul>
        <img onClick={()=>{toggle_mode()}  }  src={theme==='light'? toggle2 :toggle1} alt=" " className='toggle-icon' ></img>
    </div>

  )
}
