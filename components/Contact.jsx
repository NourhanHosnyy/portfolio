import React from 'react'

const Contact = () => {
  return (
   <div className='flex justify-between mt-50 ml-30 mr-30'>
    <div>
        <h2 className='ml-50 text-6xl text-zinc-700 font-bold'>Contact</h2>
        <h2 className='ml-50 text-6xl mb-5 text-orange-400 font-bold'>Me</h2>
    </div>
    <div className='mr-50 mt-10'>
       <p className='text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold'>phone:+201069025357</p> 
       <p className='text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold'>Email: nourhanhosny87@gmail.com</p>
       <p className='text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold'>LinkedIn: <a href="www.linkedin.com/in/nourhan-hosny-48628929b">click</a></p>
    </div>
   </div>
  )
}

export default Contact
