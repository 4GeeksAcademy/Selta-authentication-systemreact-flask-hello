import React, { useState } from 'react';
import "../../styles/forms.css";

export const SignUp = () => {
    const { email, setEmail } = useState('');
	const { password, setPassword } = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch ('/signup',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          if (response.ok) {
            window.location.href = '/login';
          } else {
            console.error ('Signup failed');
          }
    };




return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

