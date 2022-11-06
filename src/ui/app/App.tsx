import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { appSelectors } from '../../bll/app-reducer'
import { JobList } from '../components/job_list/JobList'
import { JobPage } from '../components/job_page/JobPage'
import './App.css'

function App() {
  const appStatus = useSelector(appSelectors.selectorStatus)
  useEffect(() => {
    // projectApi.getJob()
  }, [])

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
