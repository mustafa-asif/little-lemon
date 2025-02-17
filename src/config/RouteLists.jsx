import React from 'react'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'
import BookingForm from '../pages/BookingForm'
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
    path:"/bookingForm",
    element: <BookingForm/>
  },
  {
   path:"*",
    element:<Error />
  }
    
]

export default RouteLists
