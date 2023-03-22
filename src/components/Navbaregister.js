import React from 'react'
import '../Css/login.css'

// import bag from 'azubi-ecommerce/public/bag'
const NavbaRegister = props => {
  return (
    <div className='NavBar'>
    {/* <img src={bag} alt="Azubi shop icon"/> */}
    <li>AzubiShop</li>

    <div className='right-cont'>
    <p>{props.Ninfo}</p>
    <a href='login'><button className='btn'>{props.btnName}</button></a>
    </div> 

    </div>
  )
}

export default NavbaRegister
