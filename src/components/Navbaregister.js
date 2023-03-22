import React from 'react'
import '../Css/login.css'

// import bag from 'azubi-ecommerce/public/bag'
const NavbaRegister = props => {
  return (
    <div className='navbar'>
    <div className='navbar-left'>
    
      <li>AzubiShop</li>
    </div>

    <div className='navbar-right'>
      <p>{props.Ninfo}</p>
      <button className='btn'>{props.btnName}</button>
    </div>
    
  </div>
  )
}

export default NavbaRegister



