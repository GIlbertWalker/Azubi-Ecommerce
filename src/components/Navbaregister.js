import React from 'react'
import '../Css/login.css'

const NavbaRegister = props => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <li>AzubiShop</li>
      </div>

      <div className='navbar-right'>
        <p className='info'>{props.Ninfo}</p>
        <p><button className='btn'>{props.btnName}</button></p>
      </div>
    </nav>
  )
}

export default NavbaRegister
