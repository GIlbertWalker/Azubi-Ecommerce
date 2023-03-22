import React from 'react';
import '../Css/Home.css'
import allcarts from './allcarts.js'

export default function EcommercePage() {
  return (
    <div>
      {allcarts.map((product) => (
        <ProductCard
          img={product.img}
          product={product.product}
          productDescription={product.productDescription}
          price={product.price}
        />
      ))}
    </div>
  );
}

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.product} />
      <h2>{props.product}</h2>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
