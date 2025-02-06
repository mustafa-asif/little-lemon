import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
     <nav>

      <h1>404 Error</h1>
      <p>Page not found</p>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
     </nav>
    </>
  );
};

export default Error;