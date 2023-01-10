import React, { useEffect, useState } from 'react'
import { Logo, FormRow } from "../components"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
};

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { isLoading, user } = useSelector(store => store.user)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields")
    }
    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }
  }, [user])

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='flex flex-col py-6 w-[400px] justify-center items-center shadow-2xl bg-white border-t-4 rounded-sm border-t-blue-600'>
        <Logo />
        <h1 className='text-3xl mt-4 font-sans font-normal underline'>{values.isMember ? "Login" : "Register"}</h1>

        {/* FORM */}
        <form className='flex flex-col mt-10 w-full px-8' onSubmit={handleSubmit}>
          {/* NAME */}
          {!values.isMember &&
            <FormRow type="text" name="name" handleChange={handleChange} value={values.name} />
          }

          {/* EMAIL */}
          <FormRow type="email" name="email" handleChange={handleChange} value={values.email} />

          {/* PASSWORD */}
          <FormRow type="password" name="password" handleChange={handleChange} value={values.password} />

          <button type='submit' className='bg-blue-600 text-white rounded-sm py-2 mt-4 w-full' disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>

          {/* DEMO LOGIN */}
          <button
            type='button'
            className='bg-blue-600 text-white rounded-sm py-2 mt-4 w-full'
            disabled={isLoading}
            onClick={() =>
              dispatch(
                loginUser({ email: 'testUser@test.com', password: 'secret' })
              )
            }
          >
            {isLoading ? 'loading...' : 'demo app'}
          </button>

          {/* MEMBER OR NOT */}
          <div className='flex justify-center mt-4 space-x-2'>
            <p>{values.isMember ? "Not a member yet? " : "Already a member? "}</p>
            <button type='button' className='text-blue-500' onClick={toggleMember}>{values.isMember ? 'Register' : 'Login'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register