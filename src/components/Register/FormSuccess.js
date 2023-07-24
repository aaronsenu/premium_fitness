import React from 'react';
import './RegisterForm.css';
import {Link} from "react-router-dom"

const FormSuccess = () => {
  return (
    <div className='r-form-content-right'>
      <h1 className='r-form-success'>Your Account has been created</h1>
      
          <Link to='/login' 
            onClick={() => {
              window.scroll(100, 150);
            }}
           
           >LOG IN</Link>
          
    </div>
  );
};

export default FormSuccess;
