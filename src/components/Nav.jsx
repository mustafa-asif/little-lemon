import React from 'react'
import Images from '../images/Images'
import  '../styles/navbar.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      
      <img className='logo'  src={Images.logo} alt="logo1" />
      <ul className='nav-links'>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/bookingPage">Booking</Link></li>
     
        <li><a href=""></a>Login</li>
      </ul>
    </nav>
    </>
   
   
  )
}

export default Nav
