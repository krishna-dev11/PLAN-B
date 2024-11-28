import React from 'react'
import InitiateSearch from './InitiateSearch'
import Mapp from './Mapp'

const Rtoalowerprofile = () => {
  return (
    <div className='h-[65%] w-[98%] flex gap-2'>
  <div className='h-[100%] w-[70%] bg-white bgggg rounded-md max-h-[500px] overflow-y-auto'>
    <InitiateSearch />
  </div>
  <div className='h-full w-[30%] bg-red-400 rounded-md overflow-hidden'>
    <Mapp/>
  </div>
</div>

  )
}

export default Rtoalowerprofile