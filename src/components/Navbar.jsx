import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Navbar() {
  const items=useSelector((state)=>state.cart)

  return (
    <>
   <div style={{display:"flex" , justifyContent:"space-around",alignItems:"center",border:"2px solid black",padding:"2rem"}} >
   <span className="logo" >Redux</span>
    <div style={{display:"flex",justifyContent:"space-around", width:"10rem"}}>
        <Link className='navLink' to="/" >Home</Link>
        <Link className='navLink' to="/cart" >Cart</Link>                                                                                               
    </div>
    <div className="cartCount">
        cart Item : {items.length}
    </div>
   </div>
    </>
  )
}

export default Navbar