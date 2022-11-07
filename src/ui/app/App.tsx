import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { appSelectors } from '../../bll/app-reducer'
import { jobListActions, jobListSelectors } from '../../bll/job-list-reducer'
import { useActions } from '../../utils/redux-utils'

import { JobList } from '../components/job-list/JobList'
import { JobPage } from '../components/job-page/JobPage'
import './App.css'

function App() {
  const appStatus = useSelector(appSelectors.selectorStatus)
  const jobList = useSelector(jobListSelectors.selectorJobList)
  const { fetchJodList } = useActions(jobListActions)
  useEffect(() => {
    if (!jobList.length) {
      fetchJodList()
    }
  }, [fetchJodList, jobList.length])

  return (
    <div className='App'>
      {appStatus === 'loading' && <div>loading...</div>}
      <Routes>
        <Route path='/' element={<JobList />} />
        <Route path={'/job'} element={<JobPage />} />
      </Routes>
    </div>
  )
}

export default App
