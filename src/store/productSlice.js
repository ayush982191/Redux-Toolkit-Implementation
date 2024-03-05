// const {createSlice} = require("@reduxjs/toolkit")
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const STATUSES =Object.freeze({
    IDLE : "idle",
    ERROR : "error",
    LOADING : 'loading'
})
export const fetchProduct = createAsyncThunk("product/fetch",async ()=>{
    await axios.get("https://fakestoreapi.com/products")
           .then((response)=>{
               console.log("data coming is ",response.data);
               return response.data
           })
           .catch((error)=>console.log("Show error"))
})
 
const productSlice = createSlice({
    name : "product",
    initialState : {
        data : [],
        status : STATUSES.IDLE 
    } ,
    reducers : {
        setProducts(state , action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProduct.pending ,(state,action)=>{
            state.status = STATUSES.LOADING
        } )
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status =STATUSES.IDLE;
        })
        .addCase(fetchProduct.rejected , (state, action)=>{
            state.status =STATUSES.ERROR;
        })
    }
})

export const {setProducts  ,setStatus} =productSlice.actions;
export default productSlice.reducer




// Thunk
// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch, getState ){
//         dispatch(setStatus(STATUSES.LOADING))
//             try {
//                 axios.get("https://fakestoreapi.com/products")
//                 .then((data)=>dispatch(setProducts(data.data)))
//                 .catch((error)=>console.log("Show error"))
//                 dispatch(setStatus(STATUSES.IDLE));

                
//             } catch (error) {
//                 console.log("Error");
//                 dispatch(setStatus(STATUSES.ERROR));
//             }
//     }
// }