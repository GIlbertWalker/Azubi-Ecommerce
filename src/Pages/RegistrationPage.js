import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import CompanyLogo from '../components/CompanyLogo';
import NavBar from '../components/NavBar';

export default function RegistrationPage() {
    const [emailAdress, setemailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailAdress || !password || !confirmPassword) {
            alert("All Fields Required")
        }

        if (password !== confirmPassword) {
            alert("passwords do not match!")
        }

        const formData = { emailAdress, password }
        window.localStorage.setItem("user", JSON.stringify(formData))

        navigate("/Login")
        setemailAddress("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="registration-page">
            <div className="registration-header">
                <CompanyLogo />
                <NavBar />
            </div>


            <h3>Create an account</h3>

            <form onSubmit={handleSubmit} >
                <label>Email Address</label> <br />
                <input type="email"
                    value={emailAdress}
                    onChange={(e) => setemailAddress(e.target.value)}
                />

                <br />

                <label>Password</label><br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />

                <label>Confirm Password</label><br />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <br />

                <button className="create-account-button">Create an account</button>



            </form>

        </div>
    )
}
