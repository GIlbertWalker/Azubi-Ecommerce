import React from 'react';
import allCarts from './allcarts';
import "../Css/Home.css"
import NavbaRegister from './Navbaregister';
import SearchBar from './search';

export default function CartPage() {
  return (
    <div>
    <div className="navbar">
      <NavbaRegister 
      Cart="Cart"
      Home="Home"
      btnName="Login"/>
    </div>

    <div className="search-bar">
    <SearchBar/>
    
    </div>
    
    <div className="product-grid">
        {allCarts.map((product, index) => (
          <div className="product-container" key={index}>
            <div className="product-card">
              <div className="card-items">
                <img src={product.img} alt={product.product} />
                <h2>{product.product}</h2>
                <p className="com_info">{product.productDescription}</p>
                <div className="priceTag">
                  <button className="order">Place order</button>      
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
