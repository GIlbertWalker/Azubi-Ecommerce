import React from 'react'
import '../Css/login.css'

const NavbaRegister = props => {
  return (
    <nav className='navbar'>
      <div className='left'>
        <li>AzubiShop</li>
      </div>

      <div className='center'>
        <p className='home'>{props.Home}</p>
        <p className='cart'>{props.Cart}</p>
      </div>

      <div className='right'>
        <p className='info'>{props.Ninfo}</p>
        <p><button className='btn'>{props.btnName}</button></p>
      </div>
    </nav>
  )
}

export default NavbaRegister
