import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, clearFilters } from '../features/allJobsSlice/allJobsSlice'
import FormRow from "./FormRow"
import FormRowSelect from "./FormRowSelect"

const SearchContainer = () => {
  const { sort, isLoading, search, searchStatus, searchType, sortOptions } = useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(clearFilters())
  }


  return (
    <div className='bg-white px-5 lg:px-10  pb-4 mb-5'>
      <p className='text-2xl font-semibold capitalize mt-2 mb-2'>search form</p>
      <form className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2">

        {/* SEARCH BAR */}
        <FormRow type="text" name="search" value={search} handleChange={handleSearch} />

        {/* SEARCH BY STATUS */}
        <FormRowSelect labeltext="Status" type="text" name="searchStatus" value={searchStatus}
          list={["all", ...statusOptions]} handleChange={handleSearch} />

        {/* SEARCH BY TYPE */}
        <FormRowSelect labeltext="type" type="text" name="searchType" value={searchType}
          list={["all", ...jobTypeOptions]} handleChange={handleSearch} />

        {/*SORT*/}
        <FormRowSelect name="sort" value={sort}
          list={sortOptions} handleChange={handleSearch} />

        <button className='bg-red-300 tracking-widest disabled:cursor-not-allowed font-medium h-max w-60 mt-7 py-1 rounded-md ' onClick={handleSubmit} disabled={isLoading}>Clear Filters</button>
      </form>
    </div>
  )
}

export default SearchContainer