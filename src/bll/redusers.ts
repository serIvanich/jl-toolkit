import { combineReducers } from 'redux'
import { appReducer } from './app-reducer'
import { jobListReducer } from './job-list-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  jobList: jobListReducer
})
