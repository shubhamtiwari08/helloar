import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useHistory } from 'react-router'


function Login() {

    const [phoneNumber,setPhoneNumber] = useState(null)
    

    
 

    const navigate = useNavigate()

    


    const handleLogin= async()=>{
        try {
            const res = await fetch("https://dev.api.goongoonalo.com/v1/auth/login",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify({
                    phoneNumber
                })
            })
            const data = await res.json();
            
            
            console.log(data)
            navigate('otpverification',{state:{phoneNumber,requestId:data.requestId}})
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=' flex justify-center items-center w-full h-screen'>
        <div className='w-96 flex flex-col gap-2'>
            <h2>Sign in</h2>
            <p>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
            <input type="text" placeholder='Phone Number with country code eg:+91' max={10} value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
            <button className='btn-primary' onClick={handleLogin}>Sign In</button>

        </div>
    </div>
  )
}

export default Login