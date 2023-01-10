import React from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

import { BigSidebar, Navbar, SmallSidebar } from '../../components'

const SharedLayout = () => {
  const { isSideBarOpen } = useSelector((store) => store.user)
  return (
    <div className='flex min-h-screen'>
      <div className="sm:w-0 lg:w-48 border relative">
        {/* SIDEBARS */}
        <BigSidebar />
        <SmallSidebar />
      </div>

      <div className='flex flex-col w-full'>
        {/* NAVBAR */}
        <Navbar />
        <div className="p-4">
          {/* DASHBOARD */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SharedLayout