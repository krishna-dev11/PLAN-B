import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Bridging Hope with Real-Time Organ Access !!"
      desc1="Donate life, Find Hope, Save Lives"
      desc2="From Compassion to Connection-Organizing Life"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
