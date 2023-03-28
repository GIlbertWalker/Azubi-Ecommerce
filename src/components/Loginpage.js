import React, { useState } from 'react'
import Navbarlogin from './Navbarlogin'

function Loginpage() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(email)
        console.log(pass)
    }

  return (
   <section className="main-section">
    <Navbarlogin/>

    <div className='form-content'>
    <div>
    <form >
      <h1>Sign in</h1>
      <label className ="label"htmlFor="email">Email Adress</label><br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" id="email" name="email"/><br />
        <label className ="label" htmlFor="password">Password</label><br />
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" id="password" name="password"/><br />
        <button onClick={handleSubmit} className="btn-form" type="submit">Sign in</button>
        </form>
    </div>
    </div>
    </section>
  )
}

export default Loginpage
