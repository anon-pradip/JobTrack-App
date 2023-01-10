import React from 'react'
import { JobsContainer, SearchContainer } from '../../components'

const AllJobs = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <SearchContainer />
      <JobsContainer />
    </div>
  )
}

export default AllJobs