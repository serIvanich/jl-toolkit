import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JobList } from '../components/job_list/JobList'
import { JobPage } from '../components/job_page/JobPage'
import './App.css'

function App() {
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
