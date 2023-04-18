import React from 'react';
import '../Css/login.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../pages/cartpage';

const NavbaRegister = props => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.path);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='left'>
        <img src={props.img} alt='logo'></img>
        <p>AzubiShop</p>
      </Link>

      <div className='center'>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/Cart'>Cart</NavLink>
      </div>

      <div className='right'>
        <p className='info'>{props.Ninfo}</p>
        <button className='btn' onClick={handleClick}>
          {props.btnName}
        </button>
      </div>
    </nav>

    
  )
}

export default NavbaRegister;
