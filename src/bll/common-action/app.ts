import { createAction } from '@reduxjs/toolkit'
import type { RequestStatusType } from '../app-reducer/types'

const setAppStatus = createAction<{ status: RequestStatusType }>(
  'app/setAppStatus',
)
const setAppError = createAction<{ error: string | null }>('app/setAppError')

export const appActions = {
  setAppStatus,
  setAppError,
}
