import React from 'react';
import '../Css/login.css';

const NavbaRegister = props => {
  return (
    <nav className='navbar'>
      <div className='left'>
        <a href='/'>AzubiShop</a>
      </div>

      <div className='center'>
        <a href={props.homeLink}>Home</a>
        <a href={props.cartLink}>Cart</a>
      </div>

      <div className='right'>
        <p className='info'>{props.Ninfo}</p>
        <button className='btn'>{props.btnName}</button>
      </div>
    </nav>
  )
}

export default NavbaRegister;
