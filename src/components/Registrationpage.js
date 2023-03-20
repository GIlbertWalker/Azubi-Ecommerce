import React,{useState} from 'react'
import Navbaregister from './Navbaregister'
function Registrationpage() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [confirmpass,setPrevpass]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(pass)
    }
  return (
    <section className="main-section">
     <div className="navbar"><Navbaregister/></div>
     <div className='form-content'>
    <div>
  <form>
  <h1>Create an account</h1>
    <label className ="label" htmlFor="email">Email Adress</label><br />
    <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" id="email" name="email"/><br />
    <label className ="label" htmlFor="password">Password</label><br />
    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" id="password" name="password"/><br />
    <label  className ="label" htmlFor="confirm-password">Set Password</label><br />
    <input value={confirmpass} onChange={(e)=>setPrevpass(e.target.value)} type="password" id="confirm-password" name="password"/><br />
    <button onClick={handleSubmit} className="btn-form" type="submit">Create an account</button>
</form>
</div>
</div>
</section>
  )
}

export default Registrationpage


   