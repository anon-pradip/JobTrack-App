import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux'
import Navlinks from './Navlinks'
import Logo from './Logo'
import { toggleSidebar } from '../features/user/userSlice'


const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className={isSidebarOpen ? "absolute top-0 left-0 bg-white w-[300px] h-full" : "hidden"}>
      <button onClick={toggle} className="mt-6 ml-3">
        <XMarkIcon className='h-10 w-10' />
      </button>
      <div className='flex flex-col mt-6 justify-center items-center'>
        <div className='w-52'>
          <Logo />
        </div>
        <div className='mt-28'>
          <Navlinks toggleSidebar={toggle} />
        </div>
      </div>
    </div>
  )
}

export default SmallSidebar