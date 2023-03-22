import React from 'react'
import CartList from './CartList'

export default function Main() {
    return (
        <div className="main">

            <input type={"search"} placeholder={"Search products"} className="search-box"></input>


            <div className="all-cart-on-main">

                <CartList />

            </div>

        </div >
    )
}



//.