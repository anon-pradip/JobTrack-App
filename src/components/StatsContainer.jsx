import React from 'react'
import { useSelector } from 'react-redux'
import StatItem from './StatItem'
import { IoBriefcaseSharp } from "react-icons/io5"
import { BsCalendarCheckFill } from "react-icons/bs"
import { ImCross } from "react-icons/im"


const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)
  const defualtStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <IoBriefcaseSharp className='bg-orange-100 fill-orange-500 p-3 text-5xl rounded-md' />,
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <BsCalendarCheckFill className='bg-blue-100 fill-blue-500 p-3 text-5xl  rounded-md' />,
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <ImCross className='bg-red-100 fill-red-500 p-3 text-5xl  rounded-md' />,
    },
  ]
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 sm:gap-x-0 gap-x-3 gap-y-5 md:gap-y-0 '>
      {defualtStats.map((item, index) => {
        return (
          <StatItem key={index} {...item} />
        )
      })}
    </div>
  )
}

export default StatsContainer