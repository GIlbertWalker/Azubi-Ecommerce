import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

export default function NavBar() {
    const [user, setUser] = useState(null)


    useEffect(() => {
        const loggedinData = JSON.parse(localStorage.getItem("user"))
        setUser(loggedinData.emailAddress)
    }, [])



    const location = useLocation()

    return (
        <div>
            {
                location.pathname === "/Login" ? (
                    <div className="new-to-azubi-register-button">
                        <span>New to Azubishop?</span>
                        <Link to="/Registration"> <Button name="Register" /> </Link>
                    </div>
                ) : (

                    location.pathname === "/Registration" ? (
                        <div className="have-account-login-button">
                            <span>Already have an account?</span>
                            <Link to="/Login"> <Button name="Login" /> </Link>
                        </div>
                    ) : (

                        < div className="home-cart-links-Login-button">
                            <div className="home-cart-links">
                                <NavLink to="/"> Home </NavLink>
                                <NavLink to="/Cart" > Cart </NavLink>
                            </div>

                            {
                                user ? (
                                    <Link to="/Login">
                                        <Button name="Logout" />
                                    </Link>) : (
                                    <Link to="/Login">
                                        <Button name="Logout" />
                                    </Link>
                                )
                            }

                        </div >


                    )
                )
            }

        </div>

    )
}
