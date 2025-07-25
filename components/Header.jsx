import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between align-items-center  font-sans pt-8 pb-5'>
        <div>
           <h1 className='ml-10 mt-0 text-3xl text-orange-400 font-extrabold'>NH</h1>
        </div>  
        <div>
            <a className='ml-200 text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold' href="#">About</a>
        </div>
        <div>
           <a className='text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold' href="#">Projects</a>
        </div>
        <div>
          <a className='mr-10 text-md text-zinc-700 hover:text-zinc-400 hover:cursor-pointer font-bold' href="#">Contact</a>
        </div>
    </div>
  )
}

export default Header
