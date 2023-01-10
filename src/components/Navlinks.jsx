import React from 'react'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const Navlinks = ({ toggleSidebar }) => {
  return (
    <div>
      <div className='flex flex-col'>
        {links.map((link) => {
          const { id, icon, text, path } = link
          return (
            <NavLink to={path} className={({ isActive }) =>
              isActive ? 'text-blue-500' : null
            } key={id} onClick={toggleSidebar} >
              <div className='flex justify-center items-center space-x-3 mt-5'>
                <span className='mr-3 h-6 w-6 flex-shrink-0'>{icon}</span>
                <span className='text-lg font-semibold capitalize flex-1'>{text}</span>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Navlinks