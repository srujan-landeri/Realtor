import React from 'react'
import {useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function SignUp() {

  const navigate = useNavigate()

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: ''
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

        <form className='signin-form'>
          <input type="name" placeholder='Full Name' name="name" onChange={handleFormChange} id="" />
          <input type="email" placeholder='Email address' name="email" onChange={handleFormChange} id="" />
          <input type="password" placeholder='Password' name="password" onChange={handleFormChange} id="" />

          <div>
            <p>Have an account? <span onClick = {() => navigate('/sign-in')}>Sign in</span></p>
            <span onClick = {() => navigate('/forgot-password')}>Forgot password?</span>
          </div>

          <button className='normal-signin' onClick={handleFormSubmit}>Sign Up</button>

          
          <p>OR</p>

          <OAuth/>


        </form>
      </div>
    </div>
  )
}
