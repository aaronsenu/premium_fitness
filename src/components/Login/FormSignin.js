import React from 'react';
import validate from './validateLogin';
import useForm from './useForm.js';
import './LoginForm.css';
import {Link} from "react-router-dom"


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='l-form-content-right'>
      <form onSubmit={handleSubmit} className='l-form' noValidate>
        <h1>
          SIGN IN
        </h1>
        

        <div className='l-form-inputs'>
          <label className='l-form-label'>Email</label>
          <input
            className='l-form-input'
            type='email'
            name='email'
            placeholder='Enter your email: i.e JohnSmith@gmail.com'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='l-form-inputs'>
          <label className='l-form-label'>Password</label>
          <input
            className='l-form-input'
            type='password'
            name='password'
            placeholder='Enter your password (6+ characters)'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className='l-form-input-btn' type='submit'>
          LOG IN
        </button>
        <span className='l-form-input-register'>
          Don't have an account? <Link to = "/register"
          onClick={() => {
            window.scroll(0, 0);
          }}
          >SIGN UP</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
