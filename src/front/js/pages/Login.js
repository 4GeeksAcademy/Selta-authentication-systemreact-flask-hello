import React from 'react';
import LoginComp from '../component/LoginComp';
import '../../styles/forms.css';


const Login = () => {
  return (
    <div className="form-container">
      <div className="page-title">Login</div>
      <LoginComp />
    </div>
  );
};

export default Login;
