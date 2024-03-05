import { Button } from '@mui/material';
import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'; 

function Cart() {
  const products = useSelector((state)=>state.cart)
const dispatch = useDispatch();
  const handleRemove=(id)=>{
    dispatch(remove(id))
}
const totalPrice=()=>{
  let cartValue=0;
   cartValue=products.reduce((accumulator, item)=> accumulator += item.item.price,0);
  // console.log("cart value is ",cartValue);
  return cartValue;

}
  // console.log("products are ",products);
  return (
    <div>
      <h3>Your Cart Items:-</h3>
     {
      products.length==0 ? <h1>OOps Your cart is Empty</h1> : 
      <div className="cartWrapper" style={{marginTop:"5rem"}}>
      {
        products.map((item)=>(
          <div className="card" style={{display:"flex",alignItems:"center",justifyContent:"space-around",borderBottom:"2px solid black"}} >
          <img src={item.item.image} alt="Avatar" style={{width :"10rem",height:"8rem"}} />
          <div className="container" style={{padding:"2px 16px",width:"25rem"}} >
            <h4><b>{item.item.title}</b></h4>
            <p  >{item.item.description}</p>
            <h3 style={{color:"#cc6600"}} >Rs: {item.item.price}</h3>
          </div>
           <Button onClick={()=>handleRemove(item.item.id)} style={{height:"2rem"}} variant='outlined' >Remove</Button>
        </div>
        ))  
      } 
      <h1>Total Price = {totalPrice()}</h1>
    </div>
     }
     
    </div>
  )
}

export default Cart