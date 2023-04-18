import React, { useState } from "react";
import NavbaRegister from "../components/Navbaregister";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../Css/login.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

   const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !pass || !confirmpass) {
      alert("Please fill in all fields!");
    } else if (pass !== confirmpass) {
      alert("Passwords do not match!");
    } else {
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const existingUser = registeredUsers.find(user => user.email === email);
      if (existingUser) {
        alert("This email address is already registered.");
      } else {
        console.log(email);
        console.log(pass);
        registeredUsers.push({ email, pass });
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
        alert("Account created successfully!");
      };
      navigate.push({
        pathname: "/Home",
        state: {
          name: name
        }
      });
    }
  };

  return (
    <section className="main-section">
      <div className="navbar">
        <NavbaRegister
          Ninfo="Already have an account?"
          img="./images/bag.png"
          btnName="Sign in"
          path="/Login"
        />
      </div>

      <div className="form-content">
        <div>
          <form>
            <h1>Create an account</h1>
            <label className="label" htmlFor="name">
              Name
            </label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
            />
            <br />
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
            <button onClick={handleRegister} className="btn-form" type="submit">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
