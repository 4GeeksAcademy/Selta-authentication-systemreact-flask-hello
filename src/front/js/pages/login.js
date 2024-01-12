import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { email, setEmail } = useState("");
	const { password, setPassword } = useState("");

	const handleLogin = () => {
		const opt = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email": email,
				"password": password
			})
		};

		fetch ('https://animated-telegram-jx9wp5656553q695-3001.app.github.dev/', opt)
		.then(resp => {
			if (resp.status === 200) return resp.json();
			else alert("There has been an error");
		})
		.then()
		.catch(error => {
			console.error("There was some kind of error", error);
		});
	};

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<input type="text" placeholder="email" value= {email} onChange={(e) => setEmail(e.target.value)}   />
			<input type="password" placeholder="password" value= {password} onChange={(e) => setPassword(e.target.value)}  />
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
