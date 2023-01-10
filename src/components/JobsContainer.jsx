import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../features/allJobsSlice/allJobsSlice';
import Job from './Job';
import PageBtnContainer from './PageBtnContainer';


const JobsContainer = () => {

  const { isLoading, jobs, totalJobs, numOfPages,
    page, search, searchStatus, searchType, sort } = useSelector((store) => store.allJobs)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return (
      <div className='flex flex-col absolute top-1/2 left-1/2 w-max lg:ml-0 justify-center items-center'>
        <div className='-ml-14'>
          <svg aria-hidden="true" className="mr-2 w-28 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  if (jobs.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center bg-white shadow-2xl max-w-md mx-auto p-4 rounded-sm mt-60'>
        <h2 className='text-4xl font-semibold'>No Jobs to Display...</h2>
      </div>
    )
  }

  return (
    <>
      <p className='text-xl bg-green-400 px-2 py-1 rounded-md w-max font-medium font-sans'>Total {totalJobs} Job{jobs.length > 1 && 's'} Found</p>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>{
        jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })
      }
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </>
  )
}

export default JobsContainer