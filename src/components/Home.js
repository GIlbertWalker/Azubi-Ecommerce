import React from 'react';
import allcarts from './allcarts';
import "../Css/Home.css"
import NavbaRegister from './Navbaregister';

export default function CartPage() {
  return (
    <div>
    <div className="navbar">
        <NavbaRegister Ninfo="New to AzubiShop?" btnName="Sign Up"/>
    </div>
    <div className="product-container">
      {allcarts.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.img} alt={product.product} />
          <h2>{product.product}</h2>
          <p>{product.productDescription}</p>
          <div className='priceTag'>
          <button>Place order</button>      
          <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
