import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const BookingPage = () => {
  const navigate=useNavigate ()
  const handlerHome = () => {
    navigate('/');
  }

  return (
   <>
   <h1>Booking page</h1>
    <button onClick={handlerHome}>Back to home</button>
   </>
  )
}

export default BookingPage
