import React from 'react'
import Button from '../components/Button' /* delete after test*/
import CompanyLogo from '../components/CompanyLogo'
import NavBar from '../components/NavBar'


export default function DetailsPage() {
    return (
        <div className="details-page">

            <div className="header">
                <CompanyLogo />
                <NavBar />
            </div>

            <div className="details-page-main">

                <div className=" details-page-main-cart ">

                    <div>
                        <img src="./image/menshirt.png" className={"details-page-image"} />
                    </div>

                    <div className="details-page-information">
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
