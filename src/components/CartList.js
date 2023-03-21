import React from 'react'
import Button from './Button'




export default function CartList() {

    const allcarts = [
        {
            img: "./image/menshirt.png",
            product: "Men Shirt",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$29.00"
        },

        {
            img: "./image/nikesneaker.png",
            product: "Sneaker Nike",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$39.00"
        },

        {
            img: "./image/pumasneaker.png",
            product: "Puma Sneaker",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$44.00"
        },


        {
            img: "../image/alonzidress.png",
            product: "Aronzi Dress",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$13.00"
        },

        {
            img: "../image/watch.png",
            product: "Watch",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$19.00"
        },

        {
            img: "../image/cap.png",
            product: "Men Cap",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$10.00"
        },

        {
            img: "../image/jeans.png",
            product: "Ladies Jeans",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" ",*/
            price: "$40.00"
        },

        {
            img: "../image/longsleeves.png",
            product: "Long Sleeve",
            productDescription: "Lorem timpanicum ibanumbra gelum  absulam navigitus abalus",
            /*cartButton:" "*/
            price: "$35.00"
        }

    ]

    const allcartslist = allcarts.map((allcart, index) => (

        <div className="cart" key={index}>


            <img src={allcart.img} />

            <div className="Cartdetails">
                <h3>{allcart.product}</h3>
                <p> {allcart.productDescription} </p>

                <div>
                    <div className="Place-order-and-price "> <Button className="cart-button" name="Place Order" /></div>
                    <div className="Place-order-and-price "> <p className="inline-p-tags" > {allcart.price}</p></div>
                </div>
            </div>

        </div>))

    return (
        <div className="cart-list-container">
            {allcartslist}
        </div>
    )
}




