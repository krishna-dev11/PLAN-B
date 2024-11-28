import React from 'react'
// import doctor from "..assets/doctor.png"
import doctor from '../assets/doctor.png'

const Rtoaupperprofile = () => {
  return (
    <div className='w-[98%] rounded-md h-[30%] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] relative'>
    <div className='w-[70%] h-full'>

      <div className='h-[2.5rem] w-[10rem] bgform translate-x-12 translate-y-5  text-white flex justify-center items-center'>
                   <p>Digital Wellbeing</p>
      </div>

      <div className='flex  translate-y-8 justify-evenly '>

        <div className='flex flex-col'>
        <div className='h-[7rem] w-[20rem] bgform flex flex-col  justify-center px-3 '>
          <p className=' font-serif text-white text-xl'>Krishna Gothwal </p>
          <p className='text-white font-serif opacity-80'>Doctor's name:- Ishant Parmar</p>
          <div className='flex gap-3 text-white'>status  <div className=' bg-green-500 h-[1.5rem] w-[1.5rem] justify-center items-center rounded-full'> ✔ </div></div>
        </div>
        </div>

        <div className='h-[7rem] w-[20rem] bgform flex justify-evenly '>
        <div className='h-[4rem] w-[4rem] bg-transparent border-[2px] border-yellow-50 rounded-full translate-y-[2rem]'></div>
          <div className='flex gap-1 rotate-180 px-4'>
          <div className='h-[70%] w-4 bg-blue-700'></div>
          <div className='h-[90%] w-4 bg-blue-700'></div>
          <div className='h-[30%] w-4 bg-blue-700'></div>
          <div className='h-[40%] w-4 bg-blue-700'></div>
          <div className='h-[60%] w-4 bg-blue-700'></div>
          <div className='h-[10%] w-4 bg-blue-700'></div>
          <div className='h-[90%] w-4 bg-blue-700'></div>
          <div className='h-[30%] w-4 bg-blue-700'></div>
          <div className='h-[40%] w-4 bg-blue-700'></div>
          </div>
          
        </div>
      </div>
    </div>
        <div className='w-[17rem] absolute top-4 right-10'>
          <img src={doctor}/>
        </div>
    </div>
  )
}

export default Rtoaupperprofile