import React from 'react'

const Hero = () => {
  return (

      <div className='flex content-center justify-between items-center justify-items-center mb-80 mt-15'>
      <div>
        <h1 className='ml-50 text-6xl text-zinc-700 font-bold'>I am</h1>
        <h1 className='ml-50 text-6xl mb-5 text-orange-400 font-bold'> Nourhan Hosny</h1>
       <h2 className='justify-self-center ml-50 text-md text-zinc-700 font-semibold'>Computer science student|Full stack enthusiast|React.js|Tailwind css</h2>
      </div>
      <div>
      <img className="rounded-full mr-7 drop-shadow-2xl drop-shadow-orange-300" src="/3466201323164247979.jpg"></img>
      </div>
    </div>
    
  )
}

export default Hero
