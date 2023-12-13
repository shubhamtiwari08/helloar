import React, { useState } from "react";

function OtpVerfication() {
  //stores-otp
  const [otp, setOtp] = useState(["", "", "", ""]);




  //otp-reading-function
  const handleOtp=(index,value)=>{
      const newOtp = [...otp]
      newOtp[index] = value;

      //moves to next input box if previous is filled
      if(value && index < otp.length - 1){
        document.getElementById(`otp-input-${index+1}`).focus();
      }

      setOtp(newOtp)
  }

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className="w-96 flex flex-col gap-2">
        <h2>OTP Verfication</h2>
        <p>
          We have sent and OTP to +919889898989. Please enter the code received
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
        <button className="btn-primary">Verify</button>
        <p>Resend Otp</p>
        <p>Use Another number</p>
      </div>
    </div>
  );
}

export default OtpVerfication;
