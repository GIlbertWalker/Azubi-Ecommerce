
import React, { useState } from "react";
import NavbaRegister from "../components/Navbaregister";
import '../App.css'
import '../Css/login.css'

function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    if (storedEmail === email && storedPassword === password) {
      // If login credentials match, redirect to home page
      history.push('/');
    } else {
      // If login credentials do not match, show an alert
      alert('Wrong email or password!');
    }
  };
  
  return (
    <section className="main-section">
      <div className="navbar">
        <NavbaRegister 
        img="./images/bag.png"
        Ninfo="Already have an account?" 
        btnName="Sign in"
        />
      </div>

      <div className="form-content">
        <div>
          <form>
            <h1>Log in</h1>
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <br />
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
            />
            <br />
            <label className="label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            <br />
            <br />
            <button onClick={handleLogin} className="btn-form" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
