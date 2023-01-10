import React from 'react'
import Navlinks from './Navlinks'
import Logo from './Logo'
import { toggleSidebar } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const BigSidebar = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (

    <div className={isSidebarOpen ? 'hidden' : 'hidden lg:block h-full  bg-white'}>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4 ">
          <Logo />
        </div>
        <div className='mt-48 mx-auto'>
          <Navlinks />
        </div>
      </div>
    </div>

  )
}

export default BigSidebar