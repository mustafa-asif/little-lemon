import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Header from '../components/Header';

const HomePage = () => {


  return (
    <>
      <nav>
        <Nav />
      </nav>
      <header>
        <Header />
      </header>
     
    </>
  );
};

export default HomePage;
