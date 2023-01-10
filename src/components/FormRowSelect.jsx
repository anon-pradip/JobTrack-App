import React from 'react'

const FormRowSelect = ({ labeltext, name, value, handleChange, list }) => {
  return (
    <div className='flex flex-col capitalize space-y-2 '>
      <label htmlFor={name} className="font-semibold">{labeltext || name}</label>
      <select name={name} id={name} value={value} onChange={handleChange} className="w-60 px-1 py-1 rounded-md drop-shadow-md duration-300 text-black focus:ring-0 bg-slate-200">
        {list.map((itemValue, index) => {
          return <option value={itemValue} key={index}>{itemValue}</option>
        })}
      </select>
    </div>
  )
}

export default FormRowSelect