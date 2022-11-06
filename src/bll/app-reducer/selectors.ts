import type { AppRootStateType } from '../../utils/types'

export const selectorStatus = (state: AppRootStateType) => state.app.status
export const selectorError = (state: AppRootStateType) => state.app.error
