import React from 'react'
import ThreeDelment from '../components/ThreeDelment'
import { FaArrowRight } from "react-icons/fa";
import chatbot from "../assets/chatbot-removebg-preview.png"
import { Link } from 'react-router-dom';
import Moves from '../components/Moves';


const Dashboard = () => {
  return (
    <div className='flex justify-cente items-center h-[300rem] w-screen relative flex-col '>

      <div className=' overflow-hidden w-[95%] rounded-md bgform  '>
            <ThreeDelment/>
      </div>

      <div className="bg-white h-[4rem] w-[70%] fixed bgform z-50 top-[37rem] flex justify-evenly items-center text-white">
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Patient</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Donor</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Doctor</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Submit</div>
        <div className='bgfor rounded-lg h-[90%] w-[18.5%] justify-center flex items-center bg-[#FFB200]'>
        <FaArrowRight fontSize={32} />
        </div>
      </div>

      <Link to='https://gemini.google.com/app'>
        <div className=' h-[40px] w-[40px] rounded-full fixed right-[3rem] bottom-[5rem] z-50'>
          <img src={chatbot} />
        </div>
      </Link>

      <Moves/>

      <ProductOverview/>

    </div>
  )
}

export default Dashboard
