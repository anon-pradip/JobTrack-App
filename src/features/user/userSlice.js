import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify"
import customFetch from "../../utils/axios";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { clearAllJobsState } from "../allJobsSlice/allJobsSlice";
import { clearValues } from "../job/jobSlice"

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/auth/register', user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post('/auth/login', user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
  try {
    const resp = await customFetch.patch('/auth/updateUser', user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    })
    return resp.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized access found, logging out! ");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

export const clearStore = createAsyncThunk("user/clearStore", async (message, thunkAPI) => {
  try {
    // LOGOUT USER
    thunkAPI.dispatch(logoutUser(message))
    // CLEAR JOB VALUES
    thunkAPI.dispatch(clearAllJobsState())
    // CLEAR JOB INPUT VALUES
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state) => {
      state.user = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome back ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success("User Updated")
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [clearStore.rejected]: () => {
      toast.error("There was an error!")
    }
  }
})

export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer;