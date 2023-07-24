import React from 'react';
import validate from './validateRegister';
import useForm from './useForm.js';
import './RegisterForm';
import {Link} from "react-router-dom"


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='r-form-content-right'>
      <form onSubmit={handleSubmit} className='r-form' noValidate>
        <h1>
          SIGN UP
        </h1>
        <div className='r-form-inputs'>
          <label className='r-form-label'>First Name</label>
          <input
            className='r-form-input'
            type='text'
            name='fname'
            placeholder= "First Name: i.e. John"
            value={values.username}
            onChange={handleChange}
          />
          {errors.fname && <p>{errors.fname}</p>}
        </div>

        <div className='r-form-inputs'>
          <label className='r-form-label'>Last Name</label>
          <input
            className='r-form-input'
            type='text'
            name='lname'
            placeholder= "Last Name: i.e. Smith"
            value={values.username}
            onChange={handleChange}
          />
          {errors.lname && <p>{errors.lname}</p>}
        </div>


        <div className='r-form-inputs'>
          <label className='r-form-label'>Email</label>
          <input
            className='r-form-input'
            type='email'
            name='email'
            placeholder='Enter your email: i.e JohnSmith@gmail.com'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='r-form-inputs'>
          <label className='r-form-label'>Password</label>
          <input
            className='r-form-input'
            type='password'
            name='password'
            placeholder='Enter your password (6+ characters)'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='r-form-inputs'>
          <label className='r-form-label'>Confirm Password</label>
          <input
            className='r-form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password (6+ characters)'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='r-form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='r-form-input-login'>
          Already have an account?  <Link to='/login' 
            onClick={() => {
              window.scroll(0, 0);
            }}
           
           >LOG IN</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
