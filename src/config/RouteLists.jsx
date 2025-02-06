import React from 'react'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import Error from '../pages/Error'

const RouteLists = [
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/bookingPage",
    element: <BookingPage/>
  },
  {
   path:"*",
    element:<Error />
  }
    
]

export default RouteLists
