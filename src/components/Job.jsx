import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HiLocationMarker, HiBriefcase } from "react-icons/hi"
import { GoCalendar } from "react-icons/go"
import moment from 'moment/moment'
import { deleteJob, setEditJob } from '../features/job/jobSlice'

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col max-w-md rounded-md shadow-lg bg-white'>
      {/*  HEADER */}
      <div className='flex space-x-7 mt-3 ml-4'>
        <p className='capitalize bg-blue-800 text-white px-4 py-2 rounded-md
        text-xl font-semibold '>{company.charAt(0)}</p>
        <div className='flex flex-col -space-y-1'>
          <p className='text-lg capitalize font-semibold'>{position}</p>
          <p className='capitalize'>{company}</p>
        </div>
      </div>
      <hr className='mt-3 w-full border-[0.5px] border-slate-200' />
      {/* CONTENT */}
      <div className='grid grid-cols-2 gap-y-3 mt-4 ml-4'>
        <div className='flex space-x-1 items-center'>
          <HiLocationMarker />
          <p className='capitalize'>{jobLocation}</p>
        </div>
        <div className='flex space-x-1 items-center'>
          <GoCalendar />
          <p className='capitalize'>{moment(createdAt).format("MMMM Do, YYYY")}</p>
        </div>
        <div className='flex space-x-1 items-center'>
          <HiBriefcase />
          <p className='capitalize'>{jobType}</p>
        </div>
        <p className={`capitalize max-w-max px-2 rounded-sm ${status === 'declined' ? 'bg-red-500' : ''} ${status === 'pending' ? 'bg-yellow-300' : ''} ${status === 'interview' ? 'bg-blue-300' : ''}`} >{status}</p>
      </div>
      {/* FOOTER */}
      <div className='flex space-x-3 mt-4 ml-4 mb-3'>
        <Link to='/add-job' className='px-2 bg-green-400 rounded-sm' onClick={() => dispatch(setEditJob({ editJobId: _id, position, company, jobLocation, jobType, status }))}
        >Edit</Link>
        <Link className='px-2 bg-red-300 rounded-sm'
          onClick={() => dispatch(deleteJob(_id))}
        >Delete</Link>
      </div>
    </div>
  )
}

export default Job