import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Navbar() {
  const items=useSelector((state)=>state.cart)

  return (
    <>
   <div style={{display:"flex" , justifyContent:"space-around",alignItems:"center",padding:"2rem"}} >
   <span className="logo" >Redux</span>
    <div style={{display:"flex",justifyContent:"space-around", width:"10rem"}}>
        <Link className='navLink' style={{textDecoration:"none", color:"#cc6600"}} to="/" >Home</Link>
        <Link className='navLink' style={{textDecoration:"none", color:"#cc6600"}} to="/cart" >Cart</Link>                                                                                               
    </div>
    <div className="cartCount" style={{border:"2px solid black", padding:"1rem",borderRadius:"10px",}} >
       <Link to="/cart" style={{textDecoration:"none", color:"#cc6600"}} >cart Item : <span style={{fontSize:"20px"}} > {items.length}</span></Link>
    </div>
   </div>
    </>
  )
}

export default Navbar