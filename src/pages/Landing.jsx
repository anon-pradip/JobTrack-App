import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../components'

import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <div className='flex flex-col space-y-24 md:space-y-36 max-w-5xl mx-auto w-full my-4 px-2 '>
      <nav className='flex gap-5'>
        <Logo />
      </nav>
      {/* title and image */}
      <div className='flex flex-col md:flex-row gap-x-5 justify-center items-center'>
        {/* title and content */}
        <div className='flex flex-col justify-start items-start'>
          <h1 className='capitalize text-5xl font-semibold'>job <span className='text-blue-700'>tracking</span>  app</h1>
          <p className='max-w-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit veritatis sequi? Ea corporis optio nihil explicabo nemo fuga placeat.</p>
          <Link to="/register" className='mt-4 bg-blue-600 px-3 py-2 tracking-wider text-white rounded-sm hover:bg-blue-700'>Login/Register</Link>
        </div>
        {/* IMAGE */}
        <div>
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing