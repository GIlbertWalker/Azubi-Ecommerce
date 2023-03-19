import React from 'react'
// import bag from 'azubi-ecommerce/public/bag'
const Navbaregister = () => {
  return (
    <div className='main'>
   {/* <img src={bag} alt="Azubi shop icon"/> */}
    <li>AzubiShop</li>
    <div className='right-cont'>
    Already have an account?
    <li><a href='login'><button className='btn'>Sign in</button></a></li>
    </div> 
    </div>
  )
}

export default Navbaregister
