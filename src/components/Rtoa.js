import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Logo from "../assets/Logo-planb.png"
import { IoSearch } from "react-icons/io5";
// import { FaReply } from "react-icons/fa";
import { FaReply, FaSearchLocation } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
// import { FaMapLocationDot } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5"
import { FcOnlineSupport } from "react-icons/fc";
import { SiInstatus } from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import chatbot from "../assets/chatbot-removebg-preview.png"
// import { Route,Routes } from 'react-router-dom';
// import Donorsearch from './Donorsearch';
// import PrivateRoute from './PrivateRoute';
import Rtoaupperprofile from './Rtoaupperprofile';
import Rtoalowerprofile from './Rtoalowerprofile';





const Rtoa = () => {
  return (
    <div className='w-screen h-screen background px-2 flex gap-x-2 justify-center items-center '>
    {/* left part */}
    <div className='h-[100%] translate-y-[-2rem] w-[7%] bgform rounded-md flex flex-col justify-between items-center'>

      <div className=''>     
            <Link to="/dashboard">
            <img src={Logo} alt="Logo" loading="lazy"  width="90px"/> 
            </Link>
      </div>

     <div className='flex flex-col gap-5'>
      <div>
        <Link to="">
             <IoSearch fontSize={32} fill='#ffffff'/>
        </Link>
      </div>

      <div>
        <FaReply fontSize={32} fill='#ffffff'/>
      </div>

      <Link to='/paymentgatway' >
      <div>
        <IoQrCode fontSize={32} fill='#ffffff'/>
      </div>
      </Link>

      <div>
        <FaBell fontSize={32} fill='#ffffff'/>
      </div>

      <Link to="/ordertracking">
      <div>
        <IoLocation fontSize={32} fill='#ffffff'/>
      </div>
      </Link>

      <div>
        <FcOnlineSupport fontSize={32} fill='#ffffff'/>
      </div>

      <div>
        <SiInstatus fontSize={32} fill='#ffffff'/>
      </div>

      <div>
        <MdSettingsSuggest fontSize={32} fill='#ffffff'/>
      </div>

      <Link to='https://gemini.google.com/app'>
      <div className='h-[2rem] rounded-full w-[2rem] bg-blue-500 '>
        <img src={chatbot}/>
      </div>
      </Link>

      </div>
      <div className='h-[3rem] w-[3rem] rounded-full bg-pink-200 translate-y-[-1rem]'>
      </div>


    </div>
    
    {/* right */}
    <div className='h-[93%] w-[90%] bgform rounded-md flex flex-col justify-evenly items-center translate-y-[-1rem]'>
       <Rtoaupperprofile/>
       <Rtoalowerprofile/>   
    </div>
         
    </div>
  )
}

export default Rtoa