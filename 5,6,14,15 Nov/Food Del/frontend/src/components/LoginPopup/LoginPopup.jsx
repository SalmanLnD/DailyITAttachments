import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [curState, setCurState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={() => setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curState!=="Log In" ? <input type="text" placeholder='Your Name' required /> : <></>}                
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className='btn'>{curState==="Sign Up"?"Create Account":"Log In"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>
                    By continuing, I agree to the terms & privacy policy.
                </p>
            </div>
            {
                (curState==="Log In")
                ?<p> Create a new account ? <span onClick={() => setCurState("Sign Up")}>Click here</span></p> 
                :<p> Already have an account ? <span onClick={() => setCurState("Log In")}>Log In here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup