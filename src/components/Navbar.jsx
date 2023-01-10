import React from 'react'
import { Bars3BottomLeftIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar, clearStore } from '../features/user/userSlice'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <div className='h-20 bg-white flex justify-between px-4 items-center'>
      <button onClick={toggle}>
        <Bars3BottomLeftIcon className='h-8 w-8' />
      </button>
      <h1 className='text-2xl font-bold capitalize'>dashboard</h1>
      <div className='relative flex space-x-1'>
        <button
          type="button"
          className="inline-flex capitalize items-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => setShowLogout(!showLogout)}
        >
          <UserCircleIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          {user?.name}
          <ChevronDownIcon className='h-4 w-4 ml-2' />
        </button>
        <button
          type="button"
          className={showLogout ? 'absolute top-12 left-3 w-20 inline-flex items-center rounded-md border border-transparent bg-indigo-600  px-3 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' : 'hidden'}
          onClick={() => dispatch(clearStore())}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar