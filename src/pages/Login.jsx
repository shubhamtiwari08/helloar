import React from 'react'

function Login() {
  return (
    <div className=' flex justify-center items-center w-full h-screen'>
        <div className='w-96 flex flex-col gap-2'>
            <h2>Sign in</h2>
            <p>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
            <input type="text" placeholder='Phone Number' />
            <button className='btn-primary'>Sign In</button>

        </div>
    </div>
  )
}

export default Login