import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import CompanyLogo from '../components/CompanyLogo'
import NavBar from '../components/NavBar';

export default function LoginPage() {
    const [emailAdress, setemailAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailAdress || !password) {
            alert("All Fields Required")
        }

        const loggedinData = JSON.parse(localStorage.getItem("user"))

        if (emailAdress !== loggedinData.emailAdress &&
            password !== loggedinData.password) {
            alert("email address or password incorrect")
            return
        } else {
            navigate("/")
        }
        setemailAddress("")
        setPassword("")
    }

    return (
        <div className="login-page">

            <div className="login-header">
                <CompanyLogo />
                <NavBar />
            </div>


            <h3>Sign in</h3>

            <form onSubmit={handleSubmit}>
                <label>Email Address</label> <br />
                <input
                    type="email"
                    value={emailAdress}
                    onChange={(e) => setemailAddress(e.target.value)}
                />

                <br />

                <label>Password</label><br />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <br />

                <button className="create-account-button">Sign in</button>

            </form>

        </div>
    )
}
