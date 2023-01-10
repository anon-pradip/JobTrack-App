import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localStorage"
import { logoutUser } from "../user/userSlice";

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState
}

export const getAllJobs = createAsyncThunk("allJobs", async (_, thunkApi) => {
  const { page, search, searchStatus, searchType, sort } = thunkApi.getState().allJobs
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`
      }
    })
    return resp.data
  } catch (error) {
    return thunkApi.rejectWithValue("There was an error");
  }
})

export const showStats = createAsyncThunk("allJobs/showStats", async (_, thunkApi) => {
  try {
    const resp = await customFetch.get("/jobs/stats", {
      headers: {
        authorization: `Bearer ${thunkApi.getState().user.user.token}`
      }
    })
    console.log(resp.data);
    return resp.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
})

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState }
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: (state) => initialState
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.jobs = payload.jobs
      state.numOfPages = payload.numOfPages
      state.totalJobs = payload.totalJobs
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [showStats.pending]: (state) => {
      state.isLoading = true
    },
    [showStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications
    },
    [showStats.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  }
})

export const { showLoading, hideLoading, handleChange, clearFilters, changePage, clearAllJobsState } = allJobsSlice.actions;

export default allJobsSlice.reducer