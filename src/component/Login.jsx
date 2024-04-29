
import React, {useState} from 'react'
import { json, useNavigate } from 'react-router-dom';



export default function Login() {
    
  const history =useNavigate();
  const [inpval,setInpval]=useState({
  
    email:"",
  
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
   const addData=(e)=>{
  e.preventDefault();
  const getuserArr =localStorage.getItem("userinfo");
  console.log(getuserArr);
  const {email,password} =inpval;
      
      if(email===''){
        alert("Email field is required")
      }
      else if(!email.includes('@')){
        alert('please enter vaild email address')
      }
    
      else if( password===''){
        alert('password field is required')
      }
  else if(password.length<5){
    alert('Password lenght greater than five ')
 
  }
  else{
    if(getuserArr && getuserArr.length){
      const userdata= JSON.parse(getuserArr);
     const userlogin=userdata.filter((el,k)=>{
      return el.email===email&&el.password===password

     })
     if(userlogin.length===0){
      alert("invalid details")
     }else{
      console.log('user login succesfully')
      logcalStorage.setItem("user_login",JSON.stringify(userlogin))
      history('/details')
     }
    }
    
  }
  
   }
  
  return (
    
      <div> 
    <div className='container'>
        <section className='display'>
            <div className='left_data'>
                <h2 className='heading'>Sign In</h2>
                <form>
                  
                    <div className='form-group'>
                      <input type='email'  name='email'  onChange={getdata}  placeholder='Your Email'></input>
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
                <button className='button' onClick={addData}>Submit</button>
              </div>
                </form>
                
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
