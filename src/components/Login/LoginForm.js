import React, { useState } from 'react';
import './LoginForm.css';
import FormSignup from './FormSignin';
import FormSuccess from './FormSuccess';
import {Link} from "react-router-dom"
import Hero from "../Home/Hero/Hero"
import Home from "../../components/Home/Home"

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='login-page'>
      <div className='l-form-container'>
        <div className='l-form-content-left'>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
