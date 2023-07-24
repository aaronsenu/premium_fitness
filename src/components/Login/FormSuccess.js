import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"





const FormSuccess = () => {
 
  
  
  
  return (
    <div className='r-form-content-right'>
      <h1 className='r-form-success'>You Have Successfull Logged In</h1>
      <div className='navbar-buttons'>
            <div className='navbar_btn_1-link'>
              <Link to="/myHome"
                onClick={() => {
                  window.scroll(0, 0);
                }}><buttons className="btn myHome-btn">MY HOME</buttons>
              </Link>                      
            </div> 
            </div>


    </div>
  );
};

export default FormSuccess;
