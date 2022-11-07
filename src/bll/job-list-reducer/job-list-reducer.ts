import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { projectApi } from '../../api/project-api'
import type { ThunkError } from '../../utils/types'
import { appActions } from '../common-action/app'
import type { JobType } from './types'

const fetchJodList = createAsyncThunk<
  { jobList: JobType[] },
  undefined,
  ThunkError
>('jobList/fetchJobList', async (params, thunkAPI) => {
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'loading' }))
  try {
    const data = await projectApi.fetchJobList()
    thunkAPI.dispatch(appActions.setAppStatus({ status: 'succeeded' }))
    console.log(data)
    return { jobList: data }
  } catch (err) {
    thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }))
    const message = err as string
    console.log(err)
    return thunkAPI.rejectWithValue({ error: message })
  }
})

export const asyncActions = {
  fetchJodList
}

export const slice = createSlice({
  name: 'jobList',
  initialState: [] as Array<JobType>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJodList.fulfilled, (state, action) => {
      state = action.payload.jobList
    })
  },
})
