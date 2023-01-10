import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormRow, FormRowSelect } from '../../components'
import { toast } from "react-toastify"
import { clearValues, createJob, editJob, handleChange } from '../../features/job/jobSlice'
import { store } from '../../store'

const AddJob = () => {
  const {
    position, isLoading, jobLocation, company, jobType, jobTypeOptions, statusOptions, status, isEditing, editJobId
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !jobLocation || !company) {
      toast.error("Please fill out all fields")
    }
    // if (isEditing) {
    //   dispatch(editJob({ jobId: editJob, job: { position, jobLocation, jobType, company, status } }))
    //   return
    // }
    dispatch(createJob({ position, jobLocation, jobType, company, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value
    dispatch(handleChange({ name, value }));
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({
        name: 'jobLocation',
        value: user.location,
      }))
    }
  }, [])

  return (
    <div className='flex flex-col pb-14 bg-white'>
      <h3 className='text-4xl mb-9 font-semibold capitalize text-center underline underline-offset-2'>{isEditing ? 'edit job' : 'add job'}</h3>
      <form className='grid sm:grid-cols-1 md:grid-cols-3 mx-auto  sm:gap-3 lg:gap-9' >
        {/* POSITION */}
        <FormRow type="text" labeltext='position' name="position" value={position} handleChange={handleJobInput} />

        {/* COMPANY */}
        <FormRow type="text" name="company" labeltext="company" value={company} handleChange={handleJobInput} />

        {/* JOB LOCATION */}
        <FormRow type="text" name="jobLocation" labeltext="job location" value={jobLocation} handleChange={handleJobInput} />

        {/* SELECTION FORMROW */}
        {/* JOB STATUS */}
        <FormRowSelect name="status" labeltext="status" value={status} list={statusOptions} handleChange={handleJobInput} />

        {/* JOB TYPES */}
        <FormRowSelect name="jobType" labeltext="job type" value={jobType} list={jobTypeOptions} handleChange={handleJobInput} />

        {/* CLEAR AND SUBMIT BUTTON */}

        <div className='flex justify-between mx-2'>
          {/* CLEAR BUTTON */}
          <button type='button' className='w-max h-max mt-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600  px-3 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={() => dispatch(clearValues())}>Clear</button>

          {/* SUBMIT BUTTON */}
          <button type='submit' className='w-max h-max mt-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600  px-3 py-3 text-base font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={handleSubmit} disabled={isLoading}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddJob