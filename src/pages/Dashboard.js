import React from 'react'
import ThreeDelment from '../components/ThreeDelment'
import { FaArrowRight } from "react-icons/fa";
import chatbot from "../assets/chatbot-removebg-preview.png"


const Dashboard = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen relative '>

      <div className='h-[85%] overflow-hidden w-[95%] rounded-md bgform'>
            <ThreeDelment/>
      </div>

      <div className="bg-white h-[4rem] w-[70%] fixed bgform z-50 translate-y-[10rem] flex justify-evenly items-center text-white">
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Patient</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Donor</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Doctor</div>
        <div className='bgform h-[90%] w-[19%] justify-center flex items-center'>Submit</div>
        <div className='bgfor rounded-lg h-[90%] w-[18.5%] justify-center flex items-center bg-[#FFB200]'>
        <FaArrowRight fontSize={32} />
        </div>
      </div>

      <div>
        <div className=' h-[40px] w-[40px] rounded-full fixed right-[3rem] bottom-[5rem]'>
          <img src={chatbot}/>
        </div>
      </div>

      <div className=' bg-black h-[40px] w-[40px] rounded-full  '></div>


    </div>
  )
}

export default Dashboard
