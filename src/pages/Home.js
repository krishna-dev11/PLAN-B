import React from 'react'
import logo from "../assets/Logo-planb.png"

const Home = ({isLoggedIn}) => {
  return (
    <div className='flex justify-center items-center w-screen text-white h-[640PX] logo-container'>
      <img src={logo} className='logo'/>
    </div>
  )
}

export default Home
