import React from 'react';
import allCarts from '../components/allcarts';
import "../Css/Home.css"
import NavbaRegister from '../components/Navbaregister';

export default function Cart() {
  return (
    <div>
    <div className="navbar">
      <NavbaRegister 
      Cart="Cart"
      img="./images/bag.png"
      cartLink="{<CartPage>}"
      Home="/"
      homeLink="/"
      btnName="Login"
      />
    </div>

    </div>
  );
}
