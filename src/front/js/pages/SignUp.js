import React from 'react';
import SignUpComp from '../component/SignUpComp.js';
import '../../styles/forms.css';


const SignUp = () => {
  return (
    <div className="form-container">
      <div className="page-title">Sign Up page</div>
      <SignUpComp />
    </div>
  );
};

export default SignUp;
