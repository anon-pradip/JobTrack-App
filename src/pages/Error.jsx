import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from "../assets/images/not-found.svg"

const Error = () => {
  return (
    <div className='flex flex-col max-w-3xl mx-auto justify-center items-center'>
      {/* IMAGE */}
      <img src={errorImage} alt="not found image" className='h-[500px] w-[500px]' />
      {/* TEXT CONTENT */}
      <div className='flex flex-col'>
        <h1 className='text-3xl font-semibold text-center capitalize'>Ohh! Page not found</h1>
        <h4 className='text-slate-600 mt-3 text-lg'>We are unable to find the page you are looking for</h4>
        <Link to="/" className='text-blue-600 underline mt-3 text-center'>Back Home</Link>
      </div>
    </div>
  )
}

export default Error