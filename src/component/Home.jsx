import React from 'react'

export default function Home() {
  return (
    <div>
    <div className='container'>
        <section>
            <div className='left_data'>
                <h3>Sign Up</h3>
                <form>
                    <div className='form-group'>
                      <input type='text' id='name' placeholder='Your Name'></input>
                    </div>
                    <div className='form-group'>
                      <input type='text' id='email' placeholder='Your Email'></input>
                    </div>
                    <div className='form-group'>
                      <input type='date' id='DOB' placeholder='Your DOB'></input>
                    </div>
                    <div className='form-group'>
                      <input type='password' id='pass' placeholder='Your Password'></input>
                    </div>
                </form>
            </div>
            <div className='right-data'></div>
        </section>
    </div>
      
    </div>
  )
}
