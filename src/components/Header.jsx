import React from 'react'
import Images from '../images/Images'
import  '../styles/header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate=useNavigate ()
  const handleBooking = () => {
    navigate('/bookingPage');
  }
  return (
    <>
    <header className='header'>
      <div className='container'>

      <div className='title'>
        <p>Little Lemon</p>
        <p className='city'>Chicago</p>
      </div>
        <span className='description'>
        <p>
          We are family owned Mediterranean restaurant in Chicago
        </p>
        </span>
      </div>
      <div >
        <img className='logo'src={Images.restaurant} alt="restaurant" />
      </div>
      <div >
        <button onClick={handleBooking} className='book-btn'>Reserve a Table</button>
      </div>

    </header>
    
    </>
   
  )
}

export default Header
