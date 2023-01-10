import React from 'react'

const StatItem = ({ count, icon, title }) => {
  return (
    <div className={`max-w-sm flex border border-b-4 flex-col shadow-xl space-y-4 bg-white px-8 py-10 rounded-md ${title.charAt(0) === "p" ? " border-b-orange-500" : title.charAt(0) === "i" ? ' border-b-blue-500' : title.charAt(0) === "j" ? ' border-b-red-600' : ""}`}>
      <div className='flex justify-between items-center'>
        <p className={`text-4xl font-bold ${title.charAt(0) === "p" ? "text-orange-500" : title.charAt(0) === "i" ? 'text-blue-500' : title.charAt(0) === "j" ? 'text-red-500' : ""}`}>{count}</p>
        <div className=''>
          {icon}
        </div>
      </div>
      <p className='capitalize font-semibold text-xl'>{title}</p>
    </div>
  )
}

export default StatItem