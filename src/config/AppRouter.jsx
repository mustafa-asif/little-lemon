import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RouteLists from './RouteLists'

const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        {
          RouteLists.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />
          })
        }
      </Routes>
    </Router>
    </>
  
  )
}

export default AppRouter
