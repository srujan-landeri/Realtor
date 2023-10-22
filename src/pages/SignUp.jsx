import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {useNavigate} from 'react-router-dom'

export default function SignUp() {

  const navigate = useNavigate()
  return (
    <div className = 'signin'>
      <h1>Sign In</h1>

      <div>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" alt="" />

        <div className='signin-form'>
          <input type="name" placeholder='Full Name' name="" id="" />
          <input type="email" placeholder='Email address' name="" id="" />
          <input type="password" placeholder='Password' name="" id="" />

          <div>
            <p>Have an account? <span onClick = {() => navigate('/sign-in')}>Sign in</span></p>
            <span onClick = {() => navigate('/forgot-password')}>Forgot password?</span>
          </div>

          <button className='normal-signin'>Sign Up</button>

          
          <p>OR</p>

          <button className='google-signin'>
            <FcGoogle className='google-icon' size={25}/>
            Continue with Google
          </button>

        </div>
      </div>
    </div>
  )
}
