import React from 'react'

const FormRow = ({ labeltext, type, name, value, handleChange }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={name} className='font-semibold capitalize'>{labeltext ? labeltext : name}</label>
      <input id={name} type={type} name={name} value={value} onChange={handleChange} className='bg-slate-200 rounded-sm mb-2 p-1 w-60 focus:ring-2 focus:outline-none focus:ring-green-500' />
    </div>
  )
}

export default FormRow