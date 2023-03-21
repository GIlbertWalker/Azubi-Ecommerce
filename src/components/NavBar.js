import React from 'react'
import Button from './Button'

export default function NavBar() {
    return (
        <div className="nav">
            <div className="company-name">
                <div className="Azubi-logo">AzubiShop </div>
            </div>

            <div className="home-cart-links">
                <a href="#" className="Navlinks" > Home </a>
                <a href="#" className="navlinks"> Cart </a>
            </div>

            <div>
                <Button className="nav-button" name="Login" />
            </div>
        </div>
    )
}
