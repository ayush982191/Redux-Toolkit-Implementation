import { useState } from 'react'  
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'




function App() {
 
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
   </Routes>
   </BrowserRouter> 
   </>
  )
}
export default App


