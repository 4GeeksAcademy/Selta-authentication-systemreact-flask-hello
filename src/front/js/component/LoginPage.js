import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const LoginPage = () => {
	const { email, setEmail } = useState('');
	const { password, setPassword } = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
	const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      
      if (response.ok) {
        const { access_token } = await response.json();
  
        // Save the token 
        sessionStorage.setItem('token', access_token);
  
        
        window.location.href = '/private';
      } else {
        
        console.error('Login failed');
      }
    };

	return (
		<form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label">Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
      </div>
      <button type="submit" className="submit-button">Login</button>
    </form>
  );
};
