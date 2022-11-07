import * as jobListSelectors from './selectors'
import { slice, asyncActions } from './job-list-reducer'


const jobListReducer = slice.reducer
const jobListActions = {
  ...asyncActions,
  ...slice.actions,
}



export { jobListSelectors, jobListReducer, jobListActions }
