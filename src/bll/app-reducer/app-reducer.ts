import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { appActions } from '../common-action/app'
import type { AppInitialStateType, RequestStatusType } from './types'

export const slice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle',
    error: null,
  } as AppInitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        appActions.setAppStatus,
        (state, action: PayloadAction<{ status: RequestStatusType }>) => {
          state.status = action.payload.status
        },
      )
      .addCase(
        appActions.setAppError,
        (state, action: PayloadAction<{ error: string | null }>) => {
          state.error = action.payload.error
        },
      )
  },
})
