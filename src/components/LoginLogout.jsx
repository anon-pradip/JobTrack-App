import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/20/solid'

import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../features/user/userSlice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LoginLogout() {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <Listbox>
      {({ open }) => (
        <>
          <div>
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-blue-500 text-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <UserCircleIcon className='h-6 w-6' />
                <span className="ml-3 block truncate">{user?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-sky-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option className="text-black py-2 bg-sky-200
                         cursor-pointer rounded-sm text-center">
                  <button className='text-sky-900 st font-semibold tracking-wideer' onClick={() => dispatch(logoutUser())}>Logout</button>
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
