import React from 'react'
import Images from '../images/Images'
import  '../styles/header.css'


const Header = () => {
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
        <button className='book-btn'>Reserve a Table</button>
      </div>

    </header>
    
    </>
   
  )
}

export default Header
