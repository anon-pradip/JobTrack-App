import React, { useState } from 'react'
import BarChart from './BarChart'
import AreaChartComponent from './AreaChartComponent'
import { useSelector } from 'react-redux';
const ChartsContainer = () => {
  const [barchart, setBarchart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <div className='flex flex-col mt-10 justify-center items-center '>
      <h4 className='text-2xl font-bold underline my-2'>Monthly Applications</h4>
      <button type='button' onClick={() => setBarchart(!barchart)} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>{barchart ? "Area Chart" : "Bar Chart"}</button>
      {barchart ? <BarChart data={data} /> : <AreaChartComponent data={data} />}
    </div>
  )
}

export default ChartsContainer