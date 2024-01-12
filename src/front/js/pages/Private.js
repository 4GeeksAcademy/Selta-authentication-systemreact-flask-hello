import React from 'react';
import PrivateComp from '../component/PrivateComp.js';
import '../../styles/forms.css';

const Private = () => {
  return (
    <div className="form-container">
      <div className="page-title">Private page</div>
      <PrivateComp />
    </div>
  );
};

export default Private;
