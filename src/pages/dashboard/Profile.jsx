import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormRow } from '../../components'
import { useState } from 'react'
import { toast } from "react-toastify"
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { isLoading, user } = useSelector(store => store.user)
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastname || "",
    email: user?.email || "",
    location: user?.location || "",
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastName, email, location } = userData
    if (!name || !lastName || !email || !location) {
      toast.error('Please provide all values!')
      return;
    }
    dispatch(updateUser(userData))
  }


  return (
    <div className='flex justify-center'>
      <div className=' flex flex-col justify-start px-3 py-8 w-full max-w-4xl bg-white shadow-xl'>
        <h1 className='text-3xl underline'>Profile</h1>
        <form className='grid sm:grid-cols-1 md:grid-cols-3 mx-auto  gap-3' onSubmit={handleSubmit}>

          {/* NAME */}
          <FormRow labeltext="name" type="text" name="name" value={userData.name} handleChange={handleChange} />
          {/* LAST NAME */}
          <FormRow labeltext='last name' type="text" name="lastName" value={userData.lastName} handleChange={handleChange} />

          {/* EMAIL */}
          <FormRow labeltext="email" type="email" name="email" value={userData.email} handleChange={handleChange} />

          {/* LOCATION */}
          <FormRow labeltext="Location" type="text" name="location" value={userData.location} handleChange={handleChange} />

          <button
            type="submit"
            className='w-max h-max mt-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600  px-3 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Save Changes
          </button>
        </form>

      </div>
    </div>


  )
}

export default Profile