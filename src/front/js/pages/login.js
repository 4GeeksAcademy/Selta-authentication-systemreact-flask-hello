import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { email, setEmail } = useState("");
	const { password, setPassword } = useState("");

	const handleSubmit = () => {
		e.preventDefault();

		const opt = await fetch ('/login',{
			method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({email, password})	
		});

		if (Response.ok) {
			const {}
		}

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
