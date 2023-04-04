import React from 'react'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import CompanyLogo from '../components/CompanyLogo'



export default function HomePage() {
    return (
        <div className="home-page">
            <div className="header">
                <CompanyLogo />
                <NavBar />
            </div>


            <Main />

        </div>
    )
}

//....

