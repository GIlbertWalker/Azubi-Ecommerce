import React, { useState } from "react";
import NavbaRegister from "./Navbaregister";
import '../Css/login.css'


function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the user's email and password from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered email and password match the stored values
    if (email === storedEmail && pass === storedPassword) {
      // If they match, log the user in
      alert("You are now logged in!");
      // You can also redirect the user to another page here
    } else {
      // If they don't match, show an error message
      alert("Invalid email or password.");
    }
  };

  return (
    <section className="main-section">
      <div className="navbar">
        <NavbaRegister Ninfo="New to AzubiShop?" btnName="Sign Up"/>
      </div>

      <div className="form-content">
        <div className="form">
          <form>
            <h1>Sign In</h1>
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            <br />
            <button onClick={handleSubmit} className="btn-form" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
