import React, { useState } from 'react'
import './Home.css'
export default function Home() {

  const [inpval,setInpval]=useState({
    name:'',
    email:"",
    date:"",
    password:""
  })
  const[data,setData]=useState([]);
  console.log(inpval);
  const getdata = (e) => {
    const { value, name: inputName } = e.target; 
        setInpval({
      ...inpval,
      [inputName]: value
    });
  }
   const adddata=(e)=>{
  e.preventDefault();
  const {name,email,date,password} =inpval;
      if(name===''){
        alert("Name field is required")
      }
      else if(email===''){
        alert("Email field is required")
      }
      else if(!email.includes('@')){
        alert('please enter vaild email address')
      }
      else if(date===''){
        alert("date field is required")
      }
      else if( password===''){
        alert('password field is required')
      }
  else if(password.length<5){
    alert('Password lenght greater than five ')
 
  }
  else{
    console.log('data added succesfully')
  }
  localStorage.setItem("userinfo",JSON.stringify([...data,inpval]));
         
   }
  return (
    <div> 
    <div className='container'>
        <section className='display'>
            <div className='left_data'>
                <h2 className='heading'>Sign Up</h2>
                <form>
                    <div className='form-group'>
                      <input type='text' name='name' onChange={getdata}  placeholder='Your Name'></input>
                    </div>
                    <div className='form-group'>
                      <input type='email'  name='email'  onChange={getdata}  placeholder='Your Email'></input>
                    </div>
                    <div className='form-group'>
                      <input type='date' name='date' onChange={getdata}  placeholder='Your DOB'></input>
                    </div>
                    <div className='form-group'>
                      <input type='password' name ='password' onChange={getdata} placeholder='Your Password'></input>
                    </div>
                    <div className='form-group'>
                <label htmlFor='rememberMe'>
                  <input type='checkbox' name='rememberMe'></input> Remember Me
                </label>
              </div>
              <div className='submit'>
                <button className='button' onClick={adddata}>Submit</button>
              </div>
                </form>
                <p>Already Have an Account <span>SignIn</span></p>
            </div>
            <div className='right-data'>
              <div className='sign-img'>
                <img src="src/assets/sign.svg"></img>
              </div>
            </div>

        </section>
    </div>
      
    </div>
  )
}
