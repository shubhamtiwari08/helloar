import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function OtpVerfication() {

  //stores-otp
  const [otp, setOtp] = useState(["", "", "", ""]);

  //state from previous route
  const location = useLocation()

  const navigate = useNavigate()

   const {phoneNumber,requestId} = location.state;

  console.log("location", location)

  console.log(otp.join(''))
  //otpverification
  const handleVerify= async() =>{
   
    try {
        const res = await fetch("https://dev.api.goongoonalo.com/v1/auth/verify_otp",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                phoneNumber:phoneNumber,
                requestId:requestId,
                otp:otp.join('')
            })
        })

        
        const data = await res.json();
        console.log(data)
        localStorage.setItem('token',data.token)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  }




  //otp-reading-function
  const handleOtp=(index,value)=>{
      const newOtp = [...otp]
      newOtp[index] = value;

      //moves to next input box if previous is filled
      if(value && index < otp.length - 1){
        document.getElementById(`otp-input-${index+1}`).focus();
      }

      setOtp(newOtp)
      console.log(otp)
  }

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className="w-96 flex flex-col gap-2">
        <h2>OTP Verfication</h2>
        <p>
          We have sent and OTP to {phoneNumber}.  Please enter the code received
          to verify.
        </p>
        <div className="flex justify-between">
          {" "}
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-input-${i}`}
              type="text"   
              value={digit}
              maxLength="1"
              onChange={(e)=>handleOtp(i,e.target.value)}
              className="w-16 h-16 p-4 rounded-sm"
            />
          ))}
        </div>
        <button className="btn-primary" onClick={handleVerify}>Verify</button>
        <p>Resend Otp</p>
        <p>Use Another number</p>
      </div>
    </div>
  );
}

export default OtpVerfication;
