import React, { useState } from "react";
import "./Home.css";
import day from "../assets/sign.png"; 
import night from "../assets/computer.png"; 
import { NavLink } from "react-router-dom";

export default function Home({ theme }) {
  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    date: '',
    password: ''
  });
  const [data, setData] = useState([]);

  const getdata = (e) => {
    const { value, name: inputName } = e.target;
    setInpval({
      ...inpval,
      [inputName]: value
    });
  };

  const adddata = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpval;
    if (name === '') {
      alert('Name field is required');
    } else if (email === '') {
      alert('Email field is required');
    } else if (!email.includes('@')) {
      alert('Please enter a valid email address');
    } else if (date === '') {
      alert('Date field is required');
    } else if (password === '') {
      alert('Password field is required');
    } else if (password.length < 5) {
      alert('Password length should be greater than five');
    } else {
      console.log('Data added successfully');
      localStorage.setItem('userinfo', JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div>
      <div className='container'>
        <section className='display'>
          <div className='left_data'>
            <h2 className='heading'>Sign Up</h2>
            <form>
              <div className='form-group'>
                <input type='text' name='name' onChange={getdata} placeholder='Your Name' />
              </div>
              <div className='form-email'>
                <div className='form-group'>
                  <input type='email' name='email' onChange={getdata} placeholder='Your Email' />
                </div>
              </div>
              <div className='form-group'>
                <input type='date' name='date' onChange={getdata} placeholder='Your DOB' />
              </div>
              <div className='form-group'>
                <input type='password' name='password' onChange={getdata} placeholder='Your Password' />
              </div>
              <div className='form-group'>
                <label htmlFor='rememberMe'>
                  <input type='checkbox' name='rememberMe' /> Remember Me
                </label>
              </div>
              <div className='submit'>
                <button className='button' onClick={adddata}>Submit</button>
              </div>
            </form>
            <p className='link'>
              Already Have an Account <span><NavLink to='/login'>SignIn</NavLink></span>
            </p>
          </div>
          <div className='right-data'>
            <div className='sign-img'>
              <img src={theme === 'light' ? day : night} alt=""  className={theme === 'light' ? 'day-logo' : 'night-logo'}/> 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
