import React from 'react'
import {useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function ForgotPassword() {

  const navigate = useNavigate()

  
  const [form, setForm] = React.useState({
    email: '',
  })

  function handleFormChange(event){

    const {name, value} = event.target

    setForm(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  function handleFormSubmit(event){
    event.preventDefault()
    console.log(form)
  }


  return (
    <div className = 'signin'>
      <h1>Sign In</h1>

      <div>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" alt="" />

        <div className='signin-form'>
          <input type="email" placeholder='Email address' onChange={handleFormChange} name="email" id="" />

          <div>
            <p>Don't have an account? <span onClick = {() => navigate('/sign-up')}>Register</span></p>
            <span onClick = {() => navigate('/sign-in')}>Sign in instead</span>
          </div>

          <button className='normal-signin' onClick={handleFormSubmit}>Send reset email</button>

          <p>OR</p>

          <OAuth/>

        </div>
      </div>
    </div>
  )
}
