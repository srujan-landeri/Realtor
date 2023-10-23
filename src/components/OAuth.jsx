import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className='google-signin'>
        <FcGoogle className='google-icon' size={25}/>
        Continue with Google
    </button>
  )
}
