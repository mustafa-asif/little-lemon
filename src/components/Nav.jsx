import React from 'react'
import Images from '../images/Images'
import  '../styles/navbar.css'


const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      
      <img className='logo'  src={Images.logo} alt="logo1" />
      <ul className='nav-links'>
        <li> <a href=""></a>Home</li>
        <li><a href=""></a>About</li>
        <li><a href=""></a>Menu</li>
        <li><a href=""></a>Reservations</li>
        <li><a href=""></a>Order Online</li>
        <li><a href=""></a>Login</li>
      </ul>
    </nav>
    </>
   
   
  )
}

export default Nav
