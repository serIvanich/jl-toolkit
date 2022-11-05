import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { projectApi } from '../../api/project_api'
import { JobList } from '../components/job_list/JobList'
import { JobPage } from '../components/job_page/JobPage'
import './App.css'

function App() {
  useEffect(() => {
  
    projectApi.getJob()
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<JobList />} />
        <Route path={'/job'} element={<JobPage />} />
      </Routes>
    </div>
  )
}

export default App
