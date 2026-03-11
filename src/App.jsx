 import React from 'react'
import Naver from './Components/Naver'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Index from './Components/Index';
 
 const App = () => {
  const a=  [
    {id:1, head:"Fast Delivery", text:""},
    {id:2, head:"Free Shipping", text:""},
    {id:3, head:"Best Quality", text:""},

  ]
   return (
     <div>
       <Naver/>
       <Index a= {a}/>
     </div>
   )
 }
 
 export default App
 