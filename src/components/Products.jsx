import React, { useEffect, useState } from 'react'
import axios from "axios"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {add} from "../store/cartSlice"
import {useDispatch ,useSelector } from "react-redux"
import { fetchProduct } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';



function Products() {
    // const [products , setProducts ] = useState();
    const dispatch = useDispatch();
    const {data : products  ,status } = useSelector((state)=>state.product)
  // const products=[];


    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      const handleAdd=(item)=>{
        dispatch(add(item)) 
     }      
    // const fetchProducts=async ()=>{
    //     const url = `https://fakestoreapi.com/products`;
    //     await axios.get(url)
    //     .then((data)=> setProducts(data.data))
    //     .catch((error)=>console.log("error"))
    // }

    useEffect(()=>{
        // fetchProducts();
        dispatch(fetchProduct());
    },[])
    console.log("Statuss=",status);
    if(status===STATUSES.LOADING)
    return <h2>Loading</h2>
    if(status===STATUSES.ERROR)
    return <h3>Sometning went wrong</h3>
// console.log("Products is ",data);
  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}  >
    {
        products?.map((item)=>(
            <Box  style={{display:"flex",flexDirection:"column",alignItems:"center"}} key={item.id} sx={{ width: 275 }}>
            <React.Fragment>
      <CardContent>
        <img src={item.image} width="100vw" height="100vh" alt="" />
        <Typography variant="h5" component="div">
        ${item.price}
        </Typography>  
        <Typography variant="body2">
          {item.title} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={()=>handleAdd(item)} style={{backgroundColor:"#aadcf7"}} size="small" >Add to Cart</Button>
      </CardActions>
    </React.Fragment>
    </Box>
        ))
    }
    </div>
        
    </>
  )
}

export default Products