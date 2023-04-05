import React from 'react'
import Button from '../components/Button'
import CompanyLogo from '../components/CompanyLogo'
import NavBar from '../components/NavBar'



export default function Cart() {
    return (
        <div className=" cart-page ">

            <div className="header">
                <CompanyLogo />
                <NavBar />
            </div>

            <div className="cart-main">
                <div className=" cart-main-grey-background ">

                    <div>
                        <img src="./image/nikesneaker.png" className={"details-page-one-image"} width="50px" />
                    </div>

                    <div className="details-page-one-information">
                        <h3>{"product"}</h3>
                        <p> {"productDescription"} </p>

                        <div>
                            <div > <p className="inline-p-tags" > {"price"}</p></div>
                            <div > <Button className="cart-button" name="Place Order" /></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}


