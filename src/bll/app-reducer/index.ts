import * as appSelectors from './selectors'
import { slice } from './app-reducer'
import type { RequestStatusType as T1 } from './types'

const appReducer = slice.reducer
const appActions = {
  ...slice.actions,
}

export type RequestStatusType = T1

export { appSelectors, appReducer, appActions }
