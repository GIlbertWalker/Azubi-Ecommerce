import React from 'react';
import allcarts from './allcarts';
import "../Css/Home.css"
import NavbaRegister from './Navbaregister';

export default function CartPage() {
  return (
    <div>
    <div className="navbar">
        <NavbaRegister 
        Cart="Cart"
        Home="Home"
        btnName="Login"/>
    </div>
    <div className="product-container">
      {allcarts.map((product, index) => (
        <div className="product-card" key={index}>
          <div className='card-items'>
            <img src={product.img} alt={product.product} />
            <h2>{product.product}</h2>
            <p className='com_info'>{product.productDescription}</p>
            <div className='priceTag'>
              <button className='order'>Place order</button>      
            <p>{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
