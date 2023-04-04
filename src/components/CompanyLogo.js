import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CompanyLogo() {
    return (
        <div>

            <NavLink to="/" className="company-logo" >
                <img src="../image/bag.png" width="50px" />
                <div className="company-name">AzubiShop </div>
            </NavLink>

        </div>
    )
}
