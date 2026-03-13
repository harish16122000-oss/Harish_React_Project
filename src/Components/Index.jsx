import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 import { TbTruckDelivery } from "react-icons/tb";
 import { SiFreecad } from "react-icons/si";
 import { FaAward } from "react-icons/fa";
const Index = () => {
   const a=  [
    {id:1, image:<TbTruckDelivery />, head:"Fast Delivery", text:"Fast and reliable delivery Right to your doorstep"},
    {id:2, image:<SiFreecad />, head:"Free Shipping", text:"Free shipping on all orders No extra charges"},
    {id:3, image:<FaAward />, head:"Best Quality", text:"Premium quality products Trusted and long-lasting"}

  ];
  const[content ,setContent] =useState(0);
  const active = [{ title: "Discover Something New",title1:"Exclusive Offers", content: "Discover a wide range of products designed with modern style and comfort in mind. Our collection is updated regularly to bring you the latest trends and high-quality items that suit every occasion. "},
    { title:"Shop Without Limits",title1:"20% Offer On Everything", content:"We focus on providing a smooth and reliable shopping experience for every customer. From easy browsing to secure checkout and fast delivery, everything is designed to make your shopping simple and enjoyable."},
    { title:"Crafted for Excellence",title1:"Perfect Quality", content:"Our products are carefully selected to ensure the best quality and long-lasting performance. We believe customers deserve products that combine durability, style, and comfort in one perfect package."}
  ]

  return (
    
    <div>
<div className='carousel1'>
         
         {active.map((text,index)=> content === index && (
<div key={index} className='carousel0'>
          <h1 className="carousel2">{text.title}</h1>
          <h1 className="carousel3">{text.title1}</h1>
          <p className='w-50'>{text.content}</p>
          <Button className='view4 mt-md-5 p-md-3'>View Products</Button>
          </div>
         ))}

         
  {active.map((item, index)=> (
    <Button key={index} onClick={()=> setContent(index)}className='btn1 ms-1 mt-5'></Button>
  ))}
    </div>

    <Container>
    
    <div className='blog0'>
      <div className='h1 text-center mt-5 blog '>Why Shop With Us <span className='blog1'>__</span> </div>
       </div>
<div className='mt-5 pt-md-5 d-md-flex justify-content-center card0 '>
{a.map((ab)=>(
      <Card style={{ width: '18rem' }}className='text-center  
      card1 w-100'key={ab.id}>
      <p className='mt-5'></p>
     <i className='icon'>{ab.image}</i>
      <Card.Body>
        <Card.Title className='h1'>{ab.head}</Card.Title>
        <Card.Text className='mt-1'>
          {ab.text}
        </Card.Text>
       
      </Card.Body>
    </Card>))}
    </div>
    
    </Container>

    <div className="mt-5 pt-3 w-100">
      <div className='view  position-relative '></div>
     <div className="view1 "> 
      <div className="view2 h1 ">#NEW ARRIVALS</div>
      <p className="mt-md-4 w-md-75  view3">Discover our latest collection with fresh styles and premium quality. <span className='view5'>Upgrade your wardrobe with the newest trends. Explore the newest additions to our store. Stylish, comfortable, and designed for everyday wear. </span> </p>
        <Button className='view4 mt-md-5 p-md-3'>View Products</Button>
      
    </div>
    </div>
    <div className='contact text-center'>
      <h1 className='contact1 pt-5'>Subscribe To Get Discount Offers </h1>
      <p className='contact2 mt-5 '>Join our community and never miss an offer.
Subscribe now to receive exciting deals, <br /> updates, and special discounts directly in your inbox.</p><br />
      <input type="text" className='contact3 ps-4' placeholder='Enter Your Email'/><br />
      <button className='contact4 mt-5'>Subscribe</button>
    </div>
    </div> 
    
  )
}

export default Index
