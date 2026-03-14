import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 import { TbTruckDelivery } from "react-icons/tb";
 import { SiFreecad } from "react-icons/si";
 import { FaAward } from "react-icons/fa";
 import image1 from '../assets/imgi_1_logo.png'
 import img1 from "../assets/imgi_14_default.jpg";
 import img2 from "../assets/imgi_64_attractive-young-girl-wearing-casual-260nw-1408503164.jpg";
 import img3 from "../assets/imgi_138_young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg";
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
const [counter, setCouter] = useState(0);
const act= [
  {img: img1,title:'Arjun Kumar',  content:"“Great shopping experience! The product quality is excellent and the delivery was very fast." },
  {img: img2,title:'Priya Sharma',  content:"I love the design and quality of the products. Everything arrived perfectly packed and exactly as shown on the website." },
  {img: img3,title:'Rahul Verma', content:"Amazing service and great value for money. The website is easy to use and the support team was very helpful. T" },
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
    <Button key={index} onClick={()=> setContent(index)}className='btn1 ms-1 mt-5 rounded-circle'></Button>
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
      <h1 className="view2 h1 ">#NEW ARRIVALS</h1>
      <p className="mt-md-4 w-md-75  view3">Discover our latest collection with fresh styles and premium quality. <span className='view5'>Upgrade your wardrobe with the newest trends. Explore the newest additions to our store. Stylish, comfortable, and designed for everyday wear. </span> </p>
        <Button className='view4 mt-md-5 p-md-3'>View Products</Button>
      
    </div>
    </div>
    <Container className='pb-5 mb-5'>
<div className='tes1 text-center'>
        <h1 className='tes'>Customer's Testimonial</h1>
         {act.map((text,index)=> counter === index && (
<div key={index} className='tes0'>
  <img src={text.img} alt=""  height="150px" width="150px" className='rounded-circle tes5'/>
          <h1 className="tes2 mt-2">{text.title}</h1>
          <h6 className="tes3 mt-2">Customer</h6>
          <p className=''>{text.content}</p>
          
          </div>
         ))}

 <div>{act.map((item, index)=> (
    <Button key={index} onClick={()=> setCouter(index)}className='btn1 ms-1 mt-3 rounded-circle'></Button>
  ))}</div>


    </div>
    </Container>
    <div className='contact text-center'>
      <h1 className='contact1 pt-5'>Subscribe To Get Discount Offers </h1>
      <p className='contact2 mt-5 '>Join our community and never miss an offer.
Subscribe now to receive exciting deals, <br /> updates, and special discounts directly in your inbox.</p><br />
      <input type="text" className='contact3 ps-4' placeholder='Enter Your Email'/><br />
      <button className='contact4 mt-5'>Subscribe</button>
    </div>
    <Container>
    <div className="pt-5 d-md-flex justify-content-evenly g-5">
      <div className="">
        <img src={image1} alt="" height="40px" className='mb-3' />
        <p><b>Adress:</b> 2/36 School Street, Pottalkulam</p>
        <p><b>Email:</b> <a href="mail to :harish16122000@gmail.com">harish16122000@gmail.com</a></p>
        <p><b>Telephone:</b><a href="tel: 8523904929"> 8523904929</a></p>
      </div>
      <div className="ms-md-5"><h4 className='ms-4'>Menu</h4>
      <ul type="none" >
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Testimonial</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      </div>
       <div className="ms-md-5"><h4 className='ms-3'>Account</h4>
      <ul type="none">
        <li>Account</li>
        <li>Checkout</li>
        <li>Login</li>
        <li>Register</li>
        <li>Shopping</li>
        <li>Widget</li>
      </ul>
      </div>
      <div className="ms-md-5 ps-md-5">
        <h4>Newsletter</h4>
        <p>Subscribe by our newsletter and get update protidin.</p> 
        <input type="text" placeholder='Enter Your Email'  className='px-5 py-2'/> <button className='p-2 border-0' style={{color:"white", backgroundColor:"#F7444E"}}>Subscribe</button>
      </div>
       </div>
    
    </Container>
    <div className='text-center p-5' style={{backgroundColor:"#222222", color: "white"}}> &copy; @2026 Famms. All rights reserved</div>
   
    </div> 
    
    
  )
}

export default Index
