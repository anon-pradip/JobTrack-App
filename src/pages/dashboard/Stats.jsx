import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainer, StatsContainer } from '../../components'
import { showStats } from '../../features/allJobsSlice/allJobsSlice'

const Stats = () => {
  const dispatch = useDispatch()
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs)

  useEffect(() => {
    dispatch(showStats())
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats