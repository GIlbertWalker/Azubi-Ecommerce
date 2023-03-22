import React, { useState } from "react";
import NavbaRegister from "./Navbaregister";
import '../App.css'
import '../Css/login.css'

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass || !confirmpass) {
      alert("Please fill in all fields!");
    } else if (pass !== confirmpass) {
      alert("Passwords do not match!");
    } else {
      console.log(email);
      console.log(pass);
      localStorage.setItem("email", email);
      localStorage.setItem("password", pass);
      alert("Account created successfully!");
    }
  };
  

  return (
    <section className="main-section">
      <div className="navbar">
      <NavbaRegister Ninfo="Already have an account?" btnName="Sign in"/>
      </div>

      <div className="form-content">
        <div>
          <form>
            <h1>Create an account</h1>
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
            <label className="label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <br />
            <input
              className="input"
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
            <br />
            <button onClick={handleSubmit} className="btn-form" type="submit">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;

