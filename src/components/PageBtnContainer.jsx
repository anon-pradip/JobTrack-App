import React from 'react'
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../features/allJobsSlice/allJobsSlice'

const PageBtnContainer = () => {
  const { isLoading, numOfPages, page, totalJobs } = useSelector(store => store.allJobs)
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (he, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    dispatch(changePage(newPage))
  }

  return (
    <div className='flex justify-end items-center text-center space-x-4'>
      <button type='button' onClick={prevPage} className="bg-white px-4 py-1 flex justify-center items-center space-x-2 text-blue-700 font-semibold rounded-sm">
        <BiChevronsLeft className='' />
        <p className=''>Prev</p>
      </button>
      <div className='flex space-x-2 bg-blue-200 rounded-sm'>
        {pages.map((pageNumber) => {
          return (
            <button key={pageNumber} onClick={() => dispatch(changePage(pageNumber))}
              className={`font-semibold  px-3 py-1 rounded-sm ${pageNumber === page ? "bg-blue-600 text-white" : "text-blue-900"}`}>{pageNumber}</button>
          )
        })}
      </div>
      <button type='button' onClick={nextPage} className="bg-white px-4 py-1 flex justify-center items-center space-x-2 text-blue-700 font-semibold rounded-sm">
        <p>Next</p>
        <BiChevronsRight />
      </button>
    </div>
  )
}

export default PageBtnContainer