import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
 import { TbTruckDelivery } from "react-icons/tb";
 import { SiFreecad } from "react-icons/si";
 import { FaAward } from "react-icons/fa";
const Index = () => {
   const a=  [
    {id:1, image:<TbTruckDelivery />, head:"Fast Delivery", text:"Fast and reliable delivery Right to your doorstep"},
    {id:2, image:<SiFreecad />, head:"Free Shipping", text:"Free shipping on all orders No extra charges"},
    {id:3, image:<FaAward />, head:"Best Quality", text:"Premium quality products Trusted and long-lasting"},

  ];
  return (
    
    <div>
      <Carousel className='carousel1'>
      <Carousel.Item interval={1000}>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
         
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='container'> 
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
    </div>
    </div>
  )
}

export default Index
